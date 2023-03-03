import React from 'react';
import { Container } from 'react-bootstrap';

import goldline from '../assets/goldline.png';
import ideaa from '../assets/ideaa.png';
import kanba from '../assets/kanba.png';
import lighting from '../assets/lighting.png';
import liva from '../assets/liva.png';
import solaytic from '../assets/solaytic.png';
import velocity from '../assets/velocity.png';
import ztos from '../assets/ztos.png';

const Footer = () => {
  return (
    <Container>
      <div className=" mx-4">
        <h3 className="my-4">Companies who trust us</h3>
      </div>
      <div className="d-lg-flex  justify-content-between ">
        <img className="mx-4" src={goldline} alt="Company logo" />
        <img className="mx-4" src={ideaa} alt="Company logo" />
        <img className="mx-4" src={kanba} alt="Company logo" />
        <img className="mx-4" src={lighting} alt="Company logo" />
        <img className="mx-4" src={liva} alt="Company logo" />
      </div>
      <div className=" d-lg-flex  flex-row justify-content-around">
        <img className="mx-4" src={solaytic} alt="Company logo" />
        <img className="mx-4 my-3" src={velocity} alt="Company logo" />
        <img className="mx-4 my-3" src={ztos} alt="Company logo" />
      </div>
    </Container>
  );
};

export default Footer;
