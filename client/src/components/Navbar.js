import React from "react";
import { Nav, NavLink, NavMenu } from "./NabarElements";

const Navbar = () => {
  return (
  <>
      <Nav>
        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/allBlogs" activeStyle>
            All Blogs
          </NavLink>
          <NavLink to="https://portfolio-akhins-projects.vercel.app/" target="_blank" activeStyle>
            Portfolio Website
          </NavLink>
        </NavMenu>
      </Nav>
  </>
  )
}

export default Navbar;
