import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Jumbo = () => {
  const onClickHandler = (e) => {
    e.preventDefault();
    alert('clicked');
    window.location = 'http://www.youtube.com';
  };
  return (
    <Container fluid className='Jumbo'>
      <Row noGutters='true'>
        <Col
          sm={{ span: 6 }}
          md={{ span: 10, offset: 1 }}
          lg={{ span: 4, offset: 2 }}
          xl={{ span: 4, offset: 1 }}
          className='Jumbo-Info'
        >
          <h1 className='Jumbo-Info__title'>
            We Give Your Business an Edge Over Your Competitors!
          </h1>
          <h2 className='Jumbo-Info__subtext'>
            Everything you need for your business: Themes, Apps, Assets and
            More..
          </h2>
          <input
            type='email'
            className='Jumbo-Info__input'
            placeholder='Enter your email address'
          />
          <button href='/' className='Jumbo-Info__button'>
            Get Started
          </button>
        </Col>
        <Col
          sm={{ span: 6 }}
          md={{ span: 11 }}
          lg={{ span: 4, offset: 2 }}
          xl={{ span: 3, offset: -1 }}
          className='Jumbo-shapes'
        >
          <img
            src='/assets/jumbo/circle1.png'
            alt='Picture of the author'
            className='Jumbo-shapes__img circle1'
          />
          <img
            src='/assets/jumbo/circle2.png'
            alt='Picture of the author'
            className='Jumbo-shapes__img circle2'
          />
          <img
            src='/assets/jumbo/triangle.png'
            alt='Picture of the author'
            className='Jumbo-shapes__img triangle'
          />
          <img
            onClick={onClickHandler}
            src='/assets/jumbo/video.png'
            alt='Picture of the author'
            className='Jumbo-shapes__img video'
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Jumbo;
