import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import RoomsImage from '../images/beds.png';
import Button from 'react-bootstrap/Button';
import RoomsHeader from '../images/Rooms.gif';
import Image from 'react-bootstrap/Image';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';


export default function Meals() {
    return (
        <Container id="rooms">
            <Image src={RoomsHeader} />
            <Row>
                
                <Col>
                    <>
                        <Card text="white" style={{ width: '18rem' }}>

                            <Card.Img src={RoomsImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Room 1</Card.Title>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Call Dibs!"
                                        aria-label="Dibs 1"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="danger">Save</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Card.ImgOverlay>
                        </Card>
                        
                        <br />
                    </>
                </Col>
                <Col>
                    <>
                        <Card text="white" style={{ width: '18rem' }}>

                            <Card.Img src={RoomsImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Room 2</Card.Title>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Call Dibs!"
                                        aria-label="Dibs 2"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="danger">Save</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Card.ImgOverlay>
                        </Card>
                        <br />
                    </>
                </Col><Col>
                    <>
                        <Card text="white" style={{ width: '18rem' }}>

                            <Card.Img src={RoomsImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Room 3</Card.Title>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Call Dibs!"
                                        aria-label="Dibs 3"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="danger">Save</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Card.ImgOverlay>
                        </Card>
                        <br />
                    </>
                </Col>


           

            </Row>

        </Container>

    );
}
