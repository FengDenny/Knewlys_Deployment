import React, { useEffect, useState, useRef } from "react";
import DropdownProfile from "./DropdownProfile";
import DropdownWedding from "./DropdownWedding";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserLoggedOut } from "../../redux/actions/authAction";
import { ThemeProvider } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BurgerMenu from "./Burger/BurgerMenu";
import NavBurger from "./Burger/NavBurger";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  openModal,
  closeModal,
  beforeClose,
  afterOpen,
} from "../../components/modal/modal";
import {
  Container,
  NavGridTwo,
  theme,
  Nav,
  NavLogo,
  LI,
  BurgerUL,
  NavAuthUL,
  NavAuthAccount,
  NavAuth,
  WeddingDropdown,
  DropdownContent,
  NavAuthSpan,
  DropdownPadding,
  NavLogoutBtn,
  HRLine,
  Cursor,
  DropdownButton,
  ProfileDropdown,
} from "../../styled-components/globalStyled";
import {
  faUser,
  faHeart,
  faPlusSquare,
  faSignOutAlt,
  faCalendarAlt,
  faCalendarCheck,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faUser,
  faHeart,
  faPlusSquare,
  faSignOutAlt,
  faCalendarCheck,
  faCalendarAlt,
  faMapMarkerAlt
);

function Navbar() {
  // react-redux
  const { auth } = useSelector((state) => ({ ...state }));
  const userID = auth._id;
  // modal
  const [modalOpen, setModalOpen] = useState(false);
  const [active, setActive] = useState("post");
  const [opacity, setOpacity] = useState(0);

  // Nav Burger
  const [open, setOpen] = useState(false);
  const node = useRef();

  // scrollevent
  const [navSize, setNavSize] = useState("8rem");
  const [navbarColor, setNavbarColor] = useState("var(--hamburger-menu-color)");
  const [navLinkColor, setNavLinkColor] = useState("var(--primary-color)");
  const [navAuthBorderColor, setNavAuthBorderColor] = useState(
    "1px solid var(--primary-color)"
  );
  // grab first letter of auth email
  const firstLetterEmail = auth.email.toUpperCase().split("");
  const beforeAt = auth.email.split("@");
  const dispatch = useDispatch();

  // navbar scroll eventHandler
  const listenToScrollEvent = () => {
    window.scrollY >= 80
      ? setNavbarColor("var(--primary-color)")
      : setNavbarColor("var(--hamburger-menu-color)");
    window.scrollY >= 80 ? setNavSize("5rem") : setNavSize("8rem");
    window.scrollY >= 80
      ? setNavLinkColor("var(--white-color)")
      : setNavLinkColor("var(--primary-color)");
    window.scrollY >= 80
      ? setNavAuthBorderColor("1px solid var(--white-color)")
      : setNavAuthBorderColor("1px solid var(--primary-color)");
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScrollEvent);
  }, []);

  // logout dispatch button
  const logout = () => {
    dispatch(setUserLoggedOut());
    // To fix issue with userprofile route
    window.location.replace("/");
  };

  return (
    <Nav
      style={{
        backgroundColor: `${navbarColor}`,
        height: `${navSize}`,
        color: `${navLinkColor}`,
        transition: "all 1s",
      }}
    >
      <Container ref={node}>
        <ThemeProvider theme={theme}>
          <NavGridTwo>
            <NavLogo theme={{ fontSizeXLG: " var(--font-size-24)" }}>
              Knewlys
            </NavLogo>
            <NavBurger open={open} setOpen={setOpen} />

            <BurgerMenu
              open={open}
              setOpen={setOpen}
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
              navLinkColor={navLinkColor}
              WeddingDropdown={WeddingDropdown}
              DropdownWedding={DropdownWedding}
              BurgerUL={BurgerUL}
              LI={LI}
              Cursor={Cursor}
              faCalendarCheck={faCalendarCheck}
              faCalendarAlt={faCalendarAlt}
              faMapMarkerAlt={faMapMarkerAlt}
              navAuthBorderColor={navAuthBorderColor}
              NavAuthUL={NavAuthUL}
              NavAuth={NavAuth}
              NavAuthAccount={NavAuthAccount}
              firstLetterEmail={firstLetterEmail}
              DropdownProfile={DropdownProfile}
              ProfileDropdown={ProfileDropdown}
            />
          </NavGridTwo>
        </ThemeProvider>
      </Container>
    </Nav>
  );
}
export default Navbar;
