import React from "react";
import Head from "next/head";

import { Footer, Navbar } from "../components";
import ShortAdd from "./organisms/ShortAdd";
import WhatsAppButton from "./organisms/WhatsAppButton/WhatsAppButton";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header>
        <ShortAdd />
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <WhatsAppButton />
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
