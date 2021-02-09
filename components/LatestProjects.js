import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
const LatestProjects = () => {
  return (
    <>
      <Row className='padding-none' className='Latest_projects'>
        <Col
          sm={{ span: 1 }}
          md={{ span: 12, offset: 1 }}
          lg={{ span: 11, offset: 2 }}
          className='Latest_projects__col'
        >
          <h1 className='Latest_projects__title'>latest Projects</h1>
          <img
            src='/assets/latest_projects/project1.png'
            alt='project'
            className='Latest_projects__img img1'
          />
          <img
            src='/assets/latest_projects/project2.png'
            alt='project'
            className='Latest_projects__img img2'
          />
          <img
            src='/assets/latest_projects/project3.png'
            alt='project'
            className='Latest_projects__img img3'
          />
        </Col>
        {/* <Col sm={{ span: 6 }} md={{ span: 1, offset: 3 }} lg={{ span: 10 }}>

      </Col> */}
      </Row>
      <Container></Container>
    </>
  );
};

export default LatestProjects;
