import React, { useState, useEffect } from "react";

function DropdownWedding({
  DropdownContent,
  NavAuthSpan,
  DropdownPadding,
  HRLine,
  faCalendarCheck,
  faCalendarAlt,
  faMapMarkerAlt,
  FontAwesomeIcon,
  NavLink,
}) {
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [hrLineColor, sethrLineColor] = useState(
    "1px solid var(--primary-color)"
  );
  const [navLinkColor, setNavLinkColor] = useState("var(--primary-color)");

  const [navWedBorderColor, setNavWedBorderColor] = useState(
    "2px solid var(--primary-color)"
  );

  // navbar scroll eventHandler
  const listenToScrollEvent = () => {
    window.scrollY >= 80
      ? setBackgroundColor("var(--primary-color)")
      : setBackgroundColor("transparent");
    setNavWedBorderColor("2px solid var(--primary-color)");

    window.scrollY >= 80
      ? sethrLineColor("1px solid var(--white-color)")
      : sethrLineColor("1px solid var(--primary-color)");
    window.scrollY >= 80
      ? setNavLinkColor("var(--white-color")
      : setNavLinkColor("var(--primary-color)");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScrollEvent);
  }, []);
  return (
    <DropdownContent
      style={{ backgroundColor: backgroundColor, border: navWedBorderColor }}
    >
      <DropdownPadding>
        <NavLink activeStyle={{ color: "#fff" }} exact to='/'>
          <FontAwesomeIcon
            icon={faCalendarCheck}
            size='1x'
            style={{ color: navLinkColor }}
          />
          <NavAuthSpan style={{ color: navLinkColor }}>Upcoming</NavAuthSpan>
        </NavLink>
      </DropdownPadding>
      <HRLine style={{ border: hrLineColor }} />
      <DropdownPadding>
        <NavLink activeStyle={{ color: "#fff" }} exact to='/'>
          <FontAwesomeIcon
            icon={faCalendarAlt}
            size='1x'
            style={{ color: navLinkColor }}
          />
          <NavAuthSpan style={{ color: navLinkColor }}>Future</NavAuthSpan>
        </NavLink>
      </DropdownPadding>
      <HRLine style={{ border: hrLineColor }} />
      <DropdownPadding>
        <NavLink activeStyle={{ color: "#fff" }} exact to='/'>
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            size='1x'
            style={{ color: navLinkColor }}
          />
          <NavAuthSpan style={{ color: navLinkColor }}>Venues</NavAuthSpan>
        </NavLink>
      </DropdownPadding>
    </DropdownContent>
  );
}
export default DropdownWedding;
