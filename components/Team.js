import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { useScroll } from './animation/useScroll';
import { fadeSpring, titleFade } from './animation/teamAnimation';
const Team = () => {
  const [element, controls] = useScroll();
  return (
    <>
      <motion.div
        initial='hidden'
        ref={element}
        animate={controls}
        variants={fadeSpring}
        className='Team container'
      >
        <motion.h1 variants={titleFade} className='Team__title'>
          Meet The Team
        </motion.h1>
        <img
          src='/assets/team/Team1.png'
          alt='Big commerce'
          className='Team__img img1'
        />
        <img
          src='/assets/team/Team2.png'
          alt='Big commerce'
          className='Team__img img2'
        />
        <img
          src='/assets/team/Team3.png'
          alt='Big commerce'
          className='Team__img img3'
        />
        <img
          src='/assets/team/Team4.png'
          alt='Big commerce'
          className='Team__img img4'
        />
        <img
          src='/assets/team/Team5.png'
          alt='Big commerce'
          className='Team__img img5'
        />
        <img
          src='/assets/team/Team6.png'
          alt='Big commerce'
          className='Team__img img6'
        />
        <img
          src='/assets/team/Team7.png'
          alt='Big commerce'
          className='Team__img img7'
        />
      </motion.div>

      <Container className='Team-mobile'>
        <h1 className='Team-mobile__title'>Meet The Team</h1>
        <Row className='text-center justify-content-center align-items-center '>
          <img
            src='/assets/team/Team1.png'
            alt='Big commerce'
            className='Team-mobile__img '
          />
          <img
            src='/assets/team/Team2.png'
            alt='Big commerce'
            className='Team-mobile__img '
          />
          <img
            src='/assets/team/Team3.png'
            alt='Big commerce'
            className='Team-mobile__img '
          />
          <img
            src='/assets/team/Team4.png'
            alt='Big commerce'
            className='Team-mobile__img '
          />
          <img
            src='/assets/team/Team5.png'
            alt='Big commerce'
            className='Team-mobile__img '
          />
          <img
            src='/assets/team/Team6.png'
            alt='Big commerce'
            className='Team-mobile__img '
          />
          <img
            src='/assets/team/Team7.png'
            alt='Big commerce'
            className='Team-mobile__img'
          />
        </Row>
      </Container>
    </>
  );
};

export default Team;
