import React from "react";

import Navbar from 'react-bootstrap/Navbar';

import LogoImage from '../images/logo.gif'

import Image from 'react-bootstrap/Image'

export default function LogoHeader() {
    return (
        
        <Navbar fixed="top"  >
            <Image src={LogoImage} />





        </Navbar>
        
     
    );
}