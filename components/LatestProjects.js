import React, { Fragment, useState } from 'react';
import {
  Row,
  Col,
  Button,
  Container,
  Carousel,
  Modal,
  Image,
} from 'react-bootstrap';
const LatestProjects = () => {
  //carousal state
  const [index, setIndex] = useState(0);

  //modal state
  const [show, setShow] = useState(false);
  const [img, setImg] = useState('');
  //modal functions
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const onClickHandler = (e) => {
    let imgUrl = e.target.src;
    setImg(imgUrl);
    handleShow();
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Fragment>
      <Row noGutters={true} className='Projects margin-0'>
        <Col sm={{ span: 1 }} md={{ span: 1 }} lg={{ span: 1, offset: 1 }}>
          <div className='Projects__title black'>
            <h1>Latest Projects</h1>
          </div>
        </Col>
        <Col
          sm={{ span: 11 }}
          md={{ span: 11 }}
          lg={{ span: 10 }}
          className='black'
        >
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            className='carousel-inner no-padding '
          >
            <Carousel.Item>
              <div className='col-xs-3 col-sm-3 col-md-3'>
                <img
                  className='d-block w-100'
                  src='/assets/latest_projects/project1.png'
                  alt='Second slide'
                  onClick={onClickHandler}
                />
              </div>
              <div className='col-xs-3 col-sm-3 col-md-3'>
                <img
                  className='d-block w-100'
                  src='/assets/latest_projects/project2.png'
                  alt='Second slide'
                  onClick={onClickHandler}
                />
              </div>
              <div className='col-xs-3 col-sm-3 col-md-3'>
                <img
                  className='d-block w-100'
                  src='/assets/latest_projects/project1.png'
                  alt='Second slide'
                  onClick={onClickHandler}
                />
              </div>
              <div className='col-xs-3 col-sm-3 col-md-3'>
                <img
                  className='d-block w-100'
                  src='/assets/latest_projects/project1.png'
                  alt='Second slide'
                  onClick={onClickHandler}
                />
              </div>
            </Carousel.Item>

            <Carousel.Item>
              <div className='col-xs-3 col-sm-3 col-md-3'>
                <img
                  className='d-block w-100'
                  src='/assets/latest_projects/project1.png'
                  alt='Second slide'
                  onClick={onClickHandler}
                />
              </div>
              <div className='col-xs-3 col-sm-3 col-md-3'>
                <img
                  className='d-block w-100'
                  src='/assets/latest_projects/project1.png'
                  alt='Second slide'
                  onClick={onClickHandler}
                />
              </div>
              <div className='col-xs-3 col-sm-3 col-md-3'>
                <img
                  className='d-block w-100'
                  src='/assets/latest_projects/project1.png'
                  alt='Second slide'
                  onClick={onClickHandler}
                />
              </div>
              <div className='col-xs-3 col-sm-3 col-md-3'>
                <img
                  className='d-block w-100'
                  src='/assets/latest_projects/project1.png'
                  alt='Second slide'
                  onClick={onClickHandler}
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Container className='Project-buttons-container'>
        <Row className='justify-content-center'>
          <Button href='/' className='Project-buttons-container__button'>
            View Themes
          </Button>
          <Button href='/' className='Project-buttons-container__button'>
            View Apps
          </Button>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose} centered size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Project title would go here</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image responsive src={img} className='img-responsive'></Image>
          <div className='row justify-content-center'>
            <h1>Project description</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A tenetur
            obcaecati qui doloribus, consectetur error porro quae minus quis,
            repellendus fugit eveniet provident quod tempora reprehenderit dicta
            aliquid similique aperiam!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <div className='row justify-content-center'>
            <Button href='/' variant='secondary' onClick={handleClose}>
              Demo
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default LatestProjects;
