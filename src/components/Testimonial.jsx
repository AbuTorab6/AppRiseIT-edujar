import React from "react";
import { IconCourseOwner } from "../assets/logo/IconCourseOwner";
import courseStarImg from "../assets/image/courseStarImg.png";

import testimonialImg1 from "../assets/image/testimonialImg1.png";
import testimonialImg2 from "../assets/image/testimonialImg2.png";
import testimonialImg3 from "../assets/image/testimonialImg3.png";
import testimonialImg4 from "../assets/image/testimonialImg4.png";
import testimonialImg5 from "../assets/image/testimonialImg5.png";

import testimonialDot from "../assets/image/testimonialDot.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonial = () => {
  const responsive = {
    verybigdesktop: {
      breakpoint: { max: 3000, min: 100 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <section className="testimonial-section">
        <div className="testimonialDotImage">
          <img className="testimonialDotImg" src={testimonialDot} />
        </div>
        <div className="row">
          <h2>Testimonials</h2>
          <div className="testimonial-grid">
            <div className="col">
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                arrows={true}
                showDots={false}
              >
                <div className="testimonial-card">
                  <div className="testimonial-card-grid">
                    <div className="testimonial-card-inner-grid">
                      <div>
                        <IconCourseOwner />
                      </div>
                      <div>
                        <h3>Adam Smith</h3>
                        <p>Python Developer</p>
                      </div>
                    </div>
                    <div>
                      <div className="testimonialStarImage">
                        <img
                          className="testimonialStarImg"
                          src={courseStarImg}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="testimonial-des">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.{" "}
                  </p>
                </div>
                <div className="testimonial-card">
                  <div className="testimonial-card-grid">
                    <div className="testimonial-card-inner-grid">
                      <div>
                        <IconCourseOwner />
                      </div>
                      <div>
                        <h3>Adam Smith</h3>
                        <p>Python Developer</p>
                      </div>
                    </div>
                    <div>
                      <div className="testimonialStarImage">
                        <img
                          className="testimonialStarImg"
                          src={courseStarImg}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="testimonial-des">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.{" "}
                  </p>
                </div>
              </Carousel>
            </div>
            <div className="col">
              <div className="testimonial-right-image">
                <img className="testimonialImg1" src={testimonialImg1} />
                <img className="testimonialImg2" src={testimonialImg2} />
                <img className="testimonialImg3" src={testimonialImg3} />
                <img className="testimonialImg4" src={testimonialImg4} />
                <img className="testimonialImg5" src={testimonialImg5} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
