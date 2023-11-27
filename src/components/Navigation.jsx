import React, { Fragment, useState, useEffect } from "react";

import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

import navLogo from "../assets/image/navLogo.png";

const Navigation = () => {
  const [v1, v2] = useState({
    navigationBackground: "navigation-background",
    navigationBrand: "navigation-brand",
    navigationList: "navigation-list",
  });

  var jubo = () => {
    if (window.scrollY > 100) {
      v2({
        navigationBackground: "navigation-background-scroll",
        navigationBrand: "navigation-brand",
        navigationList: "navigation-list",
      });
    } else if (window.scrollY < 100) {
      v2({
        navigationBackground: "navigation-background",
        navigationBrand: "navigation-brand",
        navigationList: "navigation-list",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", jubo);
  });

  return (
    <Fragment>
      <Navbar
        className={v1.navigationBackground}
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="dark"
      >
        <Container>
          <Navbar.Brand>
            {" "}
            <NavLink className={v1.navigationBrand} to="/">
              <img className="navLogo" src={navLogo} />
            </NavLink>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <NavLink
                className={v1.navigationList}
                style={(p1) => {
                  return {
                    color: p1.isActive ? "rgb(101, 122, 254)" : undefined,
                  };
                }}
                to="/"
                end
              >
                <span className="navigation-icon"></span>Home
              </NavLink>
              <NavLink
                className={v1.navigationList}
                style={(p1) => {
                  return {
                    color: p1.isActive ? "rgb(101, 122, 254)" : undefined,
                  };
                }}
                to="/about"
              >
                <span className="navigation-icon"></span>About
              </NavLink>

              <NavLink
                className={v1.navigationList}
                style={(p1) => {
                  return {
                    color: p1.isActive ? "rgb(101, 122, 254)" : undefined,
                  };
                }}
                to="/course"
              >
                <span className="navigation-icon"></span>Course
              </NavLink>
              <NavLink
                className={v1.navigationList}
                style={(p1) => {
                  return {
                    color: p1.isActive ? "rgb(101, 122, 254)" : undefined,
                  };
                }}
                to="/team"
              >
                <span className="navigation-icon"></span>Team
              </NavLink>
              <NavLink
                className={v1.navigationList}
                style={(p1) => {
                  return {
                    color: p1.isActive ? "rgb(101, 122, 254)" : undefined,
                  };
                }}
                to="/contact"
              >
                <span className="navigation-icon"></span>Contact
              </NavLink>

              <div className="nav-right">
                <button className="nav-log-in">
                  <a className="text-none-blue" href="#">
                    Login
                  </a>
                </button>
                <button className="nav-sign-up">
                  <a className="text-none-white" href="#">
                    Get Started
                  </a>
                </button>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Navigation;
