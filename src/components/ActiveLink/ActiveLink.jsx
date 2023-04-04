import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const ActiveLink = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => (isActive ? "text-amber-600" : "")}
    >
      {children}
    </NavLink>
  );
};

export default ActiveLink;
