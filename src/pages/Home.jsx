import React from "react";
import Hero from "../components/Hero";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Stats from "../components/Stats";
import CustomWidget from "../components/Widget";

const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Stats />
      <Blog />
      <CustomWidget />
      <Footer />
    </div>
  );
};

export default Home;
