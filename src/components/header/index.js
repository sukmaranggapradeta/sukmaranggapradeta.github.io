import React from "react";
import {
  Wrapper,
  Logo,
  MenuHeader,
  // MenuHamburger,
  MenuSideBar,
} from "./styles";
import { H2 } from "components/typography";
import { NavLink } from "react-router-dom";

function Header() {
  // const [hamburger, setHamburger] = useState(false);

  const unCheck = () => {
    console.log("masuk unCheck");
    var hamburger = document.getElementById("navcheck");
    console.log("hamburger", hamburger);
    hamburger.checked = false;
  };

  return (
    <Wrapper>
      <Logo className="flex-center">
        <H2 style={{ color: "#ffffff" }}>Sukma Rangga</H2>
      </Logo>
      <MenuHeader>
        <nav className="shift">
          <ul>
            <li>
              <NavLink to="/home" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/project" activeClassName="active">
                Project
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </MenuHeader>
      {/* <MenuHamburger>
        <div
          className={hamburger ? "menu opened" : "menu"}
          aria-label="Main Menu"
          onClick={() => setHamburger(!hamburger)}
        ></div>
        <svg width="50" height="40" viewBox="0 0 100 100">
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="line line2" d="M 20,50 H 80" />
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </MenuHamburger> */}

      <MenuSideBar>
        <input type="checkbox" id="navcheck" role="button" title="menu" />
        <label htmlFor="navcheck" aria-hidden="true" title="menu">
          <span className="burger">
            <span className="bar">
              <span className="visuallyhidden">Menu</span>
            </span>
          </span>
        </label>
        <nav id="menu">
          <NavLink to="/home" onClick={() => unCheck()}>
            Home
          </NavLink>
          <NavLink to="/project" onClick={() => unCheck()}>
            Project
          </NavLink>
          <NavLink to="/about" onClick={() => unCheck()}>
            About
          </NavLink>
          <NavLink to="/contact" onClick={() => unCheck()}>
            Contact
          </NavLink>
        </nav>
        {/* <nav className="sidenav">
          <ul>
            <li>
              <NavLink to="/home" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/project" activeClassName="active">
                Project
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName="active">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="active">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav> */}
      </MenuSideBar>
    </Wrapper>
  );
}

export default Header;
