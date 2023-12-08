import React, { useState, useRef } from "react";
import Styles from "./styles.module.css";

import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineShopping,
} from "react-icons/ai";
import { HiOutlineTrash } from "react-icons/hi";
import toast from "react-hot-toast";
import { useStateContext } from "../context/StateContext";
import { urlFor } from "../lib/client";
// import getStripe from "../lib/getStripe/";

import { useRouter } from "next/router";

const Cart = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [emailError, setEmailError] = useState("");
  const [isMailSend, setIsMailSend] = useState(false);

  const router = useRouter();

  const validateEmail = (value) => {
    // Simple email validation using regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSubmitMail = (e) => {
    if (!validateEmail(email)) {
      setEmailError("Por favor ingresa un correo válido");
      return;
    }

    setEmailError("");
    setIsMailSend(true);
  };

  const handleSubmit = async (e) => {
    const userInfo = {
      email,
      name,
      address,
      phoneNumber,
      apartment,
      city,
      cartItems,
    };
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    });
    if (response.statusCode === 500) return;
    const data = await response.json();

    if (data?.error) {
      toast.error("Hubo un error, intenta mas tarde");
      return;
    }

    router.push("/successPay");
  };

  // here
  const cartRef = useRef();
  const { cartItems, totalPrice, totalQty, onRemove, toggleCartItemQuantity } =
    useStateContext();

  const handleCheckout = () => {
    // const stripe = await getStripe();
    // const response = await fetch("/api/stripe", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(cartItems),
    // });
    // if (response.statusCode === 500) return;
    // const data = await response.json();
    // toast.loading("Redirecting...");
    // stripe.redirectToCheckout({ sessionId: data.id });
    // router.push("/checkout");
  };

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <h2>Productos</h2>
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.length < 1 && (
            <div className="empty-cart">
              <AiOutlineShopping size={150} />
              <h1>Tú carrito está vacio</h1>
            </div>
          )}

          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div key={item._id} className="item-card">
                <div className="item-image">
                  <img src={urlFor(item?.image[0])} alt="img" />
                </div>
                <div className="item-details">
                  <div className="name-and-remove">
                    <h3>{item.name}</h3>
                    <button
                      type="buttin"
                      onClick={() => onRemove(item)}
                      className="remove-item"
                    >
                      <HiOutlineTrash size={28} />
                    </button>
                  </div>
                  <p className="item-tag">Dress</p>
                  <p className="delivery-est">Tiempo de entrega</p>
                  <p className="delivery-days">1 a 3 días hábiles</p>
                  <div className="price-and-qty">
                    <span className="price">${item.price * item.quantity}</span>
                    <div>
                      <span
                        className="minus"
                        onClick={() => toggleCartItemQuantity(item._id, "dec")}
                      >
                        <AiOutlineMinus />
                      </span>
                      <span className="num" onClick="">
                        {item.quantity}
                      </span>
                      <span
                        className="plus"
                        onClick={() => toggleCartItemQuantity(item._id, "inc")}
                      >
                        <AiOutlinePlus />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {cartItems.length >= 1 && (
          <div className="order-summary">
            <h3>Resumen de compra</h3>
            <div className="qty">
              <p>Cantidad</p>
              <span>{totalQty}</span>
            </div>
            <div className="subtotal">
              <p>Total</p>
              <span>${totalPrice}</span>
            </div>

            <h3>Ingrese su correo electrónico para continuar</h3>
            <div className={Styles.form__group}>
              <input
                type="email"
                value={email}
                placeholder="Correo electrónico"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {emailError && <span style={{ color: "red" }}>{emailError}</span>}
            <div className={Styles.form__group}>
              <button className="btn" type="button" onClick={handleSubmitMail}>
                Continuar compra
              </button>
            </div>

            {/* <div className={Styles.registration__fsorm}> */}
            {isMailSend && (
              <>
                <div className={Styles.form__group}>
                  {/* <label>Nombres y apellidos</label> */}
                  <input
                    type="text"
                    placeholder="Nombres y apellidos"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className={Styles.form__group}>
                  <input
                    type="text"
                    placeholder="Dirección"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
                <div className={Styles.form__group}>
                  <input
                    type="number"
                    placeholder="Número celular"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
                <div className={Styles.form__group}>
                  <input
                    type="text"
                    placeholder="Apartamento/Conjunto/Edificio (Opcional)"
                    value={apartment}
                    onChange={(e) => setApartment(e.target.value)}
                  />
                </div>
                <div className={Styles.form__group}>
                  <input
                    type="text"
                    placeholder="Ciudad"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
                </div>

                <div className={Styles.form__group}>
                  <button className="btn" onClick={handleSubmit}>
                    Finalizar compra
                  </button>
                </div>
              </>
            )}
          </div>
          // </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
