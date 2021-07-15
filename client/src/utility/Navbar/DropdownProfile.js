import React from "react";
function DropdownProfile({
  DropdownContent,
  NavAuthSpan,
  DropdownPadding,
  NavLogoutBtn,
  HRLine,
  faUser,
  faHeart,
  faPlusSquare,
  faSignOutAlt,
  beforeAt,
  logout,
  FontAwesomeIcon,
  NavLink,
}) {
  return (
    <DropdownContent>
      <DropdownPadding>
        <NavLink activeStyle={{ color: "#fff" }} exact to='/'>
          <FontAwesomeIcon icon={faUser} size='1x' />
          <NavAuthSpan>{beforeAt[0]}'s profile</NavAuthSpan>
        </NavLink>
      </DropdownPadding>
      <HRLine />
      <DropdownPadding>
        <NavLink activeStyle={{ color: "#fff" }} exact to='/'>
          <FontAwesomeIcon icon={faHeart} size='1x' />
          <NavAuthSpan>My Gallery</NavAuthSpan>
        </NavLink>
      </DropdownPadding>
      <HRLine />
      <DropdownPadding>
        <NavLink activeStyle={{ color: "#fff" }} exact to='/'>
          <FontAwesomeIcon icon={faPlusSquare} size='1x' />
          <NavAuthSpan>Post Gallery</NavAuthSpan>
        </NavLink>
      </DropdownPadding>
      <HRLine />
      <DropdownPadding>
        <NavLogoutBtn onClick={logout}>
          <FontAwesomeIcon icon={faSignOutAlt} size='1x' />
          <NavAuthSpan>Logout</NavAuthSpan>
        </NavLogoutBtn>
      </DropdownPadding>
    </DropdownContent>
  );
}
export default DropdownProfile;
