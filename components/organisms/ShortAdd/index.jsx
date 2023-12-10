import React from "react";
import Styles from "./ShortAdd.module.css";

import { BsFillTelephoneFill } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const ShortAdd = () => {
  const handleWhatsAppClick = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=${process.env.NEXT_PUBLIC_WHATSAPP_BUSINESS_NUMBER}`,
      "_blank"
    );
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.contact} onClick={handleWhatsAppClick}>
        <BsFillTelephoneFill size={20} /> <FaWhatsapp size={20} />{" "}
        <span>+57 {process.env.NEXT_PUBLIC_WHATSAPP_BUSINESS_NUMBER}</span>
      </div>

      <div className={Styles.delivery}>
        <span>Servicio contraentrega. Despachos a nivel nacional</span>
        <TbTruckDelivery size={22} />
      </div>
    </div>
  );
};

export default ShortAdd;
