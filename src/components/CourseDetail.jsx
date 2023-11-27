import React, { Fragment, useState } from "react";

import smallStar from "../assets/image/courseStarImg.png";
import courseImg from "../assets/image/flower.jpg";
import team1 from "../assets/image/team1.png";

import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import { BsArrowRightCircle, BsFillBarChartFill } from "react-icons/bs";
import {
  AiOutlineVideoCamera,
  AiOutlineReload,
  AiFillLock,
} from "react-icons/ai";
import { SlGraduation } from "react-icons/sl";
import { BiTime, BiChevronDownCircle } from "react-icons/bi";

// import "../../node_modules/video-react/dist/video-react.css";
// import { Player, BigPlayButton, LoadingSpinner } from "video-react";

const CourseDetail = () => {
  //   var [play, setPlay] = useState(false);

  //   var showModal = () => {
  //     setPlay(true);
  //   };

  //   var hideModal = () => {
  //     setPlay(false);
  //   };

  return (
    <Fragment>
      {/* <Modal show={play} onHide={hideModal}>
        <Modal.Body>
          <Player src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4">
            <BigPlayButton position="center" />
            <LoadingSpinner />
          </Player>
        </Modal.Body>
        <Modal.Footer>
          <Button className="modal-btn" variant="secondary" onClick={hideModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal> */}

      <section className="courseDetail-section">
        <div className="row">
          <div>
            <img className="courseRating" src={smallStar} />{" "}
            <span className="courseDetail-bold">4.5</span>
            <span className="courseDetail-mute">(172 Ratings)</span>
          </div>
          <h2 className="courseDetail-h2">
            Python for Financial Analysis Next and Algorithmic Trading
          </h2>
          <p className="courseDetail-category">
            Category:{" "}
            <button className="courseDetail-category-blue">Digital Art</button>
            <button className="courseDetail-category-red">
              Modern Design
            </button>{" "}
            <button className="courseDetail-category-orange">
              Graphic Design
            </button>
          </p>

          <div className="courseDetail-top-grid">
            <div className="col">
              <div className="courseDetailImage">
                <img className="courseDetailImg" src={courseImg} />
              </div>
              <div className="courseDetail-info">
                <p className="courseInfo-btn">Course Info</p>
                <h3>About This Course</h3>
                <p className="courseInfo-des">
                  imply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five
                </p>{" "}
                <br />
                <p className="courseInfo-des">
                  imply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book. It has survived
                  not only five
                </p>{" "}
                <br />
              </div>
              <span className="showMoreBtn">
                Show More <BiChevronDownCircle />
              </span>
              <div className="willYouLearn">
                <h3>What will you learn</h3>
                <p>
                  <BsArrowRightCircle /> How to Create a digital design from
                  scratch
                </p>
                <p className="">
                  <BsArrowRightCircle /> How to Create a digital design from
                  scratch
                </p>
                <p className="">
                  <BsArrowRightCircle /> How to Create a digital design from
                  scratch
                </p>
                <p className="">
                  <BsArrowRightCircle /> How to Create a digital design from
                  scratch
                </p>
                <p className="">
                  <BsArrowRightCircle /> How to Create a digital design from
                  scratch
                </p>
                <p className="">
                  <BsArrowRightCircle /> How to Create a digital design from
                  scratch
                </p>
              </div>

              <div className="courseContent">
                <h3>Course Content</h3>
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <h4>Getting Start With Digital Arts</h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="modal-pointer">
                        <AiOutlineVideoCamera /> How to Create a digital design
                        from scratch{" "}
                        <span>
                          10:12 <AiFillLock />
                        </span>
                      </p>
                      <p className="modal-pointer">
                        <AiOutlineVideoCamera /> How to Create a digital design
                        from scratch{" "}
                        <span>
                          14:12 <AiFillLock />
                        </span>
                      </p>
                      <p className="modal-pointer">
                        <AiOutlineVideoCamera /> How to Create a digital design
                        from scratch{" "}
                        <span>
                          8:12 <AiFillLock />
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <h4>Getting Start With Digital Arts</h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="modal-pointer">
                        <AiOutlineVideoCamera /> How to Create a digital design
                        from scratch
                        <span>
                          8:12 <AiFillLock />
                        </span>{" "}
                      </p>
                      <p className="modal-pointer">
                        <AiOutlineVideoCamera /> How to Create a digital design
                        from scratch{" "}
                        <span>
                          8:12 <AiFillLock />
                        </span>
                      </p>
                      <p className="modal-pointer">
                        <AiOutlineVideoCamera /> How to Create a digital design
                        from scratch{" "}
                        <span>
                          8:12 <AiFillLock />
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <h4>Getting Start With Digital Arts</h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="modal-pointer">
                        <AiOutlineVideoCamera /> How to Create a digital design
                        from scratch{" "}
                        <span>
                          8:12 <AiFillLock />
                        </span>
                      </p>
                      <p className="modal-pointer">
                        <AiOutlineVideoCamera /> How to Create a digital design
                        from scratch{" "}
                        <span>
                          8:12 <AiFillLock />
                        </span>
                      </p>
                      <p className="modal-pointer">
                        <AiOutlineVideoCamera /> How to Create a digital design
                        from scratch{" "}
                        <span>
                          8:12 <AiFillLock />
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <h4>Getting Start With Digital Arts</h4>
                    </Accordion.Header>
                    <Accordion.Body>
                      <p className="modal-pointer">
                        <AiOutlineVideoCamera /> How to Create a digital design
                        from scratch{" "}
                        <span>
                          8:12 <AiFillLock />
                        </span>
                      </p>
                      <p className="modal-pointer">
                        <AiOutlineVideoCamera /> How to Create a digital design
                        from scratch{" "}
                        <span>
                          8:12 <AiFillLock />
                        </span>
                      </p>
                      <p className="modal-pointer">
                        <AiOutlineVideoCamera /> How to Create a digital design
                        from scratch{" "}
                        <span>
                          8:12 <AiFillLock />
                        </span>
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
            <div className="col right">
              <div className="cart">
                <span className="coursePriceDiscount">&#x24;168</span>
                <span className="coursePrice">&#x24;248</span>
                <button className="cartBtn">
                  <a href="#">Add To Cart</a>
                </button>
              </div>
              <div className="coursePreview">
                <p>
                  <BsFillBarChartFill /> All Level
                </p>
                <p>
                  <SlGraduation /> 931 Total Enrolled
                </p>
                <p>
                  <BiTime /> 4 hour duration
                </p>
                <p>
                  <AiOutlineReload /> May 20, 2023 Last Updated
                </p>
              </div>
              <div className="courseOwner">
                <p>Created by</p>
                <div className="author">
                  <div className="courseOwnerImage">
                    <img className="courseOwnerImg" src={team1} />
                  </div>
                  <h4>Remon Doven</h4>
                </div>
              </div>

              <div className="course-material">
                <h3>Course Material</h3>
                <ul>
                  <li>4 hours on demand video</li>
                  <li>13 article</li>
                  <li>30 downloadable resource</li>
                  <li>Full lifetime access</li>
                  <li>Access on mobile and TV</li>
                  <li>Full lifetime access</li>
                  <li>Certificate of Completion</li>
                </ul>
              </div>
              <div className="course-requirement">
                <h3>Requirement</h3>
                <ul>
                  <li>No prior health knowlwdge is required or assumed.</li>
                  <li>
                    A set of digital designing tools are required for practice
                  </li>
                </ul>
              </div>
              <div className="course-tag">
                <h3>Tags</h3>
                <button>Design</button>
                <button>Digital</button>
                <button>Computer Aided</button>
                <button>Performance</button>
                <button>Drawing</button>
              </div>
              <div className="course-audiance">
                <h3>Audience</h3>
                <ul>
                  <li>the printing and typesetting industry. Lorem Ipsumo</li>
                  <li>
                    the printing and typesetting industry. Lorem Ipsumf the
                    printing and types
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default CourseDetail;
