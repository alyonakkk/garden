import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Store from "./pages/storeList/Store";
import Catalog from "./pages/catalog/Catalog";
import Details from "./pages/details/Details";
import isNull from "./helpers/isNull";
import ModalWindow from "./shared/modal/ModalWindow";
import { connect } from "react-redux";
import { TransitionGroup } from "react-transition-group";

function App({ response, activeModal }) {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/catalog">
            <Store />
          </Route>
          <Route exact path="/catalog/:slug">
            <Catalog />
          </Route>
          <Route exact path="/catalog/:slug/:item">
            <Details />
          </Route>
          <Redirect from="/" to="/catalog" />
        </Switch>
        {!isNull(response) && (
          <TransitionGroup>
            <ModalWindow response={response} activeModal={activeModal} />
          </TransitionGroup>
        )}
      </div>
    </Router>
  );
}

const mapStateToProps = ({ response, activeModal }) => {
  return {
    response,
    activeModal,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
