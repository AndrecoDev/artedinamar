import React from "react";
import { useState } from "react";

const Newsletter = () => {
  const [mail, setMail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isNewLetter: true, mail }),
    });

    if (response.statusCode === 500) return;
    const data = await response.json();

    if (data?.error) {
      toast.error("Hubo un error, intenta mas tarde");
      return;
    }
  };

  return (
    <section className="newsletter">
      <div className="newsletter-background">Newsletter</div>
      <h1>Subscribete a nuestro newsletter</h1>
      <p>Obtiene la última información, promociones y ofertas directamente.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          placeholder="Ingresa tu correo"
        ></input>
        <button type="submit">Suscribirme</button>
      </form>
    </section>
  );
};

export default Newsletter;
