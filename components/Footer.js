import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
const Footer = () => {
  return (
    <Row className='justify-content-center align-items-center margin-none text-center Footer'>
      <Col sm={{ span: 6 }} md={{ span: 3 }} lg={{ span: 3 }}>
        <h1 className='Footer__title'>We work with any Budget!</h1>
        <Button href='/' className='Footer__button'>
          Let's get started
        </Button>
      </Col>
    </Row>
  );
};

export default Footer;
