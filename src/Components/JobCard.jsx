import React, { useState } from 'react';
import JobApplicants from './JobApplicants';
import { Card, Button, Modal } from 'react-bootstrap';

const JobCard = ({ job }) => {
  const { title, description, location } = job;
  const [showApplicants, setShowApplicants] = useState(false);

  const handleShowApplicants = () => {
    setShowApplicants((prevState) => !prevState);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Title>
            <div className="text-truncate">{title}</div>
          </Card.Title>
          <div className="text-truncate">
            <h6> Description : {description}</h6>
            <p>Location:{location}</p>
            <Button variant="success" onClick={handleShowApplicants}>
              View Applicants
            </Button>
          </div>
        </Card.Body>
      </Card>

      {showApplicants && (
        <Modal show={showApplicants} onHide={() => setShowApplicants(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Job Applicants</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <JobApplicants
              job={job}
              showApplicants={showApplicants}
              setShowApplicants={setShowApplicants}
            />
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};

export default JobCard;
