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

const Store = React.lazy(() => import("./pages/storeList/Store"));
const Cups = React.lazy(() => import("./pages/cups/Cups"));
const Catalog = React.lazy(() => import("./pages/catalog/Catalog"));
const Details = React.lazy(() => import("./pages/details/Details"));
const Autorization = React.lazy(() =>
  import("./pages/autorization/Autorization")
);
const Account = React.lazy(() => import("./pages/aacount/Account"));

function App({ auth, setAuth, setUserName, setUserPhone }) {
  let [cupActive, setCupActive] = useState(true);

  function delayCup() {
    setTimeout(() => {
      setCupActive(false);
    }, 2000);
  }

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
