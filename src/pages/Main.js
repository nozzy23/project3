import React from 'react';
import Navbar from '../components/NavbarHeader';
import Banner from "../components/Banner";
import Buttons from '../components/Buttons';
import Table from '../components/Parked'

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
