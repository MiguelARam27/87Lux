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
      <Row>
        <Col
          className='Platforms__container'
          sm
          md={{ span: 5, offset: 2 }}
          lg={{ span: 8, offset: 2 }}
        >
          <h2 className='Platforms__title'>Platforms</h2>

          <div className='Platforms__images-container'>
            <img
              src='/assets/platforms/big.png'
              alt='Big commerce'
              className='Platforms__img'
            />
            <img
              src='/assets/platforms/shopify.png'
              alt='Shopify'
              className='Platforms__img'
            />
            <img
              src='/assets/platforms/wix.png'
              alt='Wix'
              className='Platforms__img'
            />
            <img
              src='/assets/platforms/wordpress.png'
              alt='Big commerce'
              className='Platforms__img'
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Platforms;
