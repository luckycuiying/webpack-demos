import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            success : false
        }
    }
    render(){
        console.log('render header')
        return <div>header {this.props.title}</div>;
    }
}
class MainBody extends Component{
    render(){
        return <div>MainBody</div>;
    }
}

class Footer extends Component{
    render(){
        return <div>Footer</div>;
    }
}
class Demo extends Component{
    constructor(props){
        super(props);
        this.state = {
            success : false
        }
    }
    render(){
        return (
            <div className="DemoPage">
                <Header title={'首页'} />
                <MainBody />
                <Footer />
            </div>

        )
    }
}
ReactDOM.render(
    <Demo />,
    document.querySelector('#wrapper')
    );