import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import TopBar from "./components/TopBar/TopBar";

const App = () => {
  
  return (
    <BrowserRouter>
    <TopBar/>
      <Switch>
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/" component={Home} exact />
        {/* <Route path="/cart" component={Contact} exact />
        <Route path="/contact" component={Contact} exact /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
