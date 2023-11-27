import React from "react";

import navLogo from "../assets/image/navLogo.png";
import {
  IconBe,
  IconEnvolop,
  IconFacebook,
  IconFooterPhn,
  IconInstagram,
  IconLocation,
  IconTwiter,
  IconWorld,
} from "../assets/logo";

const Footer = () => {
  return (
    <>
      <section className="footer-section">
        <div className="row">
          <div className="footer-top-grid">
            <div className="col">
              <div className="footerLogoImage">
                <img className="footerLogoImg" src={navLogo} />
              </div>
              <p>
                Veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.{" "}
              </p>
            </div>
            <div className="col">
              <h3>Quick Links</h3>
              <div className="footer-top-inner-grid">
                <p>About</p>
                <p>Blog</p>
                <p>Course</p>
                <p>Contact</p>
              </div>
            </div>
            <div className="col">
              <h3>Contact us</h3>
              <div className="footer-withIcon-grid">
                <IconFooterPhn />
                <p>(209) 555-0104</p>
              </div>
              <div className="footer-withIcon-grid">
                <IconEnvolop />
                <p>michelle.rivera@example.com</p>
              </div>
            </div>
            <div className="col">
              <div className="footer-withIcon-grid footer-withIcon-grid-address">
                <IconLocation />
                <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
              </div>
            </div>
          </div>
          <div className="footer-bottom-grid">
            <div>
              <p>Copyright 2023 | All Rights Reserved</p>
            </div>
            <div className="footer-icon-box">
              <div>
                <IconFacebook />
              </div>
              <div>
                <IconTwiter />
              </div>
              <div>
                <IconInstagram />
              </div>
              <div>
                <IconBe />
              </div>
              <div>
                <IconWorld />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
