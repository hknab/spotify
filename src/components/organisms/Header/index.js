import React from "react";
import HeaderBody from "./HeaderBody";
function Header({ children, ...other }) {
  return <HeaderBody {...other} />;
}

export default Header;
