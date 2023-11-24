import React from "react";
import Header from "../components/header/Header";
import Eco from "../components/eco-date/Eco";
import Discount from "../components/discount/Discount";
import Vebinar from "../components/registerYoutube/Vebinar";
import Team from "../components/team/Team";
import Program from "../components/program/Program";
import Sale from "../components/sale/Sale";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Eco />
      <Discount />
      <Vebinar />
      <Team />
      <Program />
      <Sale />
      <Footer />
    </>
  );
}
