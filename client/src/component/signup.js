import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import GlobalContext from './context';

class Signup extends Component{

    state={
        username:"",
        unit:"",
        phonenumber:"",
        email:"",
        password:"",
    };

    handleInputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
            
        })
}

signup=()=>{
    this.context.dispatch({
        type:"signup",
        payload:{
            username:this.state.username,
            password:this.state.password,
            phonenumber:this.state.phonenumber,
            email:this.state.email,
            unit:this.state.unit
        }
    })
}



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
                <input value={this.state.phonenumber} onChange={this.handleInputChange} type="phonenumber" className="form-control" name="phonenumber" placeholder="Enter your number"/>
            </div>
            <div className="form-group">
                <input value={this.state.email} onChange={this.handleInputChange} type="email" className="form-control" name="email" placeholder="Enter your emial"/>
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