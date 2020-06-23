import React from "react";
import { Wrapper, Logo, MenuHeader } from "./styles";
import { H3 } from "components/typography";

function index() {
  return (
    <Wrapper>
      <Logo className="flex-center">
        <H3 style={{ color: "#ffffff" }}>Sukma Rangga</H3>
      </Logo>
      <MenuHeader>
        <H3 style={{ color: "#ffffff" }}>Home</H3>
        <H3 style={{ color: "#ffffff" }}>Project</H3>
        <H3 style={{ color: "#ffffff" }}>About</H3>
        <H3 style={{ color: "#ffffff" }}>Contact</H3>

        {/* <button
          type="button"
          className="button"
          onClick={() => console.log("kepencet")}
        >
          ☰
        </button> */}
      </MenuHeader>
    </Wrapper>
  );
}

export default index;
