import React, { useState, useEffect } from "react";
import {
  MiddleFlexDisplayed,
  Container,
  Header,
  theme,
  Tabs,
  TabDetail,
  Content,
} from "../../styled-components/globalStyled";
import { ThemeProvider } from "styled-components";
import { useDispatch } from "react-redux";
import { setFooter } from "../../redux/actions/footerAction";

function Tab({ title, tabOne, tabTwo, contentOne, contentTwo }) {
  // set active tabs
  const [active, setActive] = useState(0);
  const handleClick = (e) => {
    const indexValue = parseInt(e.target.id, 0);
    if (indexValue !== active) {
      setActive(indexValue);
    }
  };
  // set footer
  const [noFooter, setNoFooter] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setNoFooter(true);
    dispatch(setFooter(noFooter));
  }, []);

  return (
    <Container>
      <ThemeProvider theme={theme}>
        <MiddleFlexDisplayed
          theme={{
            flexDirection: "column",
            alignItems: "center",
            height100: "30vh",
          }}
        >
          <Header
            theme={{
              headerMain: "var(--secondary-color)",
              fontSizeXLG: "var(--font-size-lg)",
            }}
          >
            {title}
          </Header>
          <Tabs>
            <TabDetail onClick={handleClick} active={active === 0} id={0}>
              {tabOne}
            </TabDetail>
            <TabDetail onClick={handleClick} active={active === 1} id={1}>
              {tabTwo}
            </TabDetail>
            <>
              <Content active={active === 0}>{contentOne}</Content>
              <Content active={active === 1}>{contentTwo}</Content>
            </>
          </Tabs>
        </MiddleFlexDisplayed>
      </ThemeProvider>
    </Container>
  );
}
export default Tab;
