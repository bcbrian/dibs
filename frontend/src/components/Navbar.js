import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import Navbar from 'react-bootstrap/Navbar';


import Button from 'react-bootstrap/Button';



function Menu() {
  return (
    
    
      
    
    <Navbar fixed="top" >
        
          
            


    
      <Nav className="sticky-nav" >
        <Dropdown>
          <Dropdown.Toggle variant="warning" id="dropdown-basic">
            Trip Selector
        </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Trip 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Trip 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Trip 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        
        <Button variant="secondary" href="#list">Shopping List</Button>
        
        <Button variant="primary" href="#schedule">Activity Schedule</Button>
        <Button variant="success" href="#meals">Meal Plan</Button>
        <Button variant="danger" href="#rooms">Bedrooms</Button>
      </Nav>
          
    </Navbar>
     
      

     
 
  
     
      
    
  );
}
export default Menu;

