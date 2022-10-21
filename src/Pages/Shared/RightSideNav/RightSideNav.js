import React from 'react';
import { ButtonGroup, ListGroup} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import image01 from '../../../access/image-01.jpg'
import image02 from '../../../access/image-02.jpg'
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram, FaTwitch, FaYoutube } from "react-icons/fa";

const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-2' variant="outline-primary"> <FaGoogle/> Go to Google</Button>
                <Button variant="outline-dark"><FaGithub/> Go to Github</Button>
            </ButtonGroup>
            <div>
                <h4>Find us on</h4>
                <ListGroup className='mb-2'>
                    <ListGroup.Item><FaFacebook/> FaceBook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
                    <ListGroup.Item><FaTwitch/> Twitch</ListGroup.Item>
                    <ListGroup.Item><FaYoutube/> Youtube</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image01}
          alt="First slide"
        />
              </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={image02}
          alt="First slide"
        />
              </Carousel.Item>
    </Carousel>
            </div>

        </div>
    );
};

export default RightSideNav;