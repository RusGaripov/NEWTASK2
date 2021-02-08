import React, { Component } from 'react'
import {connect} from "react-redux"
import {addPost,fetchPosts} from "../../store/actions/postsActions"

export class AddPost extends Component {
    state={
        userId:1, //брать с сервера
        id:null,
        title:"",
        body:"",
    };

    componentDidMount() {
        this.props.fetchPosts();
        this.setState({
          id:this.props.posts.length+1
        })
    }

    onChange = e => {
      this.setState({ [e.target.name]:e.target.value})
    };

    onSubmit = e => {
        e.preventDefault();
        this.props.addPost(this.state,this.props.history)
    }
    render() {
        const {title,body}=this.state
      
        return (
            <form onSubmit={this.onSubmit}>
            <div className="form-group">
                <label htmlFor="title">Заголовок</label>
                <input
                type="text"
                value={title}
                onChange={this.onChange}
                name="title"
                className="form-control"
                />
            </div>

            <div className="form-group">
                <label htmlFor="title">Содержание</label>
                <input
                type="text"
                value={body}
                onChange={this.onChange}
                name="body"
                className="form-control"
                />
            </div>

            <button type="submit" className="btn btn-primary">
                Опубликовать
            </button>

            </form>
        )
    }
}


const mapStateToProps = state => ({
    posts: state.postsReducer.posts,
})

export default connect(mapStateToProps, {addPost,fetchPosts})(AddPost)
