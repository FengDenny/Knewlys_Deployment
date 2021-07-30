import React, { useEffect, useState } from "react";
import DropdownProfile from "./DropdownProfile";
import DropdownWedding from "./DropdownWedding";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUserLoggedOut } from "../../redux/actions/authAction";
import { ThemeProvider } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  Container,
  NavGridThree,
  theme,
  Nav,
  NavLogo,
  LI,
  UL,
  NavAuthUL,
  NavAuthAccount,
  NavAuth,
  Dropdown,
  DropdownContent,
  NavAuthSpan,
  DropdownPadding,
  NavLogoutBtn,
  HRLine,
  Cursor,
  DropdownButton,
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
  const { auth } = useSelector((state) => ({ ...state }));

  // modal
  const [modalOpen, setModalOpen] = useState(false);
  const [active, setActive] = useState("post");
  const [opacity, setOpacity] = useState(0);

  const openModal = () => {
    setOpacity(0);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const afterOpen = () => {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  };

  const beforeClose = () => {
    return new Promise((resolve) => {
      setOpacity(0);
      setTimeout(resolve, 200);
    });
  };

  // scrollevent
  const [navSize, setNavSize] = useState("8rem");
  const [navbarColor, setNavbarColor] = useState("transparent");
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
      : setNavbarColor("transparent");
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
      <Container>
        <ThemeProvider theme={theme}>
          <NavGridThree>
            <NavLogo theme={{ fontSizeXLG: " var(--font-size-24)" }}>
              Knewlys
            </NavLogo>
            <UL>
              <LI theme={{ fontSizeXLG: "var(--font-size-sm)" }}>
                <NavLink
                  activeStyle={{ borderBottom: "1px solid #fff" }}
                  exact
                  to='#'
                  style={{ color: navLinkColor }}
                >
                  Gallery
                </NavLink>
              </LI>
              <Dropdown>
                <Cursor>
                  <LI theme={{ fontSizeXLG: "var(--font-size-sm)" }}>
                    Weddings
                  </LI>
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
              </Dropdown>
            </UL>
            <Dropdown>
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
              />
            </Dropdown>
          </NavGridThree>
        </ThemeProvider>
      </Container>
    </Nav>
  );
}
export default Navbar;
