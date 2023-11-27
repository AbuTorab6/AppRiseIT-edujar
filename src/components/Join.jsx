import React from "react";

const Join = () => {
  return (
    <>
      <section className="join-section">
        <div className="row">
          <div className="join-grid">
            <div className="col">
              <h2>
                Join our{" "}
                <span style={{ color: "#BEA0FF" }}> world largest </span>
                learning platform today
              </h2>
              <p className="des">
                Start learning by registering and get 30 days free trail
              </p>
            </div>
            <div className="col left">
              <p>
                <button className="join-red-btn">Join as Instructor</button>
              </p>
              <p>
                <button className="join-vio-btn">Join as Student</button>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Join;
