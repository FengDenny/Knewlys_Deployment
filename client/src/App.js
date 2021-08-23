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
import HomeProtected from "./pages/protected/HomeProtected";
import ResetPassword from "./pages/ForgotPassword/ResetPassword";
import Navbar from "./utility/Navbar/Navbar";
import Footer from "./utility/Footer/Footer";
import { PrivateRoute } from "./components/auth/PrivateRoute";
import ProfileTab from "./components/tabs/ProfileTab";
import "./account.css";
import { useSelector } from "react-redux";

function App() {
  const { auth, footer } = useSelector((state) => ({ ...state }));

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
                  <ModalProvider backgroundComponent={FadingBackground}>
                    <Navbar />
                  </ModalProvider>
                  <PrivateRoute
                    exact
                    path='/'
                    render={(props) => (
                      <ModalProvider backgroundComponent={FadingBackground}>
                        <Page title='Knewlys | Newlyweds Photos Gallery & Inspirational Weddings'>
                          <HomeProtected {...props} />
                        </Page>
                      </ModalProvider>
                    )}
                  />
                  <PrivateRoute
                    exact
                    path='/user/:userID'
                    render={(props) => (
                      <Page title={`${auth.email} profile`}>
                        <ProfileTab {...props} />
                      </Page>
                    )}
                  />
                </Fragment>
              )}
            </Switch>
          </AppContent>
          {/* show footer content iff user is authenticated */}
          {!auth._id && !auth.email && <Footer />}
          {/* if footer = false show footer else null*/}
          {!footer ? <Footer /> : null}
        </AppWrapper>
      </Router>
    </>
  );
}

export default App;
