// import route and our components
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Stock from "./pages/Stock"
import Dashboard from "./pages/Dashboard"
import Nav from "./components/Nav"

function App() {
  // We will use the Route component to specify each route
  return (
    <div className="App">
      <Nav/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/dashboard">
            <Dashboard/>
          </Route>
          <Route path="/stock/:symbol" render={(routerProps) => <Stock {...routerProps} />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;