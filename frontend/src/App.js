import React from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Schedule from './components/Schedule.js';
import Meals from './components/Meals.js';

import Rooms from './components/Rooms';
import Image from './components/LogoHeader'


import NavBar from './components/Navbar.js'


import ShoppingList from './components/ShoppingList';


function Header() {
  return (
    <div >
      <Image />
      
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
    
     
    </div>
  )
}




export default function App() {
  
  return (
    <div>

      <Header />
      
   
    
      <ShoppingList />
      <br />
      <br />
     
      
     
      <Schedule />
      <br />
      <br />
     
    
      <Meals />
      <br />
      <br />
     
      
      <Rooms />
     
    </div>
 

    
    
  );
}






