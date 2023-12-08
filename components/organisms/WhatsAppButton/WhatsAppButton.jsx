import { FaWhatsapp } from "react-icons/fa";
import Styles from "./WhatsAppButton.module.css";

const WhatsAppButton = () => {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_BUSINESS_NUMBER;
  const defaultMessage = "Hola Dinamar! Quiero más información.";
  const encodedMessage = encodeURIComponent(defaultMessage);

  const handleWhatsAppClick = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <div className={Styles.whatsapp_container} onClick={handleWhatsAppClick}>
      <FaWhatsapp size={50} color={"#FFF"} />
    </div>
  );
};

export default WhatsAppButton;
