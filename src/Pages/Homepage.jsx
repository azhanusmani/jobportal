import React from 'react';
import { Container } from 'react-bootstrap';

import Article from '../Components/Article';
import Footer from '../Components/Footer';
import NavbarHeaderHomepage from '../Components/NavbarHeaderLogin';
import Section from '../Components/Section';

const Homepage = () => {
  return (
    <Container>
      <NavbarHeaderHomepage />
      <hr style={{ color: 'antiquewhite' }} />
      <Section />
      <Article />
      <Footer />
    </Container>
  );
};

export default Homepage;
