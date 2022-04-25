import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class HeaderHome extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <NavLink className="navbar-brand mr-5" to="/">
          Cybersoft
        </NavLink>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <NavLink
                activeStyle={{ borderRadius: "5px" }}
                activeClassName="bg-white text-dark"
                className="nav-link"
                to="/home"
              >
                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={{ borderRadius: "5px" }}
                activeClassName="bg-white text-dark"
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={{ borderRadius: "5px" }}
                activeClassName="bg-white text-dark"
                className="nav-link"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={{ borderRadius: "5px" }}
                activeClassName="bg-white text-dark"
                className="nav-link"
                to="/login"
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={{ borderRadius: "5px" }}
                activeClassName="bg-white text-dark"
                className="nav-link"
                to="/register"
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={{ borderRadius: "5px" }}
                activeClassName="bg-white text-primary"
                className="nav-link text-warning"
                to="/btqlnd"
              >
                BTQLND
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                className="nav-link dropdown-toggle"
                to="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                LifeCycle - Hooks
              </NavLink>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <NavLink className="dropdown-item" to="/lifecycle">
                  LifeCycle
                </NavLink>
                <NavLink className="dropdown-item" to="/usestate">
                  useState
                </NavLink>
                <NavLink className="dropdown-item" to="/useeffect">
                  useEffect
                </NavLink>
              </div>            </li>
              <li className="nav-item">
              <NavLink
                activeStyle={{ borderRadius: "5px" }}
                activeClassName="bg-white text-primary"
                className="nav-link text-warning"
                to="/apircc"
              >
                API RCC
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={{ borderRadius: "5px" }}
                activeClassName="bg-white text-primary"
                className="nav-link text-warning"
                to="/apirfc"
              >
                API RFC
              </NavLink>
            </li>

          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
