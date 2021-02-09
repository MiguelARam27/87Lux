import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
  jumboInfoChildren,
  jumboInfoSection,
  jumboPictureSection,
} from './animation/jumboAnimation';
import { useScroll } from './animation/useScroll';
const Jumbo = () => {
  const [element, controls] = useScroll();
  //click handler to take to youtube link
  const onClickHandler = (e) => {
    e.preventDefault();
    alert('clicked');
    window.location = 'http://www.youtube.com';
  };
  return (
    <Container fluid className='Jumbo'>
      <Row noGutters='true'>
        <motion.div
          className='Jumbo-Info col-xl-4 col-lg-4 col-md-10 col-sm-10 offset-xl-2 offset-lg-2 offset-md-1 offset-sm-1'
          initial='hidden'
          ref={element}
          animate={controls}
          variants={jumboInfoSection}
        >
          <motion.h1 variants={jumboInfoChildren} className='Jumbo-Info__title'>
            We Give Your Business an Edge Over Your Competitors!
          </motion.h1>
          <motion.h1
            variants={jumboInfoChildren}
            className='Jumbo-Info__subtext'
          >
            Everything you need for your business: Themes, Apps, Assets and
            More..
          </motion.h1>
          <motion.input
            variants={jumboInfoChildren}
            type='email'
            className='Jumbo-Info__input'
            placeholder='Enter your email address'
          />
          <motion.button
            variants={jumboInfoChildren}
            href='/'
            className='Jumbo-Info__button'
          >
            Get Started
          </motion.button>
        </motion.div>
        <motion.div
          initial='hidden'
          ref={element}
          animate={controls}
          variants={jumboPictureSection}
          className='Jumbo-shapes col-xl-4 col-lg-4 col-md-11 col-sm-10 offset-xl-1 offset-lg-2 offset-sm-1'
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
        </motion.div>
      </Row>
    </Container>
  );
};

export default Jumbo;
