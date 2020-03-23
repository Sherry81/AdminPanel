import React, {Component} from 'react';
import NavigationBar from './Navbar/NavigationBar';
import Axios from 'axios';
import '../Posts.css'

class Posts extends Component{

    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
    }

    getPosts(){
        Axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(json =>
        this.setState({posts: json.data}))
        .catch(err => console.log(err))
    }

    componentDidMount(){
        this.getPosts();
    }

    render(){
        var i = 0;
        return (
            <div>
                <NavigationBar/>
                {!this.state.posts[0] ? <span className="loading">Loading...</span> : (
                this.state.posts.map(post => {
                    i++;
                    return (
                      <div className="post">
                      <h5><span>{i}. </span>{post.title}</h5>
                      <span className="postId">ID: {post.id}</span>
                      <p>{post.body}</p>
                      <br></br>
                      </div>
                    )
                }))
                }
            </div>
        );
    }
} 

export default Posts;
