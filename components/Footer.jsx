import React from "react";
import Image from "next/image";
import logo from "../src/assets/Logo.png";
import { GrFacebookOption, GrTwitter, GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="logo">
          <Image src={logo} width={100} height={90} alt="logo" />
          <p>
            "En nuestra tienda, fusionamos moda y creatividad. Bolsos tote que
            destacan tu esencia urbana, joyas que añaden un toque de rebeldía, y
            manualidades que convierten cada día en una celebración urbana."
          </p>
          <div className="icon-container">
            {/* <div>
              <GrTwitter size={20} />
            </div>
            <div>
              <GrFacebookOption size={20} />
            </div> */}
            <div
              onClick={() => {
                window.open(
                  `https://www.instagram.com/arte.dinamar/`,
                  "_blank"
                );
              }}
            >
              <GrInstagram size={20} />
            </div>
          </div>
        </div>

        <div className="footer-links">
          <h3>Compañia</h3>
          <ul>
            {/* <li>Nosotros</li> */}
            {/* <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>How it Works</li> */}
            <li>Contáctanos</li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Soporte</h3>
          <ul>
            {/* <li>Support Carrer</li> */}
            <li>Servicio 24h</li>
            {/* <li>Quick Chat</li> */}
          </ul>
        </div>

        <div className="footer-links">
          <h3>Contacto</h3>
          <ul>
            <li>Whatsapp</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright © 2023 Arte Dinamar</p>
        <p>
          Design by. <span>Andrecodev</span>
        </p>
        <p>{/* Code by. <span>therichpost</span> */}</p>
      </div>
    </footer>
  );
};

export default Footer;
