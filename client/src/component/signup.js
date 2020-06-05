import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import GlobalContext from './context';
import axios from "axios";

class Signup extends Component{

    state={
        username:"",
        unit:"",
        phoneNumber:"",
        email:"",
        password:"",
    };

    handleInputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
}

signup=async ()=>{try{
   const response = await axios.post("/api/user/register",{
        username:this.state.username,
        password:this.state.password,
        phoneNumber:this.state.phoneNumber,
        email:this.state.email,
        unit:this.state.unit
    })
    this.context.dispatch({
        type:"signup",
        payload: response.data
    })
} catch(err){
    alert ("duplicate Account")
};
};

    render(){
        return <div className="card">
            <h1>Create an Account</h1>
            <div className="form-group">
                <input value={this.state.username} onChange={this.handleInputChange} type="text" className="form-control" name="username" placeholder="Enter your username"/>
            </div>
            <div className="form-group">
                <input value={this.state.password} onChange={this.handleInputChange} type="password" className="form-control" name="password" placeholder="Enter your password"/>
            </div>
            <div className="form-group">
                <input value={this.state.phoneNumber} onChange={this.handleInputChange} type="tel" className="form-control" name="phoneNumber" placeholder="Enter your number"/>
            </div>
            <div className="form-group">
                <input value={this.state.email} onChange={this.handleInputChange} type="email" className="form-control" name="email" placeholder="Enter your email"/>
            </div>
            <div className="form-group">
                <input value={this.state.unit} onChange={this.handleInputChange} type="unit" className="form-control" name="unit" placeholder="Enter your unit"/>
            </div>
            <button onClick={this.signup}className="btn btn-primary">Create Account</button>
            </div>
   
    }
}

Signup.contextType=GlobalContext;
export default Signup;