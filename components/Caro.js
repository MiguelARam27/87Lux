import React, { useState } from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';

const Caro = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Row noGutters={true}>
      <Col sm={{ span: 11 }} md={{ span: 11 }} lg={{ span: 1, offset: 1 }}>
        <div className='title-col'>
          <h1>Projects</h1>
          <div className='black-background'></div>
        </div>
      </Col>
      <Col sm={{ span: 11 }} md={{ span: 11 }} lg={{ span: 10 }}>
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          touch={true}
          className='carousel-inner no-padding black'
        >
          <Carousel.Item>
            <div class='col-xs-3 col-sm-3 col-md-3'>
              <img
                className='d-block w-100'
                src='/assets/latest_projects/project1.png'
                alt='Second slide'
              />
            </div>
            <div class='col-xs-3 col-sm-3 col-md-3'>
              <img
                className='d-block w-100'
                src='/assets/latest_projects/project1.png'
                alt='Second slide'
              />
            </div>
            <div class='col-xs-3 col-sm-3 col-md-3'>
              <img
                className='d-block w-100'
                src='/assets/latest_projects/project1.png'
                alt='Second slide'
              />
            </div>
            <div class='col-xs-3 col-sm-3 col-md-3'>
              <img
                className='d-block w-100'
                src='/assets/latest_projects/project1.png'
                alt='Second slide'
              />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div class='col-xs-3 col-sm-3 col-md-3'>
              <img
                className='d-block w-100'
                src='/assets/latest_projects/project1.png'
                alt='Second slide'
              />
            </div>
            <div class='col-xs-3 col-sm-3 col-md-3'>
              <img
                className='d-block w-100'
                src='/assets/latest_projects/project1.png'
                alt='Second slide'
              />
            </div>
            <div class='col-xs-3 col-sm-3 col-md-3'>
              <img
                className='d-block w-100'
                src='/assets/latest_projects/project1.png'
                alt='Second slide'
              />
            </div>
            <div class='col-xs-3 col-sm-3 col-md-3'>
              <img
                className='d-block w-100'
                src='/assets/latest_projects/project1.png'
                alt='Second slide'
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
};

export default Caro;
