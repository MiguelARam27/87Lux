import React from 'react';
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';

const Jumbo = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 5, offset: 1 }} className='Jumbo-Info'>
          <h1 className='Jumbo-Info__title'>
            We Give Your Business an Edge Over Your Competitors!
          </h1>
          <span className='Jumbo-Info__subtext'>
            Everything you need for your business: Themes, Apps, Assets and
            More..
          </span>
          <input
            type='email'
            className='Jumbo-Info__input'
            placeholder='Enter your email address'
          />
          <button href='/' className='Jumbo-Info__button'>
            Get Started
          </button>
        </Col>
        <Col md={{ span: 5, offset: 1 }}> shape</Col>
      </Row>
    </Container>
  );
};

export default Jumbo;
