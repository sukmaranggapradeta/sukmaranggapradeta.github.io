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
        <H2 style={{ color: "white" }}>Sukma Rangga</H2>
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
      </MenuSideBar>
    </Wrapper>
  );
}

export default Header;
