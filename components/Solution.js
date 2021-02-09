import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
const Solution = () => {
  return (
    <>
      <Container fluid className='Solution'>
        <Row className='justify-content-center align-items-center'>
          <h1 className='Solution__title '>Need a custom solution?</h1>
        </Row>

        <Row>
          <Col
            sm={{ span: 1 }}
            md={{ span: 10, offset: 2 }}
            lg={{ span: 2, offset: 2 }}
            className='Solution__container '
          >
            <div className='Solution__solution'>
              <span className='Solution__number'>01</span>
              <span className='Solution__text'>Install Theme</span>
            </div>
            <div className='Solution__solution'>
              <span className='Solution__number'>02</span>
              <span className='Solution__text'>Landing Page</span>
            </div>
            <div className='Solution__solution'>
              <span className='Solution__number'>03</span>
              <span className='Solution__text'>Custom Web Site</span>
            </div>
            <div className='Solution__solution'>
              <span className='Solution__number'>04</span>
              <span className='Solution__text'>Custom Web Site</span>
            </div>
            <div className='Solution__solution'>
              <span className='Solution__number'>05</span>
              <span className='Solution__text'>Custom App</span>
            </div>
            <div className='Solution__solution'>
              <span className='Solution__number'>06</span>
              <span className='Solution__text'>Marketing Assets</span>
            </div>
          </Col>
        </Row>
      </Container>
      <Image
        fluid
        src='/assets/solutions/example.png'
        alt='solutions image'
        className='solutions-image-mobile'
      />
    </>
  );
};

export default Solution;
