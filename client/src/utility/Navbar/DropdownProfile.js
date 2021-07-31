import React, { useState, useEffect } from "react";
import { StyledModal, StyledCloseModal } from "../../styled-components/styled";
import Post from "../../pages/protected/DropdownProfile/Post";
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
  DropdownButton,
  openModal,
  setActive,
  modalOpen,
  active,
  opacity,
  closeModal,
  afterOpen,
  beforeClose,
  userID,
}) {
  // scroll events
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const [hrLineColor, sethrLineColor] = useState(
    "1px solid var(--primary-color)"
  );
  const [navLinkColor, setNavLinkColor] = useState("var(--primary-color)");

  const [navAuthBorderColor, setNavAuthBorderColor] = useState(
    "2px solid var(--primary-color)"
  );
  const [logOutBorderColor, setLogOutBorderColor] = useState(
    "1px solid var(--primary-color)"
  );

  // navbar scroll eventHandler
  const listenToScrollEvent = () => {
    window.scrollY >= 80
      ? setBackgroundColor("var(--primary-color)")
      : setBackgroundColor("transparent");
    setNavAuthBorderColor("2px solid var(--primary-color)");

    window.scrollY >= 80
      ? sethrLineColor("1px solid var(--white-color)")
      : sethrLineColor("1px solid var(--primary-color)");
    window.scrollY >= 80
      ? setNavLinkColor("var(--white-color")
      : setNavLinkColor("var(--primary-color)");
    window.scrollY >= 80
      ? setLogOutBorderColor("2px solid var(--white-color)")
      : setLogOutBorderColor("2px solid var(--primary-color)");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScrollEvent);
  }, []);

  return (
    <DropdownContent
      style={{
        backgroundColor: backgroundColor,
        border: navAuthBorderColor,
      }}
    >
      <DropdownPadding>
        <NavLink activeStyle={{ color: "#fff" }} exact to={`/user/${userID}`}>
          <FontAwesomeIcon
            icon={faUser}
            size='1x'
            style={{ color: navLinkColor }}
          />
          <NavAuthSpan style={{ color: navLinkColor }}>
            {beforeAt[0]}'s profile
          </NavAuthSpan>
        </NavLink>
      </DropdownPadding>
      <HRLine style={{ border: hrLineColor }} />
      <DropdownPadding>
        <NavLink activeStyle={{ color: "#fff" }} exact to='/'>
          <FontAwesomeIcon
            icon={faHeart}
            size='1x'
            style={{ color: navLinkColor }}
          />
          <NavAuthSpan style={{ color: navLinkColor }}>My Gallery</NavAuthSpan>
        </NavLink>
      </DropdownPadding>
      <HRLine style={{ border: hrLineColor }} />
      <DropdownPadding>
        <DropdownButton
          onClick={() => {
            openModal();
            setActive("post");
          }}
        >
          <FontAwesomeIcon
            icon={faPlusSquare}
            size='1x'
            style={{ color: navLinkColor }}
          />
          <NavAuthSpan style={{ color: navLinkColor }}>
            Post Gallery
          </NavAuthSpan>
        </DropdownButton>
      </DropdownPadding>
      <HRLine style={{ border: hrLineColor }} />
      <DropdownPadding>
        <NavLogoutBtn onClick={logout} style={{ border: logOutBorderColor }}>
          <FontAwesomeIcon
            icon={faSignOutAlt}
            size='1x'
            style={{ color: navLinkColor }}
          />
          <NavAuthSpan style={{ color: navLinkColor }}>Logout</NavAuthSpan>
        </NavLogoutBtn>
      </DropdownPadding>
      <StyledModal
        isOpen={modalOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={closeModal}
        backgroundProps={{ opacity }}
      >
        <StyledCloseModal onClick={closeModal}>&times;</StyledCloseModal>
        {active === "post" && <Post />}
      </StyledModal>
    </DropdownContent>
  );
}
export default DropdownProfile;
