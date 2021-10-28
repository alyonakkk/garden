import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Store from "./pages/storeList/Store";
import Payment from "./pages/payment/Payment";
import Catalog from "./pages/catalog/Catalog";
import Slider from "./pages/catalog/components/slider/Slider";
import Details from "./pages/details/Details";

function App() {
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
          <Route exact path="/payment">
            <Payment />
          </Route>
          <Redirect from="/" to="/catalog" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
