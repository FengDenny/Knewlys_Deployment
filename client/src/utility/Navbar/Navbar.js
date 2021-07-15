import React from "react";
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
  // grab first letter of auth email
  const firstLetterEmail = auth.email.split("");
  const beforeAt = auth.email.split("@");
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(setUserLoggedOut());
  };

  return (
    <Nav>
      <Container>
        <ThemeProvider theme={theme}>
          <NavGridThree>
            <NavLogo theme={{ fontSizeXLG: " var(--font-size-24)" }}>
              Knewlys
            </NavLogo>
            <UL>
              <LI theme={{ fontSizeXLG: "var(--font-size-sm)" }}>
                <NavLink
                  activeStyle={{ borderBottom: "1px solid #C4B7BD" }}
                  exact
                  to='#'
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
                <NavAuth>
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
              />
            </Dropdown>
          </NavGridThree>
        </ThemeProvider>
      </Container>
    </Nav>
  );
}
export default Navbar;
