import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [profileIsOpen, setProfileIsOpen] = useState(false);
  const [serviceIsOpen, setServiceisOpen] = useState(false);

  const toggleProfile = (e) => {
    setProfileIsOpen(!profileIsOpen);
  };
  const toggleService = () => {
    setServiceisOpen(!serviceIsOpen);
  };
  useEffect(() => {
    // toggleProfile();
  }, []);
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
                <NavLink to="/profile" onClick={toggleProfile}>
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
                      <NavLink to="/profile">User Information</NavLink>{" "}
                    </li>
                    <li>
                      {" "}
                      <NavLink to="/contact_info">Contact Info</NavLink>{" "}
                    </li>
                    <li>
                      {" "}
                      <NavLink to="/assets">Assets</NavLink>{" "}
                    </li>
                    <li>
                      {" "}
                      <NavLink to="/relatives">Relatives</NavLink>{" "}
                    </li>
                    <li>
                      {" "}
                      <NavLink to="/experience">
                        Qualification/Experience
                      </NavLink>{" "}
                    </li>
                    <li>
                      {" "}
                      <NavLink to="/banks">Banks</NavLink>{" "}
                    </li>
                  </ul>
                )}
              </li>
              <li className="navbar-list">
                <NavLink to="/probation" onClick={toggleService}>
                  <img src="assests/images/self-service-icon.png" alt="" />
                  <span>Self Services</span>
                  {!serviceIsOpen && (
                    <img src="assests/images/back-arrow.png" alt="" />
                  )}
                  {serviceIsOpen && (
                    <img src="assests/images/icons/arrow-down.png" alt="" />
                  )}
                </NavLink>
                {serviceIsOpen && (
                  <ul className="profile-dropdown">
                    <li>
                      {" "}
                      <NavLink to="/probation">My Probation</NavLink>{" "}
                    </li>
                    <li>
                      <NavLink to="/leaves">My Leaves</NavLink>
                    </li>
                    <li>
                      <NavLink to="/loan">My Loan & Advance</NavLink>
                    </li>
                    <li>
                      <a href="#">My Time Sheet</a>
                    </li>
                    <li>
                      <a href="#">My Calender</a>
                    </li>
                    <li>
                      <a href="#">My Chart</a>
                    </li>
                    <li>
                      <a href="#">My Payslips</a>
                    </li>
                  </ul>
                )}
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
