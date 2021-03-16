import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/home/home/Home";


function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/">
          <Home></Home>
        </Route>
        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
