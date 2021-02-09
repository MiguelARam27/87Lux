import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
  titleAnimation,
  linkContainerAnimation,
  linkAnimation,
} from './animation/headerAnimation';

const Header = () => {
  return (
    <Navbar
      expand='lg'
      className='navigation'
      collapseOnSelect
      className='Header'
      fixed='top'
    >
      <Container>
        <motion.a
          variants={titleAnimation}
          initial='hidden'
          animate='show'
          href='/'
          className='Header__logo navbar-brand'
        >
          87
          <motion.span
            variants={titleAnimation}
            initial='hidden'
            animate='show'
          >
            Lux
          </motion.span>
        </motion.a>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <motion.div
            className='ml-auto Header__links navbar-nav'
            variants={linkContainerAnimation}
            initial='hidden'
            animate='show'
          >
            <motion.a className='nav-link' href='/#' variants={linkAnimation}>
              Themes
            </motion.a>
            <motion.a className='nav-link' href='/#' variants={linkAnimation}>
              Apps
            </motion.a>
            <motion.a className='nav-link' href='/#' variants={linkAnimation}>
              Assets
            </motion.a>
            <motion.a className='nav-link' href='/#' variants={linkAnimation}>
              Contact Us
            </motion.a>
          </motion.div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
