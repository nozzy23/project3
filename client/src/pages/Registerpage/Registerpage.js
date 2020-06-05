import React from "react";
import Navbar from '../../component/Navbar/Navbar';
import Banner from "../../component/Banner/Banner";
import Forms from "../../pages/Registerpage/Inputform";

function Registerpage(){
    return <div className="container">
    <Navbar/>
   <br></br>
    <Banner/>
    <br></br>
    <Forms/>
    <br></br>
    </div>
}


export default Registerpage;