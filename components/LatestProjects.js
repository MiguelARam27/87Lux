import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
const LatestProjects = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          sm={{ span: 6 }}
          md={{ span: 10, offset: 2 }}
          lg={{ span: 10, offset: 2 }}
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
