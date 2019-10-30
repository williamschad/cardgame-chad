import React from 'react';
import Card1 from '../Components/Card1';
import Card2 from '../Components/Card2';
import Card3 from '../Components/Card3';
import ReactCardFlip from 'react-card-flip';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Create array to randomize text
var myCardText = ["YOU WIN!","YOU LOSE!","BETTER LUCK NEXT TIME!","TRY AGAIN!","SO CLOSE!"]
var randomValue = myCardText[Math.floor(myCardText.length * Math.random())];
//The Card Component
const Win = () => {
  return(
    <div>
    <br/>
    <h1></h1>
    <h1>PICK A CARD TO WIN!!</h1>
    <br/>
<Container fluid="false">
  <Row>
    <Col><Card1 text={randomValue}/></Col>
    <Col><Card2 text={randomValue}/></Col>
    <Col><Card3 text={randomValue}/></Col>
  </Row>
</Container>
    </div>
    );
  };
//exports the Win function
export default Win;