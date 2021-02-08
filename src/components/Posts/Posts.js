import React, { Component } from 'react'
import {connect} from "react-redux"
import {fetchPosts} from "../../store/actions/postsActions"
import {fetchUsers} from "../../store/actions/usersActions"
import Spinner from "../Spinner/Spinner"
import  Post from  "../Post/Post"

export class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        };
      }
      
   componentDidMount() { 
      this.props.fetchPosts();
      this.props.fetchUsers();
   }

    render() {  
        const {posts,users} = this.props;

        if(!posts||!users){
            return <Spinner/>
        }
     
        return (
            <div>
               {posts.map(post=> {
                   return <Post key = {post.body} post={post.body} userId={post.userId} users={this.props.users}/>
               })}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.postsReducer.posts,
    users:state.usersReducer.users
})

export default connect(mapStateToProps, {fetchPosts,fetchUsers})(Posts)
