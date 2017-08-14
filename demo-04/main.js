// document.write('<h1>Hello World111</h1>');
import React, {
    Component
} from 'react';
import ReactDOM from 'react-dom';

// 函数是定义组件 又叫做无状态组件，没有stata 用于比较简单的逻辑需求，性能比较好。
// function Welcome (props){
//   return <h1>Hello,Welcome {props.name}</h1>
// }
// let element = <Welcome name='lisi' />
// ReactDOM.render(
//   element,
//   document.getElementById('root') 
//   )
// Es6 定义组件
// class Welcome extends React.Component{
//   render(){
//     return <h1>hello,{this.props.name}</h1>;
//   }
// }
// class Comment extends React.Component{
//   render(){
//     return <div>
//       <Welcome name='zhangsan' />
//       <Welcome name='lisi' />
//       <Welcome name='wangwu' />
//       <Welcome name='zhaoliu' />
//     </div>
//   }
// }
class Comment extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : 'comment text'
        }
    }
    render(){
        return (<div className= "Comment">
                    <UserInfo commentText={this.state.text} user={this.props.author} />
                    <div className="Comment-text">
                        {this.state.text}
                    </div>
                    <div className="Comment-date">
                        {this.props.date}
                    </div>
                </div>)
    }
}
// //let element =  <Welcome name='zhangsan' />
// ReactDOM.render(
//   <App />,
//   document.getElementById('root') 
//   )
//   
// 原始组件
// function Comment(props) {
//     return ( 
//     <div className = "Comment">
//         <UserInfo user={props.author} />
//         <div className="Comment-text">
//             {props.text}
//         </div>
//         <div className="Comment-date">
//             {props.date}
//         </div>
//     </div>
//     )
// }
// 拆分组件
function Avatar(props){
    return (
        <img src={props.author1.avatarUrl} alt={props.author1.name} className='Avatar'/>
    )
}
function UserInfo(props){
    return(<div>
        <Avatar author1={props.user} />
        <div className="UserInfo-name">{props.user.name}&&{props.commentText}</div>
        </div>
        )

}
ReactDOM.render(
   <Comment author={{
        avatarUrl : 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=798904373,3569690651&fm=173&s=C86A9F551EE13615D30CCD250300E063&w=640&h=427&img.JPEG',
        name : 'xutao'
   }} date='2017-08-14'/>,
     document.getElementById('root') 
 )