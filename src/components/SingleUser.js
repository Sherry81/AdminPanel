import React, { Component } from 'react';
import Axios from 'axios';
import NavigationBar from './Navbar/NavigationBar';


class SingleUser extends Component {

  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      singleUser: {}
    }
  }
  getSingleUser(){
    Axios.get('https://jsonplaceholder.typicode.com/users/'+this.props.match.params.id)
    .then(json => {
      this.setState({singleUser: json.data})
    })
    .catch(err => console.log(err))
  }

  componentDidMount(){
    this.getSingleUser();
  }
  render(){
    return (
      <div>
        <NavigationBar/>
        {!this.state.singleUser.name ? <div style={{'textAlign': 'center'}}>Loading...</div> :
         <h3>{this.state.singleUser.name}'s profile</h3>
        }
      </div>
    );
    }
  }     


export default SingleUser;
