import React, { Fragment, useEffect } from "react";
import Navigation from "../components/Navigation";
import EveryPageTop from "../components/EveryPageTop";
import CourseDetail from "../components/CourseDetail";
import Footer from "../components/Footer";

const CourseDetailPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <Fragment>
      <Navigation />
      <EveryPageTop />
      <CourseDetail />
      <Footer />
    </Fragment>
  );
};

export default CourseDetailPage;
