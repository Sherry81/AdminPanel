import React from 'react'
import './Footer.css'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
return(
    <div className="footer">
        <Container>
            <Row>
                <Col className="copyright">
                    <p style={{'paddingTop': '0px'}}>&copy; 2020 Copyright: Proleadsoft</p>        
                </Col>
                <Col className="footPhone">
                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                    <span className="footInfo"> 0332-2079206</span>
                </Col>
            </Row>
        </Container>                        
    </div>
)
}

export default Footer;