import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import Dropdown from './Components/Dropdown';
import Converter from './Components/Converter';
import Win from './Components/Win';
import './App.css';
import Card1 from './Components/Card1';
import ReactCardFlip from 'react-card-flip';
//Create App function
const App = () => {
  return(
    <div>
      <BrowserRouter>
        <div>
        <Route path="/" component={Dropdown}/>
        <Route path="/converter" component={Converter} />
        <Route path="/win" component={Win} />
        </div>
      </BrowserRouter>  
    </div>
    );
  };
export default App;