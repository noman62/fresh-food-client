import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import About from "./components/About/About";
import TopBar from "./components/TopBar/TopBar";

const App = () => {
  
  return (
    <BrowserRouter>
    <TopBar/>
      <Switch>
        <Route path="/about" component={About} exact />
    
      </Switch>
    </BrowserRouter>
  );
};

export default App;
