import React from 'react';
import { Container, Card } from 'react-bootstrap';

const JobApplicant = ({ applicant }) => {
  const { email, name, skills } = applicant;

  return (
    <Container>
      <div className="row">
        <div className="row-md-3 my-1">
          <Card>
            <Card.Body>
              <Card.Header className="cardTitle"> {name}</Card.Header>
              <div>
                <p>Skills :{skills}</p>
                <p>Contact Info: {email}</p>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  );
};

export default JobApplicant;
