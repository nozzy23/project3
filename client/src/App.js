import React from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Landingpage from "./pages/Landingpage/Landingpage.js";
import Dashboardpage from "./pages/Dashboard/Dashboardpage.js";
import Registerpage from "./pages/Registerpage/Registerpage.js";
import 'bootstrap/dist/css/bootstrap.min.css';
 import 'bootstrap/dist/js/bootstrap.bundle';
 

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