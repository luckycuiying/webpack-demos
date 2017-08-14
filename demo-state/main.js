// document.write('<h1>Hello World111</h1>');
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
class DateN extends React.Component{
    componentWillReceiveProps(newProps){
        console.log('nnnwill receive ')
    }
    shouldComponentUpdate(){
        console.log('nnnshould update');
        return true;
    }
    componentWillUpdate(){
        console.log('nnnwill update')
    }
    render(){
     console.log('nnnndateM changed')
     // 获取父元素里面的属性名 dateshijian
     return <h2 >It is {this.props.date}.</h2>   
    }
    componentDidUpdate(){
        console.log('nnndidUpdate')
    }


}
class DateM extends React.Component{
    // componentWillReceiveProps(newProps){
    //     console.log('will receive ')
    // }
    // shouldComponentUpdate(){
    //     console.log('should update');
    //     return true;
    // }
    // componentWillUpdate(){
    //     console.log('will update')
    // }
    render(){
     console.log('dateM changed')
     return <h2 >It is {this.props.date.toLocaleTimeString()}.</h2>   
    }
    // componentDidUpdate(){
    //     console.log('didUpdate')
    // }


}

// 没有定时器只能获取一次时间，没能改变
class Clock extends React.Component{
    constructor(props) {
       super(props);
       this.state = {date: new Date(),i:0};
    }
    componentDidMount(){
        this.timerID = setInterval(
            ()=>this.tick(),
            3000
        );
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick (){
        console.log('start tick')
        // 只是赋值没有调用this.setState()的方法
        // this.state.date = new Date();
        // 赋值并调用this.setState()
        this.setState({
            date: new Date()
        })
    }

    shouldComponentUpdate(){
        // console.log('should update');
        return true;
    }
    componentWillUpdate(){
        // console.log('will update')
    }
    render (){
        return <div>
            <h1>Hello, world!</h1>
            <DateN date={this.state.i} />
        </div>
    }
    componentDidUpdate(){
        // console.log('didUpdate')
    }
}
ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );
//为一个类添加局部状态

