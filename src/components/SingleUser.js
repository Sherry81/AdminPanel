import React, { Component } from 'react';
import Axios from 'axios';
import NavigationBar from './Navbar/NavigationBar';
import '../SingleUser.css'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faUser, faMapMarker, faHome } from '@fortawesome/free-solid-svg-icons'
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
        <div className="singleUser">
          {!this.state.singleUser.name ? <div style={{'textAlign': 'center'}}>Loading...</div> :
          <Card>
            <Card.Body>
            <Container className="container">
            <Row>
              <Col>
                <h1 style={{'margin': '0px'}}>{this.state.singleUser.name}</h1>
              </Col>
            </Row> 
            <Row style={{'marginBottom': '5px'}}>
              <Col>
                <FontAwesomeIcon style={{'color': 'grey'}} icon={faMapMarker}></FontAwesomeIcon>
                <span  className="address">{this.state.singleUser.address.city}</span>
                <span  className="address">{this.state.singleUser.address.street}</span>
                <span  className="address">{this.state.singleUser.address.suite}</span>
              </Col>
            </Row>
            <Row>
              <Col>
              <FontAwesomeIcon className="icon" icon={faUser}></FontAwesomeIcon>
              <span className="info">{this.state.singleUser.username}</span>
              </Col>
            </Row>
            <Row>
              <Col>
              <FontAwesomeIcon className="icon" icon={faEnvelope}></FontAwesomeIcon>
              <span className="info">{this.state.singleUser.email}</span>
              </Col>
            </Row>
            <Row>
              <Col>
              <FontAwesomeIcon className="icon" icon={faPhone}></FontAwesomeIcon>
              <span className="info">{this.state.singleUser.phone}</span>
              </Col>
            </Row>
            <Row>
              <Col>
              <FontAwesomeIcon className="icon" icon={faHome}></FontAwesomeIcon>
                <span className="info">{this.state.singleUser.company.name}</span>
              </Col>
            </Row>
          </Container>
            </Card.Body>
          </Card>
          
          }
        </div>
      </div>
    );}
}     
export default SingleUser;
