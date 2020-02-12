import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';

import Image from 'react-bootstrap/Image'
import ShoppingImage from '../images/shop.gif'
import Container from 'react-bootstrap/Container'



function ShoppingList() {
    return (
        <Container id="list">
            
        
            
                
           
   
            <Row id="list">
                <Col>
                <Image src={ShoppingImage} />
                </Col>
               
                <Col>
                
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                            </InputGroup.Prepend>
                            <FormControl aria-label="Text input with checkbox" />
                        </InputGroup>
                    
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Enter Item"
                                aria-label="Shopping item input1"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Append>
                                <Button variant="outline-secondary">Save</Button>
                            </InputGroup.Append>
                        </InputGroup>
                                
                    
                </Col>
                
              
                
            </Row>
            
        </Container>
    );
}

export default ShoppingList;
