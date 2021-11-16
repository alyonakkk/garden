import React, { useEffect, useState } from "react";
import { Suspense } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Account from "./pages/aacount/Account";
import { setAuth, setUserName, setUserPhone } from "./store/actions";

const Store = React.lazy(() => import("./pages/storeList/Store"));
const Catalog = React.lazy(() => import("./pages/catalog/Catalog"));
const Details = React.lazy(() => import("./pages/details/Details"));
const Autorization = React.lazy(() =>
  import("./pages/autorization/Autorization")
);

function App({ auth, setAuth, setUserName, setUserPhone }) {
  useEffect(() => {
    if (localStorage.getItem("name")) {
      setAuth(true);
      setUserName(localStorage.getItem("name"));
      setUserPhone(localStorage.getItem("phone"));
    }
  }, []);

  return (
    <Router>
      <div className="App">
        {auth === true ? (
          <Switch>
            <Route exact path="/catalog">
              <Suspense fallback={<div>Loading...</div>}>
                <Store />
              </Suspense>
            </Route>
            <Route exact path="/catalog/:slug">
              <Suspense fallback={<div>Loading...</div>}>
                <Catalog />
              </Suspense>
            </Route>
            <Route exact path="/catalog/:slug/:item">
              <Suspense fallback={<div>Loading...</div>}>
                <Details />
              </Suspense>
            </Route>
            <Route exact path="/account">
              <Account />
            </Route>
            <Redirect from="/" to="/catalog" />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/autorization">
              <Suspense fallback={<div>Loading...</div>}>
                <Autorization />
              </Suspense>
            </Route>
            <Redirect from="/" to="/autorization" />
          </Switch>
        )}
      </div>
    </Router>
  );
}

const mapStateToProps = ({ autorization }) => {
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
