import React from "react";
import Image from "next/image";
import event1 from "../src/assets/event1.png";
import event2 from "../src/assets/event2.png";
import event3 from "../src/assets/event3.png";

const EventsBanner = () => {
  return (
    <section className="event-container">
      <div className="subtitle">
        <span>PROMOCIONES</span>
        <h2>Nuestras promociones</h2>
      </div>

      <div className="event-banner">
        <div className="event-banner-left">
          <div className="event-card">
            <div className="content">
              <h3>
                DESCUENTO <span>30%</span>
              </h3>
              <h4>
                Faroles Navideños <p>Por la temporada de navidad</p>
              </h4>
            </div>
            <Image src={event1} alt="event" />
          </div>

          <div className="event-card">
            <h3>OBTEN 30% DESCUENTO</h3>
            <p>USA EL CODIGO PROMOCIONAL</p>
            <button>NAVIDAD2023</button>
          </div>
        </div>

        <div className="event-banner-right">
          <div className="event-banner-right-1">
            <div className="details">
              <p>Bolso personalizado</p>
              <div className="price">
                <span>$120.000</span>
                <span>$75.000</span>
              </div>
            </div>
            <Image src={event2} alt="event" />
          </div>

          <div className="event-banner-right-2">
            <div className="details">
              <p>Adornos</p>
              <div className="price">
                <span>$225.00</span>
                <span>$190.00</span>
              </div>
            </div>
            <Image src={event3} alt="event" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsBanner;
