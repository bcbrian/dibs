import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import ScheduleImage from '../images/schedule.jpg';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Image from 'react-bootstrap/Image'
import ActivityImage from '../images/Activity.gif'

export default function Schedule() {
    return (
        <Container id="schedule">
            <Image src={ActivityImage} fluid />
            <Row>
                <Col>
                    <>
                        <Card text="white" style={{ width: '18rem' }}>

                            <Card.Img src={ScheduleImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Day 1</Card.Title>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Enter Actvity"
                                        aria-label="Avtivity Input1"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="primary">Save</Button>
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

                            <Card.Img src={ScheduleImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Day 2</Card.Title>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Enter Actvity"
                                        aria-label="Avtivity Input2"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="primary">Save</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Card.ImgOverlay>
                        </Card>
                        <br />
                    </>
                </Col><Col>
                    <>
                        <Card text="white" style={{ width: '18rem' }}>

                            <Card.Img src={ScheduleImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Day 3</Card.Title>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Enter Actvity"
                                        aria-label="Avtivity Input3"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="primary">Save</Button>
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

                            <Card.Img src={ScheduleImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Day 4</Card.Title>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Enter Actvity"
                                        aria-label="Avtivity Input4"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="primary">Save</Button>
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

                            <Card.Img src={ScheduleImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Day 5</Card.Title>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Enter Actvity"
                                        aria-label="Avtivity Input5"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="primary">Save</Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Card.ImgOverlay>
                        </Card>
                        <br />
                    </>
                </Col><Col>
                    <>
                        <Card text="white" style={{ width: '18rem' }}>

                            <Card.Img src={ScheduleImage} />

                            <Card.ImgOverlay>

                                <Card.Title>Day 6</Card.Title>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Enter Actvity"
                                        aria-label="Avtivity Input6"
                                        aria-describedby="basic-addon2"
                                    />
                                    <InputGroup.Append>
                                        <Button variant="primary">Save</Button>
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
