import React from "react";
import Header from "../../components/Header"
import TextBestServices from "../../components/TextBestServices"
import BestRecipe from "../../components/BestRecipe";
import ReadOurBlog from "../../components/ReadOurBlog";
import Newsletter from "../../components/Newsletter";
import Footer from "../../components/Footer";

function index() {
  return (
    <>
      <Header/>
      <BestRecipe/>
      <TextBestServices/>
      <ReadOurBlog/>
      <Newsletter/>
      <Footer/>
    </>
  );
}

export default index;
