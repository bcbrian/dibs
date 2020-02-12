import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import MealsImage from '../images/meals.jpg';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import MealsHeader from '../images/meals.gif'
import Image from 'react-bootstrap/Image';


export default function Meals() {
    return (
        <Container id="meals">
            <Image src={MealsHeader} />
            <Row>
                <Col>
                    <>
                        <Card text="white" style={{ width: '18rem' }}>

                            <Card.Img src={MealsImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Day 1</Card.Title>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Enter meal"
                                        aria-label="Meal Input1"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="success">Save</Button>
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

                            <Card.Img src={MealsImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Day 2</Card.Title>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Enter meal"
                                        aria-label="Meal Input2"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="success">Save</Button>
                                    </InputGroup.Append>
                                </InputGroup>


                            </Card.ImgOverlay>
                        </Card>
                        <br />
                    </>
                </Col><Col>
                    <>
                        <Card text="white" style={{ width: '18rem' }}>

                            <Card.Img src={MealsImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Day 3</Card.Title>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Enter meal"
                                        aria-label="Meal Input3"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="success">Save</Button>
                                    </InputGroup.Append>
                                </InputGroup>


                            </Card.ImgOverlay>
                        </Card>
                        <br />
                    </>
                </Col>


            </Row>
            <Row>
                <Col>
                    <>
                        <Card text="white" style={{ width: '18rem' }}>

                            <Card.Img src={MealsImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Day 4</Card.Title>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Enter meal"
                                        aria-label="Meal Input4"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="success">Save</Button>
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

                            <Card.Img src={MealsImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Day 5</Card.Title>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Enter meal"
                                        aria-label="Meal Input5"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="success">Save</Button>
                                    </InputGroup.Append>
                                </InputGroup>


                            </Card.ImgOverlay>
                        </Card>
                        <br />
                    </>
                </Col><Col>
                    <>
                        <Card text="white" style={{ width: '18rem' }}>

                            <Card.Img src={MealsImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Day 6</Card.Title>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Enter meal"
                                        aria-label="Meal Input6"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="success">Save</Button>
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
