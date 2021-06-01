import logo from "./logo.svg";
import "./App.css";
import { HomePage } from "./Containers/Homepage";
import { UserPage } from "./Containers/UserPage";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/user/:userid" component={UserPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
