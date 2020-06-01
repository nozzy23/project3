import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import Banner from "../../component/Banner/Banner";
import Buttons from '../../component/Buttons/Buttons';
import Table from '../../component/Parked/Parked';
import '../../pages/Dashboard/Dash.css';

function Main (){
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

export default Main;
