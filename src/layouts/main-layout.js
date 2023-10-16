import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FixedWhatsApp from "../components/FixedWhatsApp";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <Navbar />
      {children}

      <div className="fixed bottom-0 left-0 w-screen">
        <FixedWhatsApp />
      </div>
      <Footer />
    </>
  );
}
