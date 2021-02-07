import React from 'react';
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
import Image from 'next/image';

const Jumbo = () => {
  return (
    <Container fluid className='Jumbo'>
      <Row>
        <Col md={{ span: 4, offset: 2 }} className='Jumbo-Info'>
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
        <Col md={{ span: 4, offset: -2 }} className='Jumbo-shapes'>
          <img
            src='/assets/circle1.png'
            alt='Picture of the author'
            className='Jumbo-shapes__img circle1'
          ></img>
          <img
            src='/assets/circle2.png'
            alt='Picture of the author'
            className='Jumbo-shapes__img circle2'
          ></img>
          <img
            src='/assets/triangle.png'
            alt='Picture of the author'
            className='Jumbo-shapes__img triangle'
          ></img>
          <img
            src='/assets/video.png'
            alt='Picture of the author'
            className='Jumbo-shapes__img video'
          ></img>
        </Col>
      </Row>
    </Container>
  );
};

export default Jumbo;
