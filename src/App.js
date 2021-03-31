import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/contact/contact/Contact";
import Dashborad from "./components/dashborad/dashborad/Dashborad";
import Home from "./components/home/home/Home";
import Login from "./components/login/login/Login";
import NotFound from "./components/notfound/NotFound";
import Portfolio from "./components/portfolio/portfolio/Portfolio";
import Team from "./components/team/team/Team";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/portfolio">
            <Portfolio></Portfolio>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/ourteam">
            <Team></Team>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/dashborad">
            <Dashborad></Dashborad>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
