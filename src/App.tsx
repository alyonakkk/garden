import React, { useEffect, useState } from "react";
import { Suspense } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { setAuth, setUserName, setUserPhone } from "./store/actions";
import Loader from "./shared/loader/Loader";
import { createGlobalStyle } from "styled-components";

const Store = React.lazy(() => import("./pages/storeList/Store"));
const Cups = React.lazy(() => import("./pages/cups/Cups"));
const Catalog = React.lazy(() => import("./pages/catalog/Catalog"));
const Details = React.lazy(() => import("./pages/details/Details"));
const Autorization = React.lazy(
  () => import("./pages/autorization/Autorization")
);
const Account = React.lazy(() => import("./pages/aacount/Account"));

interface IAppProps {
  auth: boolean;
  setAuth: (auth: boolean) => void;
  setUserName: (userName: string) => void;
  setUserPhone: (userPhone: string) => void;
}

const App: React.FC<IAppProps> = ({
  auth,
  setAuth,
  setUserName,
  setUserPhone,
}) => {
  const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;

  margin: 0;
  padding: 0;
}

body {
  min-width: 320px;

  font-family: "Comfortaa", cursive;

  background-color: #f3f4f0;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  font-family: "Comfortaa", cursive;

  cursor: pointer;
}

input::placeholder {
  font-family: "Comfortaa", cursive;
}

  `;
  const [cupActive, setCupActive] = useState<boolean>(true);

  function delayCup() {
    setTimeout(() => {
      setCupActive(false);
    }, 2000);
  }

  useEffect(() => {
    if (localStorage.getItem("name")) {
      setAuth(true);
      setUserName(localStorage.getItem("name") || "");
      setUserPhone(localStorage.getItem("phone") || "");
    }
  }, []);

  return (
    <>
      <GlobalStyle />
      <Router>
        <div className="App">
          {auth === true ? (
            <Switch>
              {delayCup()}
              <Route exact path="/catalog">
                <Suspense fallback={<Loader />}>
                  {cupActive ? <Cups /> : <Store />}
                </Suspense>
              </Route>
              <Route exact path="/catalog/:slug">
                <Suspense fallback={<Loader />}>
                  <Catalog />
                </Suspense>
              </Route>
              <Route exact path="/catalog/:slug/:item">
                <Suspense fallback={<Loader />}>
                  <Details />
                </Suspense>
              </Route>
              <Route exact path="/account">
                <Suspense fallback={<Loader />}>
                  <Account />
                </Suspense>
              </Route>
              <Redirect from="/" to="/catalog" />
            </Switch>
          ) : (
            <Switch>
              <Route exact path="/autorization">
                <Suspense fallback={<Loader />}>
                  <Autorization />
                </Suspense>
              </Route>
              <Redirect from="/" to="/autorization" />
            </Switch>
          )}
        </div>
      </Router>
    </>
  );
};

const mapStateToProps = ({ autorization }: any) => {
  return {
    auth: autorization.auth,
  };
};

const mapDispatchToProps = {
  setAuth,
  setUserName,
  setUserPhone,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
