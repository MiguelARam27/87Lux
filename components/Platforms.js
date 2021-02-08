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
    <div className='Platforms'>
      <h2 className='Platforms__title'>Platforms</h2>
      <div className='container Platforms__container'>
        <Row className=' justify-content-center align-items-center margin-none'>
          <img
            src='/assets/platforms/big.png'
            alt='Big commerce'
            className='Platforms__img '
          />
          <img
            src='/assets/platforms/shopify.png'
            alt='Shopify'
            className='Platforms__img '
          />
          <img
            src='/assets/platforms/wix.png'
            alt='Wix'
            className='Platforms__img '
          />
          <img
            src='/assets/platforms/wordpress.png'
            alt='Big commerce'
            className='Platforms__img '
          />
        </Row>
      </div>
    </div>
  );
};

export default Platforms;
