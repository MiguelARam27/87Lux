import React from 'react';
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Button,
} from 'react-bootstrap';

import { motion } from 'framer-motion';
import {
  titleAnimation,
  platformContainerAnimation,
  image1Animation,
  image2Animation,
  image3Animation,
  image4Animation,
} from './animation/platformsAnimation';
const Platforms = () => {
  return (
    <div className='Platforms'>
      <motion.h2
        variants={titleAnimation}
        initial='hidden'
        animate='show'
        className='Platforms__title'
      >
        Platforms
      </motion.h2>
      <div className='container Platforms__container'>
        <motion.div
          variants={platformContainerAnimation}
          initial='hidden'
          animate='show'
          className=' row justify-content-center align-items-center margin-none'
        >
          <motion.img
            variants={image1Animation}
            src='/assets/platforms/big.png'
            alt='Big commerce'
            className='Platforms__img '
          />
          <motion.img
            variants={image2Animation}
            src='/assets/platforms/shopify.png'
            alt='Shopify'
            className='Platforms__img '
          />
          <motion.img
            variants={image3Animation}
            src='/assets/platforms/wix.png'
            alt='Wix'
            className='Platforms__img '
          />
          <motion.img
            variants={image4Animation}
            src='/assets/platforms/wordpress.png'
            alt='Big commerce'
            className='Platforms__img '
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Platforms;
