import React from 'react';
import { Container, Button } from 'react-bootstrap';

import HeroImage from '../assets/HeroImage.png';

const Section = () => {
  return (
    <Container>
      <div className="d-lg-flex justify-content-between">
        <div className="col">
          <h2 className="mt-4">Welcome to</h2>
          <h2>
            <font font style={{ color: '#367BB6' }}>
              My
            </font>
            <font style={{ color: '#367BB6' }}>Jobs</font>
          </h2>
          <Button className=""> Subscribe</Button>
        </div>
        <div className="col">
          <img
            style={{ width: '100%', height: 'auto' }}
            src={HeroImage}
            alt="Hero Image"
          />
        </div>
      </div>
    </Container>
  );
};

export default Section;
