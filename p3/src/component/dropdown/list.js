import React from 'react';
import "./style.css";

function Favitems(props) {
    return <li>{props.children} <button>Delete</button></li>;
}

class Favlist extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentList:"",
            list:[]
        }
    }

    handleInputChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    addFavorite=()=>{
        const currentList = this.state.list;
        currentList.push(this.state.currentList);
        this.setState({
            task:currentList
        })
    }

    render() {
        return <div>
        <h1>Current favorites</h1>
        <input name="Favlist" onChange={this.handleInputChange} value={this.state.currentTask} type="text" /> <button onClick={this.addTask}>Add friend</button>
        <ul>
            {this.state.list.map((list,index)=><Favitems key={`List-${index}`}>{list}</Favitems>)}
        </ul>
        </div>;
    }
}

export default Favlist;