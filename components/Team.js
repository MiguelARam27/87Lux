import React from 'react';
import { Container } from 'react-bootstrap';

const Team = () => {
  return (
    <Container className='Team'>
      <h1 className='Team__title'>Meet The Team</h1>
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
    </Container>
  );
};

export default Team;
