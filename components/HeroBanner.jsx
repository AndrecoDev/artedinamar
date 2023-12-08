import React from "react";
import Image from "next/image";
import { CgShoppingCart } from "react-icons/cg";
import headerImg from "../src/assets/header.png";
import featured1 from "../src/assets/Featured1.png";
import featured2 from "../src/assets/Featured2.png";
import featured3 from "../src/assets/Featured3.png";
import featured4 from "../src/assets/Featured4.png";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <header className="header">
      <div className="header-left-side">
        <div className="header-content">
          <span>Promociones hasta del 40%</span>
          <h1>En nuestra tienda, fusionamos moda y creatividad.</h1>
          <p>
            Explora la elegancia en cada detalle: desde nuestros exclusivos
            bolsos tote hasta joyas que cuentan historias y manualidades que
            transforman momentos en recuerdos inolvidables.
          </p>
          <Link href="/products">
            <button className="btn" type="button">
              <CgShoppingCart size={26} /> Comprar
            </button>
          </Link>
        </div>

        {/* <div className="header-featured">
          <Image src={featured1} width={100} height={35} alt="img" />
          <Image src={featured2} width={100} height={35} alt="img" />
          <Image src={featured3} width={100} height={35} alt="img" />
          <Image src={featured4} width={100} height={35} alt="img" />
        </div> */}
      </div>

      <div className="header-right-side">
        <div className="header-circle">
          <Image
            className="header-img"
            src={headerImg}
            width={650}
            height={650}
            // style={{borderRadius: "50%"}}
            alt="header image"
          />
        </div>
      </div>
    </header>
  );
};

export default HeroBanner;
