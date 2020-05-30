import React from "react";
import Title from "../component/header/Header";
import Favlist from "../component/dropdown/list.js";
import Banner from "../component/Banner/Banner.js";
import Buttons from "../component/Buttons/Buttons.js";
import Navbar from "../component/Navbar/Navbar.js";
import Table from "../component/Parked/Parked.js";

function Dashboardpage(){
    return<div> <h2>This is where we are going to display our dashboard components</h2>
    {/* <Title/>
    <Favlist/> */}
    <Banner/>
    <Buttons/>
    <Navbar/>
    <Table/>
    </div>
};


export default Dashboardpage;