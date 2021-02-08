import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
const LatestProjects = () => {
  return (
    <Container className='padding-none'>
      <Row className='padding-none'>
        <Col
          sm={{ span: 12 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          className='Latest_projects'
        >
          <h1 className='Latest_projects__title'>latest Projects</h1>

          <img
            src='/assets/latest_projects/project1.png'
            alt='project'
            className='Latest_projects__img'
          />
          <img
            src='/assets/latest_projects/project2.png'
            alt='project'
            className='Latest_projects__img'
          />
        </Col>
      </Row>
    </Container>
  );
};

export default LatestProjects;
