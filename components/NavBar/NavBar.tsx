"use client";
import { Link } from "react-scroll";

import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={`container ${styles.navbarContainer}`}>
      <Link to="aboutSection" smooth={true} duration={800}>
        <div>ABOUT</div>
      </Link>
      <Link to="portfolio" smooth={true} duration={800}>
        <div>PROJECTS</div>
      </Link>
      <Link to="contact" smooth={true} duration={800}>
        <div>CONTACT</div>
      </Link>
    </nav>
  );
};

export default NavBar;
