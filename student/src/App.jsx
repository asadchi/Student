import React from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Put from "./components/Put";
import Best from "./components/Best";
import Hr from "./components/Product";
import Size from "./components/Size";
import Fit from "./components/Fit";
import Consider from "./components/Consider";
import Usd from "./components/Usd";
import Ebook from "./components/Ebook";
import List from "./components/list";
import Stay from "./components/Stay";
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Put/>
      <Best/> 
      <Hr/>
      <Size/>
      <Fit/>
      <Consider/>
      <Usd/>
      <Ebook/>
      <List/>
      <Stay/>
      <Footer/>
    </>
  );
}
