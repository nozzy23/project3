import React from 'react';
import "./style.css";
import Favdrivers from './favList'

//attempting to add into my list
const Favlist=()=>{
    const [value,setValue] = React.useState('');
    const [list,setList] = React.useState(Favdrivers);
    
    const handleInputChange =(e) =>{
        setValue(e.target.value)};

    const handleInputsubmit = (e)=>{
        if(value){
            setList(list.concat(value));
        }
        setValue('');
        e.preventDefault();
    };

    return<div>
<ul>
    {Favdrivers.map(item=>(
        <li key={item.id}>
        <div>{item.id}</div>
        <div>{item.name}</div>
        <div>{item.unit}</div>
        </li>
    ))};
</ul>
<form onSubmit={handleInputsubmit}>
    <input type="text" value={value} onChange={handleInputChange}/>
    <button type="submit">Add Driver</button>
</form>
</div>
};

//Able to display properties from Object.
// const Favlist=()=>{
// return<ul>
//     {Favdrivers.map(item=>(
//         <li key={item.id}>
//         <div>{item.id}</div>
//         <div>{item.name}</div>
//         <div>{item.unit}</div>
//         </li>
//     ))};
// </ul>
// };

// function Favitems(props) {
//     return <li>{props.children} <button>Delete</button></li>;
// }

// class Favlist extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             currentList:"",
//             list:[]
//         }
//     }

//     handleInputChange=(e)=>{
//         this.setState({
//             [e.target.name]:e.target.value
//         })
//     }

//     addFavorite=()=>{
//         const currentList = this.state.list;
//         currentList.push(this.state.currentList);
//         this.setState({
//             task:currentList
//         })
//     }

//     render() {
//         return <div>
//         <h1>Current favorites</h1>
//         <input name="Favlist" onChange={this.handleInputChange} value={this.state.currentTask} type="text" /> <button onClick={this.addTask}>Add friend</button>
//         <ul>
//             {this.state.list.map((list,index)=><Favitems key={`List-${index}`}>{list}</Favitems>)}
//         </ul>
//         </div>;
//     }
// }

export default Favlist;