import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Course from "../components/Course";
import Category from "../components/Category";
import Difference from "../components/Difference";
import Testimonial from "../components/Testimonial";
import Join from "../components/Join";
import Footer from "../components/Footer";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <>
      <Navigation />
      <Hero />
      <Course />
      <Category />
      <Difference />
      <Testimonial />
      <Join />
      <Footer />
    </>
  );
};

export default HomePage;
