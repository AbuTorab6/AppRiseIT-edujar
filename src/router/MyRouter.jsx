import React, { Fragment } from "react";

import HomePage from "../pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFoundPage from "../pages/NotFoundPage";
import CourseDetailPage from "../pages/CourseDetailPage";

const MyRouter = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courseDetail" element={<CourseDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default MyRouter;
