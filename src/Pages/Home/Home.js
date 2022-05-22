import React from "react";
import Banner from "../../Components/Banner/Banner";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Products from "../Products/Products";
import BlogComponent from "../../Components/BlogComponent/BlogComponent";

const Home = () => {
  return (
    <>
      <Banner />
      <Products />
      <Testimonial />
      <BlogComponent />
    </>
  );
};

export default Home;
