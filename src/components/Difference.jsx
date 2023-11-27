import React from "react";

import diffHumanImg from "../assets/image/diffHumanImg.png";
import diffRectangleImg from "../assets/image/diffRectangleImg.png";
import diffLine from "../assets/image/diffLine.png";

import singleStar from "../assets/image/singleStar.png";
import {
  IconCap,
  IconMultiPeople,
  IconPeople,
  IconVideo,
} from "../assets/logo";

const Difference = () => {
  const diffItem = [
    {
      count: "300",
      name: "student",
      icon: <IconCap />,
    },
    {
      count: "20,000+",
      name: "student",
      icon: <IconPeople />,
    },
    {
      count: "10,000+",
      name: "video",
      icon: <IconVideo />,
    },
    {
      count: "11,00,000+",
      name: "user's",
      icon: <IconMultiPeople />,
    },
  ];
  return (
    <>
      <div className="diff-section">
        <div className="singleStarImage">
          <img className="singleStarImg" src={singleStar} />
        </div>
        <div className="row">
          <div className="diff-grid">
            <div className="col">
              <h2>
                What is our
                <span style={{ color: "#BEA0FF" }}> difference</span>{" "}
              </h2>
              <p className="diff-des-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. ex
                ea commodo consequat.{" "}
              </p>
              <p className="diff-des-2">
                {" "}
                ut labore et dolore magna aliqua. ex ea commodo consequat.{" "}
              </p>
              <button>Learn More</button>
            </div>
            <div className="col diff-inner-grid">
              <div className="diffImage">
                <img className="diffHumanImg" src={diffHumanImg} />
                <img className="diffRectangleImg" src={diffRectangleImg} />
                <img className="diffLine" src={diffLine} />
              </div>
              <div className="diff-details-grid">
                {diffItem.map((item, index) => {
                  return (
                    <div key={index} className="diff-details-grid-inner">
                      <div className="icon">{item.icon}</div>
                      <div>
                        <h3>{item.count}</h3>
                        <p>{item.name}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Difference;
