import React, { useState, useEffect } from "react";
import { StyledBurger } from "../../../styled-components/globalStyled";

function NavBurger({ open, setOpen }) {
  // scrollevent
  const [navBgColor, setNavBgColor] = useState("var(--primary-color)");
  // navbar scroll eventHandler
  const listenToScrollEvent = () => {
    window.scrollY >= 80
      ? setNavBgColor("var(--white-color)")
      : setNavBgColor("var(--primary-color)");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScrollEvent);
  }, []);
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div
        style={{
          background: `${navBgColor}`,
          transition: "all 1s",
        }}
      />
      <div
        style={{
          background: `${navBgColor}`,
          transition: "all 1s",
        }}
      />
      <div
        style={{
          background: `${navBgColor}`,
          transition: "all 1s",
        }}
      />
    </StyledBurger>
  );
}
export default NavBurger;
