import React from 'react';
import { Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useScroll } from './animation/useScroll';
import {
  footerButtonAnimation,
  footerTitleAnimation,
  footerImageAnimation,
} from './animation/footerAnimation';
const Footer = () => {
  const [element, controls] = useScroll(0.35);
  return (
    <motion.div
      ref={element}
      initial='hidden'
      className='justify-content-center align-items-center  text-center Footer row'
    >
      <motion.img
        src='/assets/solutions/example.png'
        alt='project'
        className='Footer__img'
        initial='hidden'
        variants={footerImageAnimation}
        animate={controls}
      />
      <Col sm={{ span: 3 }} md={{ span: 3 }} lg={{ span: 3 }}>
        <motion.h1
          initial='hidden'
          variants={footerTitleAnimation}
          animate={controls}
          className='Footer__title'
        >
          We work with any Budget!
        </motion.h1>
        <motion.a
          initial='hidden'
          variants={footerButtonAnimation}
          animate={controls}
          className='Footer__button btn btn-primary'
          href='/'
        >
          Let's get started!
        </motion.a>
      </Col>
    </motion.div>
  );
};

export default Footer;
