// document.write('<h1>Hello World111</h1>');
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// // 传统的事件绑定
// <button onclick = "activateLasers()">
//     Activate Lasers
// </button>
// <button onClick = {activateLasers}>  
//   Activate Lasers
// </button>

class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn:true};
        this.handleClick =this.handleClick.bind(this);
    }
   handleClick(){
        this.setState(prevState =>({
            isToggleOn:!prevState.isToggleOn
        }));
   }
   render(){
    return(
            <button onClick ={this.handleClick}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
   }
}
ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
    )