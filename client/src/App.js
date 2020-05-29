import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css';
import Navbar from './components/NavbarHeader';
import Banner from "./components/Banner";
import Buttons from './components/Buttons';
import Table from './components/Parked'


function App() {

    return (
     
        <div className="container">
        <Navbar/>
       <br></br>
        <Banner/>
        <br></br>
        <Buttons/>
        <br></br>
        <Table/>
        </div>

    );
  }


export default App;
