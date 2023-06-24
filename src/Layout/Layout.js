import React from "react";
import Header from "../Component/Header/Header/Header";
import Footer from "../Component/Footer";

export default function Layout({ Component}) {
  return (
    <div>
      <Header />
      <Component />
      <Footer />
    </div>
  );
}
