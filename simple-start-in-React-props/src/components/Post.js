import React , { Component } from 'react'

// const Post =(props)=>{
// return (
//     <div>
//         <h1> title : {props.title}</h1>
//         <p>{props.content}</p>
//     </div>
// );
// }

// or

class Post extends React.Component {
render(){
return(
     <div>
           <h1> title : {this.props.title}</h1>
           <h2>{this.props.content}</h2>
            <p>{this.props.children}</p>
     </div>
);
}
}

export default Post;