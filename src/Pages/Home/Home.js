import React from "react";
import Navbar from "./../Navbar/Navbar";
import Banner from "./../Banner/Banner";
import Hotel from "./../Hotel/Hotel";

const Home = () => {
  return (
    <div className="container">
      <Navbar />
      <Banner />
      <Hotel />
    </div>
  );
};

export default Home;
