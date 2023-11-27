import React, { useEffect } from "react";
import NotFound from "../components/NotFound";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const NotFoundPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <>
      <Navigation />
      <NotFound />
      <Footer />
    </>
  );
};

export default NotFoundPage;
