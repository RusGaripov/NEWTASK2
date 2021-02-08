import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
 

export class Post extends Component {
    render() {
        const {post,userId,users}=this.props

        if(userId&&users){
        return (

            <div className="card">
               <div className="card-body">
                    <p>{post}</p>
                    <p>Имя: {users[userId-1].name}</p>
                    <p>E-mail: {users[userId-1].email}</p>
                    <p>Никнейм: {users[userId-1].username}</p>
                  
                  
                </div>
            </div>
        )
      }
    } 
}

export default Post
