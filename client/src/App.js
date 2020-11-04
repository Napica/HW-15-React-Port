import { useEffect } from "react";
import axios from "axios";
// import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Homepage";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";

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
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
