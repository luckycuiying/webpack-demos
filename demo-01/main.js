// document.write('<h1>Hello World111</h1>');
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
function formatName(user){
    return user.firstName + 'lcy' + user.lastName;
}
function getGreeting(user){
    if(user){
        return <h1>Hello,{
            2+2
        }!</h1>
    }
    return <h1>hello,Stranger.</h1>
}
let user = {
    firstName : 'Harper',
    lastName : 'Perez2222'
};
let elememt = <div>{getGreeting(user)}</div>
let elememt2 = <div indxTable ={`0`}>aifjkvfj;lksfjs;</div>
// ReactDOM.render( elememt,document.getElementById('root') )
ReactDOM.render( elememt2,document.getElementById('root') )

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
      <p>{2+2}</p>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}
setInterval(tick, 1000);

