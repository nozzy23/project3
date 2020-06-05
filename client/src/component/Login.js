import React,{Component} from 'react';

import GlobalContext from './context';



class Login extends Component{

    state={
        username:"",
        password:"",
    };
    
    handleInputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }


login=()=>{
    const user=this.context.globalState.usersList.find(user=>user.username===this.state.username);
        if(user){
            if(user.password===this.state.password){
                this.context.dispatch({type:"longin",payload:user})
            }else{
                alert("Invalid Credentials!");
            }
            }else{
            alert("Invalid Credentials!");
        }
}





render(){
    return <div className="card">
    <h1>sign in </h1>
    <div className="form-group">
        <input value={this.state.username} onChange={this.handleInputChange} type="text" className="form-control" name="username" placeholder="Enter your username"/>
    </div>
    <div className="form-group">
        <input value={this.state.password} onChange={this.handleInputChange} type="password" className="form-control" name="password" placeholder="Enter your password"/>
    </div>
    <button onClick={this.login}className="btn btn-primary">Login</button>
    </div>
    }
}


Login.contextType=GlobalContext;
export default Login;