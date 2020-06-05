import React from 'react';
import GlobalContext from'../component/context'; 


const Home=()=>{
    const context=React.useContext(GlobalContext);
    console.log(context.globalState.curentAccount)   
    return <div>Welcome {context.globalState.curentAccount}made it happen</div>
}





export default Home;