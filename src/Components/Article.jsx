import React from 'react';
import { Card, Container } from 'react-bootstrap';

const Article = () => {
  return (
    <Container>
      <div className="row">
        <div className="col-md-4 my-4">
          <Card>
            <Card.Body>
              <Card.Title className="cardTitle"> Card Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reiciendis culpa quidem odit odio mollitia possimus. N
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 my-4">
          <Card>
            <Card.Body>
              <Card.Title className="cardTitle">Card Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reiciendis culpa quidem odit odio mollitia possimus. N
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 my-4">
          <Card>
            <Card.Body>
              <Card.Title className="cardTitle">Card Title</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reiciendis culpa quidem odit odio mollitia possimus. N
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default Article;
