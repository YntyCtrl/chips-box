import Layout from "./components/Layout/Layout";
import CipsBox from "./components/CipsBox/CipsBox";
import Checkout from "./components/Checkout/Checkout";

import Orders from "./components/Orders/Orders";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { restore } from "./store/actions/auth";
import "./App.css";
import { Redirect, Route, Switch } from "react-router";

import Logout from "./components/Logout/Logout";
import Auth from "./components/Auth/Auth";

const App = () => {

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.token !== null);

  useEffect(() => restore(dispatch), [dispatch]);
   let routesOutput = (
     <Switch>
       <Route path="/" component={CipsBox} exact />
       <Route path="/auth" component={Auth} />
       <Redirect to="/" />
     </Switch>
   );
   if (isAuthenticated) {
     routesOutput = (
       <Switch>
         <Route path="/" component={CipsBox} exact />
         <Route path="/checkout" component={Checkout} />
         <Route path="/orders" component={Orders} />
         <Route path="/auth" component={Auth} />
         <Route path="/logout" component={Logout} />
         <Redirect to="/" />
       </Switch>
     );
   }


  return (
    <div className="App">
      <Layout>{routesOutput}</Layout>
    </div>
  );
};

export default App;
