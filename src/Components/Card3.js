import React, { Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import Image from '../Components/UNO.jpg';
//Create Card3 Component
class Card3 extends React.Component {
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
//Render the component 
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
//export Card3 component
export default Card3;