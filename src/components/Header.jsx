import React, { useContext } from "react";
import ActiveLink from "./ActiveLink/ActiveLink";
import logo from "../assets/logo/Logo.svg";
import { AuthContext } from "../provider/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(result => {})
      .catch(err => console.log(err));
  };
  return (
    <div className=" bg-slate-800">
      <div className="navbar container mx-auto px-2">
        <div className="justify-between w-full md:navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <ActiveLink to="/">Home</ActiveLink>
              </li>

              <li>
                <ActiveLink to="/order">Order</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/orderReview">Order Review</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/inventory">Manage Inventory</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/login">Log in</ActiveLink>
              </li>
              <li>
                <ActiveLink to="/register">Register</ActiveLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl px-0 md:px-4">
            <img src={logo} alt="logo" className="w-3/5 md:w-full" />
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li>
              <ActiveLink to="/">Home</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/order">Order</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/orderReview">Order Review</ActiveLink>
            </li>
            <li>
              <ActiveLink to="/inventory">Manage Inventory</ActiveLink>
            </li>
            {user ? (
              ""
            ) : (
              <>
                <li>
                  <ActiveLink to="/login">Log in</ActiveLink>
                </li>
                <li>
                  <ActiveLink to="/register">Register</ActiveLink>
                </li>
              </>
            )}
            {user ? (
              <li>
                {user.email} <button onClick={handleLogOut}>LogOut</button>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
