import React from "react";

import heroRightImg from "../assets/image/heroRightImg.png";

import heroRectangleImg from "../assets/image/heroRectangleImg.png";
import navFrame from "../assets/image/navFrame.png";
import halfBall from "../assets/image/halfBall.png";
import fullBall from "../assets/image/fullBall.png";

import sliderLogo1 from "../assets/image/sliderLogo1.png";
import sliderLogo2 from "../assets/image/sliderLogo2.png";
import sliderLogo3 from "../assets/image/sliderLogo3.png";
import sliderLogo4 from "../assets/image/sliderLogo4.png";
import sliderLogo5 from "../assets/image/sliderLogo5.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { IconSearch, IconThreePlus } from "../assets/logo";

const Hero = () => {
  const responsive = {
    verybigdesktop: {
      breakpoint: { max: 3000, min: 1450 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    bigdesktop: {
      breakpoint: { max: 1450, min: 1300 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    desktop: {
      breakpoint: { max: 1300, min: 768 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    smalltablet: {
      breakpoint: { max: 768, min: 400 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <section className="hero-section">
        <div className="navFrameImage">
          <img className="navFrameImg" src={navFrame} />
        </div>
        <div className="halfBallImage">
          <img className="halfBallImg" src={halfBall} />
        </div>
        <div className="row">
          <div className="hero-grid">
            <div className="col">
              <div className="hero-left-content">
                <h1>
                  <span style={{ color: "#BEA0FF" }}>Best courses</span> are
                  waiting to enrich your skill
                  <div>
                    <IconThreePlus />
                  </div>
                </h1>
                <p className="hero-des">
                  Provides you with the latest online learning system and
                  material that help your knowledge growing.
                </p>
                <div className="hero-search">
                  <div className="hero-search-inner">
                    <div>
                      <IconSearch />
                    </div>
                    <input type="text" placeholder="Want to learn?" />
                  </div>
                  <button>Explore</button>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div className="heroRightImage">
                <img className="heroRightImg" src={heroRightImg} />
                <img className="heroRectangleImg" src={heroRectangleImg} />
                <img className="fullBallImg" src={fullBall} />
              </div>
            </div>
          </div>
          <div className="heroSlider">
            <div className="fieldset">
              <h2>
                <span>Our Course Partners</span>
              </h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={2000}
                arrows={true}
              >
                <div>
                  <div className="hero-bottom-grid-image">
                    <img className="hero-bottom-grid-img" src={sliderLogo1} />
                  </div>
                </div>
                <div>
                  <div className="hero-bottom-grid-image ">
                    <img className="hero-bottom-grid-img" src={sliderLogo2} />
                  </div>
                </div>
                <div>
                  <div className="hero-bottom-grid-image ">
                    <img
                      className="hero-bottom-grid-img dribble"
                      src={sliderLogo3}
                    />
                  </div>
                </div>
                <div>
                  <div className="hero-bottom-grid-image ">
                    <img
                      className="hero-bottom-grid-img lattice"
                      src={sliderLogo4}
                    />
                  </div>
                </div>

                <div>
                  <div className="hero-bottom-grid-image ">
                    <img
                      className="hero-bottom-grid-img dribble"
                      src={sliderLogo5}
                    />
                  </div>
                </div>
                <div>
                  <div className="hero-bottom-grid-image">
                    <img className="hero-bottom-grid-img" src={sliderLogo1} />
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
