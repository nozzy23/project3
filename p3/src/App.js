import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Landingpage from "./pages/Landingpage.js";
import Dashboardpage from "./pages/Dashboardpage.js";
import Registerpage from "./pages/Registerpage.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Route exact path="/" component={Landingpage}/>
        <Route exact path="/dashboard" component={Dashboardpage}/>
        <Route exact path="/register" component={Registerpage}/>
        </Router>
      </header>
    </div>
  );
}

export default App;
