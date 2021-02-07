import React from 'react';
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';
const Platforms = () => {
  return (
    <Container fluid className='Platforms'>
      <Row xs={1} md={2} lg={2}>
        <Col
          className='Platforms__container'
          sm={{ span: 6, offset: 2 }}
          md={{ span: 5, offset: 2 }}
          lg={{ span: 8, offset: 2 }}
        >
          <h2 className='Platforms__title'>Platforms</h2>
          <Row xs={1} md={4} lg={4}>
            <Col
              className='Platforms__images-container'
              sm={{ span: 6, offset: 2 }}
              md={{ span: 7, offset: 2 }}
              lg={{ span: 7, offset: 2 }}
            >
              <img
                src='/assets/platforms/big.png'
                alt='Big commerce'
                className='Jumbo-shapes__img circle1'
              />
              <img
                src='/assets/platforms/shopify.png'
                alt='Shopify'
                className='Jumbo-shapes__img circle1'
              />
              <img
                src='/assets/platforms/wix.png'
                alt='Wix'
                className='Jumbo-shapes__img circle1'
              />
              <img
                src='/assets/platforms/wordpress.png'
                alt='Big commerce'
                className='Jumbo-shapes__img circle1'
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Platforms;
