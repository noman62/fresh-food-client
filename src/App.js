import { BrowserRouter, Switch, Route } from "react-router-dom";

import About from "./components/About/About";
import AdminScreen from "./components/AdminScreen/AdminScreen";
import CartScreen from "./components/CartScreen/CartScreen";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import OrderScreen from "./components/OrderScreen/OrderScreen";
import Register from "./components/Register/Register";
import TopBar from "./components/TopBar/TopBar";

const App = () => {
  return (
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route path="/admin" component={AdminScreen}  />
        <Route path="/orders" component={OrderScreen} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/about" component={About} exact />
        <Route path="/cart" component={CartScreen} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/" component={Home} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
