import React, { Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import Image from '../Components/UNO1.png';
//Create Card2 Component
class Card2 extends React.Component {
  constructor() {
    super();
      this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
//function to restart or quit game 
 end = () => {
    var ab = prompt("1.Restart \n2.Quit");
    if(ab == 1){
      window.location.reload()
    }
    else if(ab ==2){
      window.location.href = "http://localhost:3000/";
    }

  }


  handleClick(e) {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    setTimeout(this.end, 500)
  }
 //render the component
  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div key="front" className="b">
          <img src={Image} onClick={this.handleClick}/>
        </div>
 
        <div key="back" className="b">
          {this.props.text}
        </div>
      </ReactCardFlip>
    )
  }
}
//export Card2 function
export default Card2;