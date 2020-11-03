import { useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation,
} from "react-router-dom";

import Home from "./pages/Homepage";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  useEffect(() => {
    // console.log("this is an API call");
    axios.get("/api/config").then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
