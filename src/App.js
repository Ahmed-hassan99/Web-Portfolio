import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Experience from "./components/Experience";
import SingleExperience from "./components/SingleExperience";
import Navbar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.badge.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={SingleExperience} path="/experience/:slug" />
        <Route component={Experience} path="/experience" />
        <Route component={Project} path="/project" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
