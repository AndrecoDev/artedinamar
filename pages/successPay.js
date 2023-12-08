import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { runConfetti } from "../lib/utils";

const successPay = () => {
  const { setCartItems, setTotalPrice, setTotalQty } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQty(0);
    runConfetti();
  }, []);

  return (
    <div className="success">
      <p className="icon">
        <BsBagCheckFill size={80} />
      </p>
      <h1>Gracias por tu interes de compra!</h1>
      <p>Uno de nuestros asesores se pondrá en contacto contigo.</p>
      <p className="description">
        Si tienes dudas o inquietudes, puedes escribir a
        <a href={`mailto:${process.env.NEXT_PUBLIC_MAIL_SUPPORT}`}>
          {process.env.NEXT_PUBLIC_MAIL_SUPPORT}
        </a>{" "}
        o escribemos por whatsapp
      </p>
      <Link href="/">
        <button className="btn" type="button" width="300px">
          Continuar comprando
        </button>
      </Link>
    </div>
  );
};

export default successPay;
