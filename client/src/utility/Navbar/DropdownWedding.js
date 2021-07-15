import React from "react";

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
  return (
    <DropdownContent>
      <DropdownPadding>
        <NavLink activeStyle={{ color: "#fff" }} exact to='/'>
          <FontAwesomeIcon icon={faCalendarCheck} size='1x' />
          <NavAuthSpan>Upcoming</NavAuthSpan>
        </NavLink>
      </DropdownPadding>
      <HRLine />
      <DropdownPadding>
        <NavLink activeStyle={{ color: "#fff" }} exact to='/'>
          <FontAwesomeIcon icon={faCalendarAlt} size='1x' />
          <NavAuthSpan>Future</NavAuthSpan>
        </NavLink>
      </DropdownPadding>
      <HRLine />
      <DropdownPadding>
        <NavLink activeStyle={{ color: "#fff" }} exact to='/'>
          <FontAwesomeIcon icon={faMapMarkerAlt} size='1x' />
          <NavAuthSpan>Venues</NavAuthSpan>
        </NavLink>
      </DropdownPadding>
    </DropdownContent>
  );
}
export default DropdownWedding;
