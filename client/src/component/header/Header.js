import React from 'react';
import "./style.css";

class Title extends React.Component{
  constructor(props){
    super(props);
    this.state={
        name:""
    }
}
handleInputChange=(e)=>{
  this.setState({
      [e.target.name]:e.target.value
  })
}
  render() {
  return <div>
<div>
  <input className="form-Control" type="text" placeholder="user"></input>
  <h2>Hello</h2>
</div>

  </div>
  }
}


  
  export default Title;
  