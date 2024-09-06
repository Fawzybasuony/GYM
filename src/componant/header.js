import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary ">
        <div className="container-fluid">
          <Link className="nav-link  text-light fs-3 fw-bold mt-3" to="/">
            STAR <em className=" text-danger"> GYM</em>
            <img src="/img/tabs-first-icon.png" alt="..." />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav  mb-lg-0 ms-auto me-5">
              <li className="nav-item">
                <NavLink
                  className="nav-link text-light fs-5 mt-4 mt-lg-0"
                  to="/"
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link text-light fs-5 " to="/about">
                  Our Plan
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link text-light fs-5" to="/Contactt">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
