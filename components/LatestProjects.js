import React, { Fragment, useState } from 'react';
import { Row, Col, Button, Container, Carousel } from 'react-bootstrap';
const LatestProjects = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Fragment>
      <Row noGutters={true} className='Projects margin-0'>
        <Col sm={{ span: 1 }} md={{ span: 1 }} lg={{ span: 1, offset: 1 }}>
          <div className='title-col'>
            <h1>Latest Projects</h1>
          </div>
        </Col>
        <Col
          sm={{ span: 11 }}
          md={{ span: 11 }}
          lg={{ span: 10 }}
          className='black'
        >
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            touch={true}
            className='carousel-inner no-padding black '
          >
            <Carousel.Item>
              <div className='col-xs-3 col-sm-3 col-md-3'>
                <img
                  className='d-block w-100'
                  src='/assets/latest_projects/project1.png'
                  alt='Second slide'
                />
              </div>
              <div className='col-xs-3 col-sm-3 col-md-3'>
                <img
                  className='d-block w-100'
                  src='/assets/latest_projects/project1.png'
                  alt='Second slide'
                />
              </div>
              <div className='col-xs-3 col-sm-3 col-md-3'>
                <img
                  className='d-block w-100'
                  src='/assets/latest_projects/project1.png'
                  alt='Second slide'
                />
              </div>
              <div className='col-xs-3 col-sm-3 col-md-3'>
                <img
                  className='d-block w-100'
                  src='/assets/latest_projects/project1.png'
                  alt='Second slide'
                />
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className='col-xs-3 col-sm-3 col-md-3'>
                <img
                  className='d-block w-100'
                  src='/assets/latest_projects/project1.png'
                  alt='Second slide'
                />
              </div>
              <div className='col-xs-3 col-sm-3 col-md-3'>
                <img
                  className='d-block w-100'
                  src='/assets/latest_projects/project1.png'
                  alt='Second slide'
                />
              </div>
              <div className='col-xs-3 col-sm-3 col-md-3'>
                <img
                  className='d-block w-100'
                  src='/assets/latest_projects/project1.png'
                  alt='Second slide'
                />
              </div>
              <div className='col-xs-3 col-sm-3 col-md-3'>
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
      <Container>
        <Row className='justify-content-center'>
          <Button href='/' className='Projects__button'>
            View Themes
          </Button>
          <Button href='/' className='Projects__button'>
            View Apps
          </Button>
        </Row>
      </Container>
    </Fragment>
  );
};

export default LatestProjects;
