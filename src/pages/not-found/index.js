import React from "react";
import { Wrapper } from "./styles";
import Button from "components/button";
import { H2 } from "components/typography";
import { NavLink } from "react-router-dom";

function index() {
  return (
    <Wrapper className="wrapper-body-content flex-center flex-column">
      <img
        src="https://raw.githubusercontent.com/sukmaranggapradeta/public/2bdad2b45928401f05b64afad0d9f3ed52889920/undraw_launch_day_4e04.svg"
        alt=""
      />
      <H2>Looks like you are lost in space</H2>
      <NavLink to="/home" className="text-decoration-none">
        <Button primary className="btn grey darken-4">
          back to Home
        </Button>
      </NavLink>
    </Wrapper>
  );
}

export default index;
