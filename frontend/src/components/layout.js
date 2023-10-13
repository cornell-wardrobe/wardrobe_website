import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./navBar";
import Footer from "./footer";

function Layout() {
  return (
    <React.Fragment>
      <NavBar />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}

export default Layout;
