import React, { useState, useEffect} from 'react'
import { Container, Row, Col, ListGroup, Form, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import FormContainer from './FormContainer'


const Title = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div className='title-container'>       
        <Container fluid className='py-3 title'>
            <Row>
                <Col md={3} >
                    <ListGroup>
                        <ListGroup.Item style={{ height: '29vh'}}>
                            <h2>Enjoy</h2>
                            <h1>$225</h1>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={5}>
                    <ListGroup>
                        <ListGroup.Item style={{ height: '29vh'}}>
                            <h3>New Ark Bank <br/> Cumstomers</h3>
                            <p>Your $225 offer: Open a Ark Total Checking® account with direct deposit. Bank virtually anywhere with the Ark Mobile® app.</p>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <ListGroup>
                        <ListGroup.Item style={{ height: '29vh'}}>
                        <FormContainer>
                                <h3>Welcome</h3>
                                <Form onSubmit={submitHandler}>
                                    <Form.Group controlId='email' className='py-1'>
                                        <Form.Control 
                                            type="text"
                                            type='email' 
                                            placeholder='Enter Email'
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            ></Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId='password'  className='py-1'>
                                        <Form.Control 
                                            type='password' 
                                            placeholder='Enter Password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            ></Form.Control>
                                    </Form.Group>

                                    <Button type='submit' variant='primary'>SIGN IN</Button>
                                </Form>

                                <Row className='py-3'>
                                    <Col>
                                        New Customer?
                                        <Link to='/register' >
                                        REGISTER</Link>
                                    </Col>
                                </Row>
                            </FormContainer>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>

        </Container>
        </div>
    )
}
 
export default Title 
