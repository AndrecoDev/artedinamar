import React, { useState } from "react";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { CgShoppingCart } from "react-icons/cg";
import logo from "../src/assets/Logo.png";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useStateContext } from "../context/StateContext";

const Navbar = ({ Searchproducts }) => {
  const { showCart, setShowCart, totalQty } = useStateContext();
  const [toggleMenu, setToggleMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <nav>
      <Link href="/">
        <Image src={logo} width={100} height={90} alt="logo" />
      </Link>
      <ul className="nav-links">
        <Link href="/bags">
          <li>Bolsos</li>
        </Link>
        <Link href="/male">
          <li>Joyas</li>
        </Link>
        <Link href="/kids">
          <li>Manualidades</li>
        </Link>
        <Link href="/products">
          <li>Todos los productos</li>
        </Link>
      </ul>

      <div className="search-bar">
        <CiSearch />
        <input
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          type="text"
          placeholder="Buscar..."
        />
      </div>

      {/* {showCart ? ( */}
      <Link href="/cart">
        <button className="cart" onClick={() => setShowCart(false)}>
          <CgShoppingCart size={22} />
          <span className="cart-item-qty">{totalQty}</span>
        </button>
      </Link>
      {/* ) : (
        <button className="cart" onClick={() => setShowCart(true)}>
          <CgShoppingCart size={22} />
          <span className="cart-item-qty">{totalQty}</span>
        </button>
      )} */}

      <div className="navbar-smallscreen">
        <RiMenu3Line
          color="black"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="navbar-smallscreen_overlay">
            <Link href="/">
              <Image
                className="logo-small"
                src={logo}
                width={140}
                height={25}
                alt="logo"
              />
            </Link>
            <RiCloseLine
              color="black"
              fontSize={27}
              className="close_icon"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="navbar-smallscreen_links">
              <Link href="/cart">
                <button
                  className="cart-small-screen"
                  // onClick={() => setShowCart(false)}
                >
                  <CgShoppingCart size={22} />
                  <span className="cart-item-qty">{totalQty}</span>
                </button>
              </Link>
              <Link href="/bags" onClick={() => setToggleMenu(false)}>
                <li>Bolsos</li>
              </Link>
              <Link href="/male" onClick={() => setToggleMenu(false)}>
                <li>Joyas</li>
              </Link>
              <Link href="/kids" onClick={() => setToggleMenu(false)}>
                <li>Manualidades</li>
              </Link>
              <Link href="/products" onClick={() => setToggleMenu(false)}>
                <li>Todos los productos</li>
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
