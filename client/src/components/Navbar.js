import React from "react";
import { Nav, NavLink, NavMenu } from "./NabarElements";

const Navbar = () => {
  return (
  <>
      <Nav>
        <NavMenu>
          <NavLink to="/home" activeStyle>
            About
          </NavLink>
          <NavLink to="/allBlogs" activeStyle>
            All Blogs
          </NavLink>
          <NavLink to="/portfolio" activeStyle>
            Portfolio Website
          </NavLink>
        </NavMenu>
      </Nav>
  </>
  )
}

export default Navbar;
