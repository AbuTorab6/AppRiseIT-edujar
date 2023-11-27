import React from "react";
import {
  IconBusiness,
  IconChart,
  IconDatabase,
  IconDev,
  IconImgBox,
  IconMusic,
  IconPaper,
  IconPen,
  IconUpRight,
} from "../assets/logo";

import categoryLeftImg from "../assets/image/categoryLeftImg.png";
import categoryRightImg from "../assets/image/categoryRightImg.png";

const Category = () => {
  const cartItem = [
    {
      name: "Design",
      icon: <IconPen />,
    },
    {
      name: "Development",
      icon: <IconDev />,
    },
    {
      name: "Professional Dev.",
      icon: <IconPaper />,
    },
    {
      name: "Photography",
      icon: <IconImgBox />,
    },
    {
      name: "Data Science",
      icon: <IconDatabase />,
    },
    {
      name: "Business",
      icon: <IconBusiness />,
    },
    {
      name: "Marketing",
      icon: <IconChart />,
    },
    {
      name: "Music",
      icon: <IconMusic />,
    },
  ];
  return (
    <>
      <section className="category-section">
        <div className="categoryLeftImage">
          <img className="categoryLeftImg" src={categoryLeftImg} />
        </div>
        <div className="categoryRightImage">
          <img className="categoryRightImg" src={categoryRightImg} />
        </div>
        <div className="row">
          <p className="caterory-top-btn-p">
            <button className="caterory-top-btn">Explore all Courses</button>
          </p>

          <h2>
            Most Popular
            <span style={{ color: "#BEA0FF" }}> Category</span>{" "}
          </h2>
          <div className="category-grid">
            {cartItem.map((item, index) => {
              return (
                <div key={index} className="col">
                  <div className="category-inner-flex">
                    {item.icon}
                    <p>{item.name}</p>
                  </div>
                  <div>
                    <div className="IconUpRight">
                      <IconUpRight />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
