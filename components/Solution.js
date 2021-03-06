import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { colAnimation, footerTitleFade } from './animation/footerAnimation';
import { useScroll } from './animation/useScroll';
const Solution = () => {
  const [element, controls] = useScroll();
  return (
    <>
      <Container fluid className='Solution'>
        <Row className='justify-content-center align-items-center Solution__title-container'>
          <motion.h1
            initial='hidden'
            variants={footerTitleFade}
            animate={controls}
            className='Solution__title '
          >
            Need a custom solution?
          </motion.h1>
        </Row>

        <motion.div
          className='Solution__row row'
          initial='hidden'
          variants={colAnimation}
          animate={controls}
          ref={element}
        >
          <Col
            sm={{ span: 8, offset: 4 }}
            md={{ span: 4, offset: 5 }}
            lg={{ span: 3, offset: 1 }}
            className='Solution__container'
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
        </motion.div>
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
