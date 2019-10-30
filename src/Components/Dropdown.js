import React, { Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class MyDropdown extends Component {
	render(){
		return (
			<Dropdown>
			  <Dropdown.Toggle variant="success" id="dropdown-basic">
			    Dropdown Button
			  </Dropdown.Toggle>
			  <Dropdown.Menu>
			  	<Dropdown.Item><NavLink to="/">Home</NavLink></Dropdown.Item>
			    <Dropdown.Item><NavLink to="/converter">Converter</NavLink></Dropdown.Item>
			    <Dropdown.Item><NavLink to="/win">Win</NavLink></Dropdown.Item>
			  </Dropdown.Menu>
			</Dropdown>
			);
	};
};

export default MyDropdown;