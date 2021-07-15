import { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  AppWrapper,
  AppContent,
  FadingBackground,
} from "./styled-components/styled";
import { GlobalStyles } from "./styled-components/globalStyled";
import { Page } from "./components/pageTitle";
import { ModalProvider } from "styled-react-modal";
import Home from "./pages/cover/Home";
import Activate from "./pages/auth/AccountActivation";
import Test from "./pages/protected/Test";
import ResetPassword from "./pages/ForgotPassword/ResetPassword";
import Navbar from "./utility/Navbar/Navbar";
import Footer from "./utility/Footer/Footer";
import { PrivateRoute } from "./components/auth/PrivateRoute";
import "./account.css";
import { useSelector } from "react-redux";

function App() {
  const { auth } = useSelector((state) => ({ ...state }));

  return (
    <>
      <GlobalStyles />
      <Router>
        <AppWrapper>
          <AppContent>
            <Switch>
              {!auth._id && !auth.email && (
                <>
                  <Route
                    exact
                    path='/'
                    render={(props) => (
                      <ModalProvider backgroundComponent={FadingBackground}>
                        <Page title='Knewlys | Newlyweds Photos Gallery & Inspirational Weddings'>
                          <Home {...props} />
                        </Page>
                      </ModalProvider>
                    )}
                  />
                  <Fragment>
                    <Route
                      exact
                      path='/auth/activate/:token'
                      render={(props) => (
                        <Page title='Activate Your Account'>
                          <Activate {...props} />
                        </Page>
                      )}
                    />
                    <Route
                      exact
                      path='/auth/resetPassword/:token'
                      render={(props) => (
                        <Page title='Reset Your Password'>
                          <ResetPassword {...props} />
                        </Page>
                      )}
                    />
                  </Fragment>
                </>
              )}
              {auth._id && auth.email && (
                <Fragment>
                  <Navbar />
                  <PrivateRoute
                    exact
                    path='/'
                    render={(props) => (
                      <Page title='Test Auth'>
                        <Test {...props} />
                      </Page>
                    )}
                  />
                </Fragment>
              )}
            </Switch>
          </AppContent>
          {/* show footer content iff user is authenticated */}
          {/* {auth._id && auth.email && <Footer />} */}
          <Footer />
        </AppWrapper>
      </Router>
    </>
  );
}

export default App;
