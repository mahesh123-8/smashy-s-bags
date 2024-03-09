import React, { useState } from "react";
import "./nav.css";
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (to) => {
    handleMenuToggle();
    // If you have a target element to scroll to, you can use scrollIntoView
    // Example:
    // document.getElementById(to).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${isMenuOpen ? "open" : ""}`}>
      <h1 className="lg:text-2xl lg:font-bold">
        Smashy's{" "}
        <span className="font-extrabold text-red-700 lg:text-4xl">choice</span>{" "}
      </h1>

      {/* Desktop Menu */}
      <div className={`desktopMenu ${isMenuOpen ? "hidden md:flex" : "flex"}`}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          onClick={() => handleMenuClick("intro")}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="Aboutus"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          onClick={() => handleMenuClick("Aboutus")}
        >
          Products
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          onClick={() => handleMenuClick("works")}
        >
          Blogs
        </Link>

        <Link
          activeClass="active"
          to="client"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
          onClick={() => handleMenuClick("client")}
        >
          Contact US
        </Link>
        <div className="flex items-center justify-center">
          <FaCartShopping className="text-2xl cursor-pointer" />
          <CgProfile className="text-2xl cursor-auto" />
        </div>
      </div>

      {/* Hamburger for mobile */}
      <button className="hamburger md:hidden" onClick={handleMenuToggle}>
        {isMenuOpen ? (
          <MdClose className="hamburger-icon" />
        ) : (
          <MdMenu className="hamburger-icon" />
        )}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobileMenu md:hidden">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => handleMenuClick("intro")}
          >
            Products
          </Link>
          <Link
            activeClass="active"
            to="client"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => handleMenuClick("client")}
          >
            Blogs
          </Link>
          <Link
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => handleMenuClick("skill")}
          >
            About Us
          </Link>
          <Link
            activeClass="active"
            to="works"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            onClick={() => handleMenuClick("works")}
          >
            Contact Us
          </Link>
         
        </div>
      )}
    </nav>
  );
};

export default Navbar;