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
  background:var(--white-color);

}



a {
    list-style-type: none;
    text-decoration: none;
  }
:root{
  --primary-font: 'Work Sans', sans-serif;
  --primary-color: #e04f72;
  --border-color-dark:#bb002d;
  --gradient-primary: linear-gradient(to right, #e04f72, #D1234C);
  --gradient-hover: linear-gradient(to top, #e04f72, #D1234C);
  --secondary-color: #4A5961;
  --secondary-color-hover: #3A464D;setNavLinkColor("var(--white-color)")
  --form-label-color: #94A3B1;
  --form-label-white-gray-color: #DADADA;
  --form-button-submit: #00c04d;
  --form-button-submit-hover: #02963d;
  --form-header-color:#25313C;
  --white-color: #FFFFFF;
  --error-color: red;
  --content-overlay: rgba(0, 0, 0, 0.2);
  --box-shadow: 0 24px 21px 0 var(--content-overlay);
  --box-shadow-light: 0 15px 40px 0 var(--content-overlay);
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

export const theme = {
  headerMain: "var(--white-color)",
  modalHeader: "var(--primary-color)",
  body: "var(--secondary-color)",
  fontSize: "var(--font-size-lg)",
  fontSizeXSmall: "var(--font-size-xsm)",
  fontSizeXLG: "var(--font-size-xlg)",
  inputWidth: "334px",
  buttonWidth: "334px",
  gridTempRow: "35px",
  formLabelColor: "var(--form-label-color)",
  color: "#fff",
  paragraphRight: " 5px;",
  paragraphLeft: "5px",
  textDecoration: "underline",
  marginLeft: "0 ",
  marginTop: "0",
  marginAuto: "auto",
  height: "30vh",
  height100: "100vh",
  width50: "50%",
  width100: "100%",
  alignSelf: "center",
  alignItems: "flex-start",
  paragraphWidth: "325px;",
  justifyContent: " flex-end",
  bottom: "0",
  right: "0",
  left: "0",
  top: "0",
  fontWeight: "0",
  lineHeight: "22px",
  padding: "5px 0 0 0",
  display: "none",
  flexDirection: "column",
};

export const Section = styled.section`
  margin-top: 200px;
  height: ${(props) => props.theme.height100};
  ${MediaQueries("tablet")`
  margin-top: 0;
`};
`;

export const WeddingSection = styled(Section)`
  ${MediaQueries("tablet")`
  margin-top: 200px;
`};
`;

export const Span = styled.span`
  position: relative;
  font-family: var(--primary-font);
  //   change the color theme with props
  color: ${(props) => props.theme.headerMain};
  font-size: ${(props) => props.theme.fontSizeXLG};
  left: ${(props) => props.theme.paragraphLeft};
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
  flex-direction: ${(props) => props.theme.flexDirection};
  height: ${(props) => props.theme.height100};
  margin-top: ${(props) => props.theme.marginTop};
  width: ${(props) => props.theme.width50};
  height: ${(props) => props.theme.height};
  ${MediaQueries("laptop")`
  height: 30vh;
  width:46%;
  `};
  ${MediaQueries("mobileL")`
  height:15vh;
  width:78%;
  `};
  ${MediaQueries("mobileM")`
  height:21vh;
  width:78%;
  `};
`;

export const MiddleCardFlexDisplayed = styled(MiddleFlexDisplayed)`
  ${MediaQueries("laptop")`
  margin-top: 504px;
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

export const SectionHeader = styled.div`
  position: relative;
  ${MediaQueries("laptop")`
  font-size: var(--font-size-lg);

  `}
  ${MediaQueries("tablet")`
  right:76px;
  `};

  ${MediaQueries("mobileL")`
  top:46px;
  right:103px;
  `};

  ${MediaQueries("mobileM")`
  font-size: var(--font-size);
  `}// ${MediaQueries("mobileSM")`
  // font-size: var(--font-size);
  // `}
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
  width:100%;
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
  width: 303px;;
  `}
  ${MediaQueries("mobileM")`
  width:304px;
  `}
`;

export const ParagraphSpan = styled.span`
  color: var(--form-label-color);
  padding: 0 0 0 3px;
`;

export const Button = styled.button`
  background: ${(props) =>
    props.primary
      ? "var( --gradient-primary)"
      : "none" || props.secondary
      ? "none"
      : "var(--secondary-color)" || props.tertiary
      ? "none"
      : "var(--secondary-color)"};
  color: ${(props) =>
    props.primary
      ? "var(--white-color)"
      : "var(--secondary-color)" || props.secondary
      ? "var(--white-color)"
      : "var(--secondary-color)" || props.tertiary
      ? "var(--secondary-color)"
      : "var(--secondary-color)"}}
  font-size: var(--font-size-sm);
  border:${(props) =>
    props.primary
      ? "2px solid var(--gradient-primary)"
      : " none" || props.secondary
      ? "2px solid var(--primary-color)"
      : "none" || props.tertiary
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
        ? "none"
        : "none"};
      border: ${(props) =>
        props.primary
          ? " 2px solid var(--gradient-hover)"
          : "none" || props.secondary
          ? "2px solid var(--border-color-dark)"
          : "none"}   
  }

  ${MediaQueries("laptop")`
  padding: 7px 0px 6px 7px;
  `}

`;

export const DropdownButton = styled(Button)`
  border: none;
  &:hover {
    border: none;
  }
`;

export const GridTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: ${(props) => props.theme.gridTempRow};
  width: ${(props) => props.theme.width100};
  padding: 25px 0 0 0;
  grid-gap: 5px;

  ${MediaQueries("laptop")`
  grid-template-columns: repeat(1, 1fr);
  `}
  ${MediaQueries("mobileL")`
   padding: 5px 0 0 0;
  `}
`;

export const CardGridTwo = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-column-gap: 20px;
  width: ${(props) => props.theme.width100};
  ${MediaQueries("laptop")`
  grid-template-columns: repeat(1, minmax(0, 1fr));
  `}
  ${MediaQueries("mobileL")`
   padding: 5px 0 0 0;
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
  padding: 0px;

  ${MediaQueries("laptop")`
margin-left:185px;
  `}

  ${MediaQueries("tablet")`
  margin-left:162px;
  `}
  
  ${MediaQueries("mobileL")`
  margin-left:33px;
  `}

  ${MediaQueries("mobileM")`
  grid-template-rows: 535px;
  margin-left:21px;
  `}
`;

export const VowSectionSpan = styled.span`
  font-size: var(--font-size-xlg);

  ${MediaQueries("tablet")`
  font-size: 40px;
  `}
  ${MediaQueries("mobileL")`
  font-size: 29px;
  `}
`;

export const VowHeader = styled(Header)`
  ${MediaQueries("tablet")`
  bottom:332px;
`}

  ${MediaQueries("mobileL")`
font-size: var(--font-size);
bottom:405px;
`} 

  ${MediaQueries("mobileM")`
font-size: var(--font-size);
`}
`;

export const VowSectionImage = styled.img`
  position: relative;
  bottom: ${(props) => props.theme.bottom};
  width: 450px;

  ${MediaQueries("laptop")`
  display: flex;
    justify-content: center;
    align-self: center;
  `};

  ${MediaQueries("mobileL")`
  width:  350px;
  margin-top:150px
  `};
  ${MediaQueries("mobileM")`
  width:  278px;
  `}
`;

export const VowSectionImageTwo = styled(VowSectionImage)`
  ${MediaQueries("tablet")`
  bottom:450px;
`};

  ${MediaQueries("mobileL")`
  width:  350px;
 margin-top:0
  `};
  ${MediaQueries("mobileM")`
  width:  278px;
  bottom:610px;
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
margin-left:185px;
grid-template-rows: 350px;
  `}

  ${MediaQueries("tablet")`
  margin-left:162px;
  `}
  
  ${MediaQueries("mobileL")`
  margin-left:113px;
  grid-template-rows: 250px;
  `}

  ${MediaQueries("mobileM")`
  grid-template-rows: 535px;
  margin-left:85px;
  `}
`;
export const GallerySectionImage = styled(VowSectionImage)`
  left: 50px;
  top: 25px;
  border-radius: 10px;
  width: 400px;
  ${MediaQueries("laptop")`
  top:-37px;
  left:0;
  `};
  ${MediaQueries("mobileL")`
  width:352px;
  top: -99px;
  left: -75px;

  `};
  ${MediaQueries("mobileM")`
  width:300px;
  top: -386px;
  left: -60px;
  `};
`;

export const GalleryHeader = styled(Header)`
  ${MediaQueries("laptop")`
font-size: var(--font-size);
`};
`;

export const GallerySectionHeader = styled(SectionHeader)`
  ${MediaQueries("mobileM")`
top: 46px;
right: 90px;
`};
`;

// WeddingLocations

export const WeddingMotion = styled(motion.div)``;

export const WeddingLocationGrid = styled(VowsSectionGrid)`
  grid-template-rows: 680px;
  ${MediaQueries("laptop")`
  grid-template-rows: 450px;
  `}
`;

export const WeddingLocationDescription = styled.div`
  ${MediaQueries("mobileL")`
  position: relative;
  left: 10px;
`}
  ${MediaQueries("mobileM")`
width:317px;
left: -18px;
`}
`;

export const WeddingSectionImage = styled(VowSectionImage)`
  ${MediaQueries("laptop")`
width:450px;
`}
  ${MediaQueries("mobileL")`
width:352px;
margin-right:3px;
`} 
${MediaQueries("mobileM")`
width:300px;
`}
`;

// Home protected

export const CardSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-self: center;
`;

export const CardImage = styled.img`
  border-radius: 5px 5px 0 0;
  width: 100%;
  object-fit: cover;
  height: 350px;
`;

export const CardUserLink = styled.a`
  position: relative;
  bottom: ${(props) => props.theme.bottom};
  align-self: center;
  justify-content: center;
  display: flex;
  color: ${(props) => props.theme.color};
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
export const FormImageInput = styled(FormInput)`
  margin-top: ${(props) => props.theme.marginTop};
  display: ${(props) => props.theme.display};
`;

export const FormImagePreview = styled.img`
  width: 300px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-self: center;
  padding: 10px 0;
  // to contain the image with height of 400px
  object-fit: contain;
`;

export const FormImageBackground = styled.div`
  border: 1px solid var(--secondary-color);
  border-radius: 5px;
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
  width: ${(props) => props.theme.buttonWidth};
  height: 40px;
`;
export const FormButtonUpload = styled(FormButton)`
background: ${(props) => (props.tertiary ? "none" : "var(--secondary-color)")};
color: ${(props) =>
  props.tertiary ? "var(--secondary-color)" : "var(--secondary-color)"}}
font-size: var(--font-size-sm);
border:${(props) =>
  props.tertiary ? "2px solid var(--primary-color)" : "none"};
:hover{
  background: ${(props) => (props.tertiary ? "none" : "none")};
    border: ${(props) =>
      props.tertiary ? "2px solid var(--border-color-dark)" : "none"}   
}

`;

export const FormTextArea = styled.textarea`
  padding: 10px;
  max-width: 100%;
  line-height: 1.5;
  margin-top: ${(props) => props.theme.marginTop};
  border-radius: 5px;
  border: 1px solid var(--secondary-color);
  box-shadow: 1px 1px 1px #999;
  // disable resizeable
  resize: none;
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
  position: fixed;
  width: 100%;
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
  border-radius: 5px;
  width: 146px;
  height: 29px;
  color: var(--white-color);
  background: none;
  cursor: pointer;
  box-shadow: var(--box-shadow-light);
  // &:hover {
  //   background: var(--white-color);
  //   color: var(--primary-color);
  // }
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
  background-color: var(--white-color);
  min-width: 180px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0, 2);
  padding: 12px 16px;
  z-index: 1;
  border-radius: 2px;
  border: 1px solid var(--white-color);
`;
export const HRLine = styled.hr`
  border: 1px solid ${(props) => props.theme.headerMain};
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
