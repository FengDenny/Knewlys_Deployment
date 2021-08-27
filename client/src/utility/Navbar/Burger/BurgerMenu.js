import React, { useState, useEffect } from "react";
import { StyledMenu } from "../../../styled-components/globalStyled";
function BurgerMenu({
  open,
  DropdownContent,
  NavAuthSpan,
  DropdownPadding,
  NavLogoutBtn,
  HRLine,
  faUser,
  faHeart,
  setModalOpen,
  setOpacity,
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
  navLinkColor,
  DropdownWedding,
  BurgerUL,
  LI,
  Cursor,
  faCalendarCheck,
  faCalendarAlt,
  faMapMarkerAlt,
  navAuthBorderColor,
  NavAuthUL,
  NavAuth,
  NavAuthAccount,
  firstLetterEmail,
  DropdownProfile,
  ProfileDropdown,
  WeddingDropdown,
}) {
  // scrollevent
  const [navBgColor, setNavBgColor] = useState("var(--hamburger-menu-color)");
  // navbar scroll eventHandler
  const listenToScrollEvent = () => {
    window.scrollY >= 80
      ? setNavBgColor("var(--primary-color)")
      : setNavBgColor("var(--hamburger-menu-color)");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScrollEvent);
  }, []);

  return (
    <StyledMenu open={open} style={{ background: `${navBgColor}` }}>
      <BurgerUL>
        <LI theme={{ fontSizeXLG: "var(--font-size-sm)" }}>
          <NavLink
            activeStyle={{ borderBottom: "1px solid #fff" }}
            exact
            to='/'
            style={{ color: navLinkColor }}
          >
            Gallery
          </NavLink>
        </LI>
        <WeddingDropdown>
          <Cursor>
            <LI theme={{ fontSizeXLG: "var(--font-size-sm)" }}>Weddings</LI>
          </Cursor>

          <DropdownWedding
            DropdownContent={DropdownContent}
            NavAuthSpan={NavAuthSpan}
            DropdownPadding={DropdownPadding}
            HRLine={HRLine}
            faCalendarCheck={faCalendarCheck}
            faCalendarAlt={faCalendarAlt}
            faMapMarkerAlt={faMapMarkerAlt}
            FontAwesomeIcon={FontAwesomeIcon}
            NavLink={NavLink}
          />
        </WeddingDropdown>
      </BurgerUL>
      <ProfileDropdown>
        <NavAuthUL>
          <NavAuth style={{ border: navAuthBorderColor }}>
            <NavAuthAccount theme={{ justifyContent: "center" }}>
              {firstLetterEmail[0]}
            </NavAuthAccount>
          </NavAuth>
        </NavAuthUL>
        <DropdownProfile
          DropdownContent={DropdownContent}
          NavAuthSpan={NavAuthSpan}
          DropdownPadding={DropdownPadding}
          NavLogoutBtn={NavLogoutBtn}
          HRLine={HRLine}
          faUser={faUser}
          faHeart={faHeart}
          setModalOpen={setModalOpen}
          setOpacity={setOpacity}
          faPlusSquare={faPlusSquare}
          faSignOutAlt={faSignOutAlt}
          beforeAt={beforeAt}
          logout={logout}
          FontAwesomeIcon={FontAwesomeIcon}
          NavLink={NavLink}
          DropdownButton={DropdownButton}
          openModal={openModal}
          setActive={setActive}
          modalOpen={modalOpen}
          active={active}
          opacity={opacity}
          closeModal={closeModal}
          afterOpen={afterOpen}
          beforeClose={beforeClose}
          userID={userID}
        />
      </ProfileDropdown>
    </StyledMenu>
  );
}

export default BurgerMenu;
