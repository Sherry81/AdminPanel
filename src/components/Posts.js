import React, {Component} from 'react';
import NavigationBar from './Navbar/NavigationBar';
import Axios from 'axios';
import '../Posts.css';
import Sidebar from './Navbar/Sidebar';
import Footer from './Footer';

class Posts extends Component{

    constructor(props){
        super(props)
        this.state = {
            userId: 1,
            post: []
        }
        this.getPosts = this.getPosts.bind(this);
        this.btnClick = this.btnClick.bind(this);
    }
    
    getPosts(){
        console.log('here: ',this.state.userId)
        this.setState({post: []})
        Axios.get('https://jsonplaceholder.typicode.com/posts?userId='+this.state.userId)
        .then(json =>{
            console.log(json)
            this.setState({post: json.data})
        })
        .catch(err => console.log('Error',err))
    }

    btnClick(e){
        console.log('page number: ',e.target.value)
        const userId = e.target.value;
        this.setState({userId: userId})
        console.log('user Id: ',this.state.userId)
        this.getPosts();
    }

    componentDidMount(){
        this.getPosts();
    }
    render(){
        let i = 0;
        return (
            <div className="postsComponent">
                <NavigationBar/>
                <Sidebar/>
                <div className="posts">
                {!this.state.post[0] ? <span className="loading">Loading...</span> : (
                this.state.post.map(post => {
                    return (
                      <div className="post">
                        <h5 className="postTitle">{post.id}. {post.title}</h5>
                        <p className="post-body">{post.body}</p>
                        <span className="postById">Post by User ID: {post.userId}</span>
                        <br></br>
                      </div>
                    )
                }))}
                {this.state.post[0] ? (
                <div>
                    <UserIdComponent name="1" onClick={this.btnClick}/>
                    <UserIdComponent name="2" onClick={this.btnClick}/>
                    <UserIdComponent name="3" onClick={this.btnClick}/>
                    <UserIdComponent name="4" onClick={this.btnClick}/>
                    <UserIdComponent name="5" onClick={this.btnClick}/>
                    <UserIdComponent name="6" onClick={this.btnClick}/>
                    <UserIdComponent name="7" onClick={this.btnClick}/>
                    <UserIdComponent name="8" onClick={this.btnClick}/>
                    <UserIdComponent name="9" onClick={this.btnClick}/>
                </div>) :null}
            </div>
            {this.state.post[0] ? <Footer/> : null}
            </div>
        ); 
    }   
}
    const UserIdComponent = (props) => {
        return (
            <button onClick={props.onClick} value={props.name}>{props.name}</button>
        )
    }


export default Posts;
