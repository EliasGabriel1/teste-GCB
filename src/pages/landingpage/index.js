import React from "react";
import Header from "../../components/Header"
import TextBestServices from "../../components/TextBestServices"
import BestRecipe from "../../components/BestRecipe";

function index() {
  return (
    <>
      <Header/>
      <BestRecipe/>
      <TextBestServices/>
    </>
  );
}

export default index;
