import React from 'react';
import GlobalContext,{initialState} from '../../component/context';
import Authorization from '../../component/Authorization';
import Home from '../../component/home';


const reducer=(state,action)=>{
    if(action.type==="signup"){
        const newState={
            ...state,
            usersList:[...state.usersList,action.payload],
            currentAccount:action.payload.username
        };
       
        
        return newState;
        }else if (action.type==="login"){
            const newState={
                ...state,
                currentAccount:action.payload.username
            };
            return newState;
        }
        return state;
    }
    


const LandingPage=()=>{
    
    
    const savedState=localStorage.getItem("state");

    const [globalState,dispatch]=React.useReducer(reducer,savedState?JSON.parse(savedState):initialState);
    
    const displaySection=()=>{
        if (!globalState.currentAccount){
        return <Authorization />
    }
    else{
        return <Home />
        }
    }

    return <GlobalContext.Provider value={{globalState,dispatch}}>
         <div className="row" style={{paddingTop:"50px"}}>
             <div className="col-6 offset-3">
           {displaySection()}
             </div>
         </div>
    </GlobalContext.Provider>
    
    

}



export default LandingPage;