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
// 你必须谨慎对待 JSX 回调函数中的 this，类的方法默认是不会绑定this 的。
// 如果你忘记绑定 this.handleClick 并把它传入 onClick, 当你调用这个函数的时候 this 的值会是 undefined。
class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggleOn:true};
        console.log(this); //这时候的this 指的是 Toggle
        // 通过这行代码类似call， 的用法把 Toggle 绑定给handleClick（）
        this.handleClick =this.handleClick.bind(this);
    }
   handleClick(){
        this.setState(prevState =>({
            isToggleOn:!prevState.isToggleOn
        }));
        console.log(this)

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