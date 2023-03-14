import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./navBar";
import Footer from "./footer";

function Layout() {
  return (
    <React.Fragment>
      <NavBar />
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
