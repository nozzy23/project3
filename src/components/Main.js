import React from 'react';
import Navbar from './NavbarHeader';
import Banner from "./Banner";
import Buttons from './Buttons';
import Table from './Parked'

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
