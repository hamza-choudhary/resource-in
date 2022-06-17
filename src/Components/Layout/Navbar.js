import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [profileIsOpen, setProfileIsOpen] = useState(false);

  const toggling = () => {
    setProfileIsOpen(!profileIsOpen);
  };
  return (
    <div>
      <div className="navbar-container">
        <div className="navbar-flex">
          <div className="navbar-image">
            <img src="assests/images/logo.png" alt="" />
          </div>
          <nav className="navbar">
            <ul>
              <li className="navbar-list">
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                >
                  <img src="assests/images/dashboard-icon.png" alt="" />
                  <span>Dashboard</span>
                </NavLink>
              </li>
              <li className="navbar-list">
                <NavLink to="/profile" onClick={toggling}>
                  <img src="assests/images/profile-icon.png" alt="" />
                  <span>Profile</span>
                  {!profileIsOpen && (
                    <img src="assests/images/back-arrow.png" alt="" />
                  )}
                  {profileIsOpen && (
                    <img src="assests/images/icons/arrow-down.png" alt="" />
                  )}
                </NavLink>
                {profileIsOpen && (
                  <ul className="profile-dropdown">
                    <li>
                      {" "}
                      <a href="#">User Information</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Contact Info</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Assets</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Relatives</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Qualification/Experience</a>{" "}
                    </li>
                    <li>
                      {" "}
                      <a href="#">Banks</a>{" "}
                    </li>
                  </ul>
                )}
              </li>
              <li className="navbar-list">
                <a href=".">
                  <img src="assests/images/self-service-icon.png" alt="" />
                  <span>Self Services</span>
                  <img src="assests/images/back-arrow.png" alt="" />
                </a>
              </li>
              <li className="navbar-list">
                <a href=".">
                  <img src="assests/images/roaster-icon.png" alt="" />
                  <span>Roster-My Roster</span>
                </a>
              </li>
              <li className="navbar-list">
                <a href=".">
                  <img src="assests/images/time-off-icon.png" alt="" />
                  <span>Time Off</span>
                  <img src="assests/images/back-arrow.png" alt="" />
                </a>
              </li>
              <li className="navbar-list">
                <a href=".">
                  <img src="assests/images/loan-icon.png" alt="" />
                  <span>Loan & Advances</span>
                  <img src="assests/images/back-arrow.png" alt="" />
                </a>
              </li>
              <li className="navbar-list">
                <a href=".">
                  <img src="assests/images/attendance-icon.png" alt="" />
                  <span>Attendance</span>
                  <img src="assests/images/back-arrow.png" alt="" />
                </a>
              </li>
              <li className="navbar-list">
                <a href=".">
                  <img src="assests/images/payroll-icon.png" alt="" />
                  <span>Payroll-My Payslips</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
