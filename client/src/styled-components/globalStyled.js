import styled, { createGlobalStyle, keyframes } from "styled-components";
import { motion } from "framer-motion";
import { MediaQueries } from "./styled";

// Global styling
export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html,
body {
  max-width: 100%;
  overflow-x: hidden;
  background:var(--white-color)
}

a {
    list-style-type: none;
    text-decoration: none;
  }
:root{
  --primary-font: 'Work Sans', sans-serif;
  --primary-color: #ff0844;
  --gradient-primary: linear-gradient(to left, #ff0844, #ffb199);
  --gradient-hover: linear-gradient(to top, #ff0844, #ffb199);
  --secondary-color: #4A5961;
  --secondary-color-hover: #3A464D;
  --nav-footer-color: #445259;
  --form-label-color: #94A3B1;
  --form-label-white-gray-color: #DADADA;
  --form-button-submit: #00c04d;
  --form-button-submit-hover: #02963d;
  --form-header-color:#25313C;
  --white-color: #FFFFFF;
  --error-color: red;
  --content-overlay: rgba(0, 0, 0, 0.5);
  --box-shadow: 0 24px 21px 0 var(--content-overlay);
  --box-shadow-light: 0 15px 45px 0 var(--content-overlay);
  --box-shadow-sm: 0 3px 3px 0 var(--content-overlay);
  --font-size-xlg: 64px;
  --font-size-48: 48px;
  --font-size-lg: 36px;
  --font-size-24:24px;
  --font-size-sm: 17px;
  --font-size-xsm: 14px;
  --error-font-size: 13px;
  --font-size-md: 30px;
  --font-size: 20px;
  --space-one: 1.5em 0;
  --space-two: 2em 0;
}
`;

export const Section = styled.section`
  margin-top: 200px;
  height: ${(props) => props.theme.height100};
`;

export const BodyBackground = styled.div`
  background-color: ${(props) => props.theme.body};
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const MiddleFlexDisplayed = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: ${(props) => props.theme.alignItems};
  flex-direction: column;
  height: ${(props) => props.theme.height100};
  margin: auto;
  width: ${(props) => props.theme.width50};

  ${MediaQueries("laptop")`
  height: 30vh;
  width:46%;
  `}

  ${MediaQueries("mobileL")`
  height:15vh;
  width:78%;
  `}  
  ${MediaQueries("mobileM")`
  height:21vh;
  width:78%;
  `}
`;

export const MediaFlexDisplay = styled(MiddleFlexDisplayed)`
  ${MediaQueries("tablet")`
  width: 57%;
`}
  ${MediaQueries("mobileL")`
width:96%;
`}
`;

export const GalleryFlexDisplay = styled(MiddleFlexDisplayed)`
  ${MediaQueries("mobileL")`
height:40vh;
`}
`;

export const MiddleFlexHeight = styled(MiddleFlexDisplayed)`
  height: ${(props) => props.theme.height};
  width: 84%;
`;

export const Header = styled(motion.h5)`
  position: relative;
  font-family: var(--primary-font);
  //   change the color theme with props
  color: ${(props) => props.theme.headerMain};
  font-size: ${(props) => props.theme.fontSizeXLG};
  right: ${(props) => props.theme.paragraphRight};
  align-self: flex-start;
  font-weight: ${(props) => props.theme.fontWeight};
  width: ${(props) => props.theme.width50};

  ${MediaQueries("laptop")`
  font-size: var(--font-size-lg);

  `}
  ${MediaQueries("tablet")`
  font-size: var(--font-size-24);
  `}
  
  ${MediaQueries("mobileM")`
  font-size: var(--font-size);
  `}
`;

export const MidHeader = styled.h3`
  font-family: var(--primary-font);
  //   change the color theme with props
  color: ${(props) => props.theme.modalHeader};
  font-size: ${(props) => props.theme.fontSize};
  align-self: ${(props) => props.theme.alignSelf};
  display: flex;
  justify-content: center;
  position: relative;
`;

export const HeaderStart = styled(MidHeader)`
  align-self: ${(props) => props.theme.alignSelf};
`;

export const HeaderStartMargin = styled(HeaderStart)`
  top: 70px;
  font-weight: normal;
`;
export const HeaderStartPosition = styled(HeaderStart)`
  position: relative;
  right: 44px;
`;

export const HeaderStartMarginPosition = styled(HeaderStartPosition)`
  left: 2px;
  top: 30px;
  font-weight: normal;
`;

export const Paragraph = styled.p`
  font-size: var(--font-size-sm);
  color: ${(props) => props.theme.headerMain};
  padding: ${(props) => props.theme.padding};
  position: relative;
`;

export const ParagraphWidth = styled(Paragraph)`
  width: ${(props) => props.theme.paragraphWidth};
  line-height: ${(props) => props.theme.lineHeight};
  margin-left: ${(props) => props.theme.marginLeft};

  ${MediaQueries("mobileL")`
  width:359px;
  `}
  ${MediaQueries("mobileM")`
  width:326px;
  `}
`;

export const ParagraphSpan = styled.span`
  color: var(--form-label-color);
  padding: 0 0 0 3px;
`;

export const theme = {
  headerMain: "var(--white-color)",
  modalHeader: "var(--primary-color)",
  body: "var(--secondary-color)",
  fontSize: "var(--font-size-lg)",
  fontSizeXSmall: "var(--font-size-xsm)",
  fontSizeXLG: "var(--font-size-xlg)",
  inputWidth: "334px",
  buttonWdith: "334px",
  formLabelColor: "var(--form-label-color)",
  paragraphRight: " 5px;",
  textDecoration: "underline",
  marginLeft: "0 ",
  marginTop: "0",
  height: "30vh",
  height100: "100vh",
  width50: "50%",
  alignSelf: "center",
  alignItems: "flex-start",
  paragraphWidth: "325px;",
  justifyContent: " flex-end",
  bottom: "0",
  fontWeight: "0",
  lineHeight: "22px",
  padding: "5px 0 0 0",
};
export const Button = styled.button`
  background: ${(props) =>
    props.primary
      ? "var( --gradient-primary)"
      : "none" || props.secondary
      ? "none"
      : "var(--secondary-color)"};
  color: ${(props) =>
    props.primary
      ? "var(--white-color)"
      : "var(--secondary-color)" || props.secondary
      ? "var(--white-color)"
      : "var(--secondary-color)"}}
  font-size: var(--font-size-sm);
  border:${(props) =>
    props.primary
      ? "2px solid var(--gradient-primary)"
      : " none" || props.secondary
      ? "2px solid var(--primary-color)"
      : "none"};
  border-radius:5px;
  padding: 2px  0 0 0;
  cursor:pointer;

  :hover{
    background: ${(props) =>
      props.primary
        ? "var( --gradient-hover)"
        : "none" || props.secondary
        ? "var( --gradient-primary)"
        : "none"};
      border: ${(props) =>
        props.primary
          ? " 2px solid var(--gradient-hover)"
          : "none" || props.secondary
          ? "var( --gradient-primary)"
          : "none"}   
  }

  ${MediaQueries("laptop")`
  padding: 7px 0px 6px 7px;
  `}

`;

export const GridTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 35px;
  width: 100%;
  padding: 25px 0 0 0;
  grid-gap: 5px;

  ${MediaQueries("laptop")`
  grid-template-columns: repeat(1, 1fr);
  `}
`;

export const NavGridThree = styled(GridTwo)`
  // create a smaller grid size for last grid
  grid-template-columns: repeat(2, 1fr) 85px;
`;
// Vow Section
export const VowsSection = styled(motion.section)`
  margin-top: 1000px;
  overflow: hidden;

  ${MediaQueries("laptop")`
  margin-top: 808px;
  `}
  ${MediaQueries("tablet")`
  margin-top: 500px
  `}
 
  ${MediaQueries("mobileL")`
  margin-top: 250px
  `}
`;
export const VowsSectionGrid = styled(GridTwo)`
  grid-template-rows: 500px;
  overflow: hidden;
  padding: 0px;
  ${MediaQueries("mobileM")`
  grid-template-rows: 535px;
  `}
`;

export const VowSectionSpan = styled.span`
  font-size: var(--font-size-xlg);

  ${MediaQueries("tablet")`
  font-size: 40px;
  `}
`;

export const VowSectionImage = styled.img`
  position: relative;
  bottom: ${(props) => props.theme.bottom};
  width: 500px;

  ${MediaQueries("laptop")`
  display: flex;
    justify-content: center;
    align-self: center;
  `}

  ${MediaQueries("mobileL")`
  width:  358px;
  `} 
  ${MediaQueries("mobileM")`
  width:  323px;
  `}
`;

// Gallery
export const GalleryBG = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 70vh;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: var(--primary-color); /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to left,
      #ff0844,
      #ffb199
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: var(
      --gradient-primary
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-radius: 0 0 50% 50%/0 0 100% 100%;
    transform: scaleX(1.4);
  }

  ${MediaQueries("laptop")`
  height:87vh;
`}

  ${MediaQueries("mobileL")`
  height:100vh;
  &::before{border-radius: 0 0 45% 45%/0 0 72% 72%;}
`}
`;

export const GallerySectionGrid = styled(VowsSectionGrid)`
  grid-template-rows: 600px;

  ${MediaQueries("laptop")`
  grid-template-rows: 350px;
`}

  ${MediaQueries("mobileL")`
  grid-template-rows: 250px;
`}
`;
export const GallerySectionImage = styled(VowSectionImage)`
  left: 50px;
  ${MediaQueries("laptop")`
  top:30px;
  left:0;
  `}
  ${MediaQueries("mobileL")`
  width:352px;
  margin-right:41px;
  `} 
  ${MediaQueries("mobileM")`
  width:317px;
  `}
`;

// WeddingLocations

export const WeddingMotion = styled(motion.div)``;

export const WeddingLocationGrid = styled(VowsSectionGrid)`
  grid-template-rows: 680px;
  ${MediaQueries("laptop")`
  grid-template-rows: 450px;
  `}
`;

export const WeddingSectionImage = styled(VowSectionImage)`
  ${MediaQueries("laptop")`
width:450px;
`}
  ${MediaQueries("mobileL")`
width:352px;
margin-right:50px;
`} 
${MediaQueries("mobileM")`
width:317px;
`}
`;

//Form
export const FormContainer = styled.form`
  max-width: 1400px;
`;

export const FormGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-left: ${(props) => props.theme.marginLeft};
`;

export const FormLabel = styled.label`
  font-size: var(--font-size-sm);
  font-family: var(--primary-font);
  padding: 14px 0 0 0;
  color: ${(props) => props.theme.formLabelColor};
`;

export const FormInput = styled.input`
  position: relative;
  height: 40px;
  width: ${(props) => props.theme.inputWidth};
  outline: none;
  border: 2px solid var(--secondary-color);
  border-radius: 5px;
  padding: 10px;
  top: 3px;

  &:invalid {
    border: 2px solid red;
  }
  // &:valid {
  //   border: 2px solid green;
  // }
`;

export const FormParagraph = styled.p`
  font-size: ${(props) => props.theme.fontSizeXSmall};
  color: ${(props) => props.theme.headerMain};
  padding: 21px 0 0 0;
  position: relative;
  left: 5px;
  width: 328px;
  line-height: 20px;
`;

export const ForgotPasswordLink = styled.a`
  color: var(--primary-color);
  font-weight: 200;
  margin-top: 18px;
  margin-left: 45px;
  cursor: pointer;
`;
export const FormLink = styled(ForgotPasswordLink)`
  margin-top: ${(props) => props.theme.marginTop};
  margin-left: ${(props) => props.theme.marginLeft};
  text-decoration: ${(props) => props.theme.textDecoration};
`;

export const FormButton = styled(Button)`
  margin-top: 20px;
  width: ${(props) => props.theme.buttonWdith};
  height: 40px;
`;

export const FormSwitch = styled(FormParagraph)`
  display: flex;
  align-self: center;
  justify-content: center;
`;
export const FormLinkSwitch = styled(FormLink)`
  padding: 0 0 0 4px;
  text-decoration: none;
  font-size: var(--font-size-sm);
`;

export const FormSubmitButton = styled(FormButton)`
border 2px solid var(--form-button-submit);
background: ${(props) =>
  props.green ? "var(--form-button-submit)" : "var(--secondary-color)"};
color: ${(props) =>
  props.green ? "var(--white-color)" : "var( --secondary-color)"}}
  :hover{
    background: ${(props) =>
      props.green ? "var(--form-button-submit-hover)" : " none"};
      border: ${(props) =>
        props.green ? "2px solid var(--form-button-submit-hover)" : "none"}
`;

// Navbar

export const Nav = styled.nav`
  background: var(--nav-footer-color);
  color: var(--white-color);
`;
export const NavLogo = styled(Header)`
  position: relative;
  bottom: 4px;
`;

export const UL = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export const NavAuthUL = styled(UL)`
  justify-content: ${(props) => props.theme.justifyContent};
  position: relative;
  bottom: 8px;
`;

export const LI = styled.li`
  font-size: ${(props) => props.theme.fontSizeXLG};
  // top right bottom left
  padding: 0 55px 0 14px;
  a {
    text-decoration: none;
    color: var(--white-color);
  }
`;

export const Cursor = styled(UL)`
  cursor: pointer;
`;
// create a white bordered circle
export const NavAuth = styled.li`
  height: 35px;
  width: 35px;
  border: 1px solid var(--white-color);
  border-radius: 50%;
  align-self: flex-end;
  cursor: pointer;
`;
export const NavAuthAccount = styled.h2`
  display: flex;
  justify-content: ${(props) => props.theme.justifyContent};
  margin-top: 3px;
`;
export const NavAuthSpan = styled.span`
  padding: 0 0 0 10px;
`;

export const NavLogoutBtn = styled.button`
  border: 1px solid var(--white-color);
  border-radius: 2px;
  width: 146px;
  height: 29px;
  color: var(--white-color);
  background: none;
  cursor: pointer;
  box-shadow: var(--box-shadow-light);
  &:hover {
    background: var(--secondary-color);
  }
`;

// Navbar dropdown

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  &:hover {
    display: block;
    > div {
      display: block;
      position: absolute;
      right: 0;
    }
  }
`;
export const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: var(--nav-footer-color);
  min-width: 180px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  padding: 12px 16px;
  z-index: 1;
  border-radius: 2px;
  border: 1px solid var(--nav-footer-color);
`;
export const HRLine = styled.hr`
  border: 1px solid var(--form-label-color);
  border-radius: 1px;
  // top right bottom left
  margin: 5px 0 5px 0;
`;
export const DropdownPadding = styled.div`
  padding: 8px 0 3px 0;
`;
// Footer

export const FooterDisplay = styled.footer`
  background: var(--gradient-primary);
  color: var(--white-color);
  height: ${(props) => props.theme.height};
`;

export const FooterHeader = styled(Header)`
  position: relative;
  top: 20px;
  font-weight: normal;

  ${MediaQueries("laptop")`
    font-size: var(--font-size)
  `}
`;
export const FooterLI = styled(LI)`
  position: relative;
  top: 30px;
  // top right bottom left
  padding: 0 50px 0 0;
`;

// Animations

const bounce = keyframes`
0%, 20%, 50%, 80%, 100% {
  transform: translateY(0);
}
40% {
  transform: translateY(-30px);
}
60% {
  transform: translateY(-15px);
}

`;

export const Bounce = styled.div`
  -moz-animation: ${bounce} 2s infinite;
  -webkit-animation: ${bounce} 2s infinite;
  animation: ${bounce} 2s infinite;
  position: fixed;
  bottom: 15px;
  ${MediaQueries("tablet")`
    display:none;
  `}
`;
