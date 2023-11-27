import React, { useState } from "react";

import { IconPlayBtn } from "../assets/logo";

import courseCartImg1 from "../assets/image/courseCartImg1.png";
import courseCartImg2 from "../assets/image/courseCartImg2.png";
import courseCartImg3 from "../assets/image/courseCartImg3.png";
import courseCartImg4 from "../assets/image/courseCartImg4.png";
import courseCartImg5 from "../assets/image/courseCartImg5.png";
import courseCartImg6 from "../assets/image/courseCartImg6.png";

import courseStarImg from "../assets/image/courseStarImg.png";

import { IconCourseOwner } from "../assets/logo/IconCourseOwner";
import { Link } from "react-router-dom";

const Course = () => {
  const [item, setItem] = useState("design");

  const courseCart = [
    {
      image: [courseCartImg1],
      des: "Python for Financial Analysis Next and Algorithmic Trading",
      owner: "Adam Smith",
      category: ["design", "dev"],
    },
    {
      image: [courseCartImg2],
      des: "Python for Financial Analysis Next and Algorithmic Trading",
      owner: "Adam Smith",
      category: ["design", "marketing", "dataScience"],
    },
    {
      image: [courseCartImg3],
      des: "Python for Financial Analysis Next and Algorithmic Trading",
      owner: "Adam Smith",
      category: ["design", "marketing"],
    },
    {
      image: [courseCartImg4],
      des: "Python for Financial Analysis Next and Algorithmic Trading",
      owner: "Adam Smith",
      category: ["design", "marketing"],
    },
    {
      image: [courseCartImg5],
      des: "Python for Financial Analysis Next and Algorithmic Trading",
      owner: "Adam Smith",
      category: ["design", "marketing", "business"],
    },
    {
      image: [courseCartImg6],
      des: "Python for Financial Analysis Next and Algorithmic Trading",
      owner: "Adam Smith",
      category: ["design", "marketing", "dev", "dataScience"],
    },
  ];

  let filterItem = courseCart.filter((data) => {
    if (data.category.includes(item)) {
      return true;
    }
  });

  return (
    <>
      <section className="course-section">
        <div className="row">
          <div className="course-top">
            <h2>
              Popular <span style={{ color: "#BEA0FF" }}>Courses</span>
            </h2>
            <div className="course-btn-grp">
              <button
                className={item == "design" ? "course-btn-active" : ""}
                onClick={() => {
                  setItem("design");
                }}
              >
                Design
              </button>
              <button
                className={item == "dev" ? "course-btn-active" : ""}
                onClick={() => {
                  setItem("dev");
                }}
              >
                Development
              </button>
              <button
                className={item == "business" ? "course-btn-active" : ""}
                onClick={() => {
                  setItem("business");
                }}
              >
                Business
              </button>
              <button
                className={item == "dataScience" ? "course-btn-active" : ""}
                onClick={() => {
                  setItem("dataScience");
                }}
              >
                Data Science
              </button>
              <button
                className={item == "marketing" ? "course-btn-active" : ""}
                onClick={() => {
                  setItem("marketing");
                }}
              >
                Marketing
              </button>
            </div>
          </div>
          <div className="course-bottom">
            {filterItem.map((item, index) => {
              return (
                <Link key={index} to="/courseDetail" className="courseLink">
                  <div className="col">
                    <div className="courseCartImage">
                      <img className="courseCartImg" src={item.image} />
                    </div>
                    <div className="course-cart-bottom">
                      <div className="course-cart-top-grid">
                        <div className="course-cart-top-flex">
                          <div className="iconPlayBtn">
                            <IconPlayBtn />
                          </div>
                          <p>10x Lesson</p>
                        </div>
                        <button>Design</button>
                      </div>
                      <h3>{item.des}</h3>
                      <div className="course-cart-detail-grid">
                        <div className="course-cart-detail-grid-owner">
                          <div className="courseOwnerImage">
                            <IconCourseOwner />
                          </div>
                          <div>
                            <h4 className="course-ownar-name">{item.owner}</h4>
                            <p className="course-owner-des">Python Developer</p>
                          </div>
                        </div>
                        <div>
                          <p className="course-student-qu">50+ Student</p>
                        </div>
                      </div>
                      <div className="course-cart-bottom-grid">
                        <div className="courseStarImage">
                          <img className="courseStarImg" src={courseStarImg} />
                        </div>
                        <div>
                          <span className="course-enroll" href="#">
                            Enroll Now
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Course;
