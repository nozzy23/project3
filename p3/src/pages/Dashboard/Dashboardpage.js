import React, { Component } from 'react';
// import Title from "../component/header/Header";
// import Favlist from "../component/dropdown/list.js";
import Banner from "../../component/Banner/Banner.js";
import Buttons from "../../component/Buttons/Buttons.js";
import Navbar from "../../component/Navbar/Navbar.js";
import Table from "../../component/Parked/Parked.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'
import './Dash.css';





function Dashboardpage(){
    return(
     
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
};


export default Dashboardpage;