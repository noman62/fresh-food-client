import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import TopBar from "./components/TopBar/TopBar";

const App = () => {
  
  return (
    <BrowserRouter>
    <TopBar/>
      <Switch>
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
