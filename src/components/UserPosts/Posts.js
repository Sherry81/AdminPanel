import React, {Component} from 'react';
import NavigationBar from '../Navbar/NavigationBar';
import Axios from 'axios';
import './Posts.css';
import Sidebar from '../Navbar/Sidebar';
import Footer from '../Footer/Footer';

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
        this.setState({
            userId
        },
        () => {
            this.getPosts();
        })
    }

    componentDidMount(){
        this.getPosts();
    }
    render(){
        let i = 0;
        let postsPerPage = [1,2,3,4,5,6,7,8,9,10];
        return (
            <div className="postsComponent">
                <NavigationBar/>
                <Sidebar/>
                <div className="posts">
                {!this.state.post[0] ? null : <h1 className="postsHead">POSTS</h1>}    
                {!this.state.post[0] ? 
                (<div className="loading">
                    <span>Loading...</span>
                </div>) : (
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
                    <ul className="pagination">
                    {postsPerPage.map(num => {
                        return <UserIdComponent name={num} onClick={this.btnClick}/>
                    })}
                    </ul>
                </div>) :null}
            </div>
            {this.state.post[0] ? <Footer/> : null}
            </div>
        ); 
    }   
}
    const UserIdComponent = (props) => {
        return (
            <li className="page-item"><button className="page-link paginate" onClick={props.onClick} value={props.name}>{props.name}</button></li> 
        )
    }


export default Posts;
