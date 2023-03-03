import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Pagination } from 'react-bootstrap';
import axios from 'axios';

import JobCard from '../Components/JobCard';
import NavbarHeaderLogout from '../Components/NavbarHeaderLogout';
import { getLocalStorage } from '../Utils/localStorage';

const JobsListings = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const authToken = getLocalStorage('authToken');

  useEffect(() => {
    if (!authToken) {
      navigate('/');
    }
  }, []);

  const PrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const fetchData = () => {
    let url = `${
      import.meta.env.VITE_BASE_API_HOST
    }/api/v1/recruiters/jobs?page=${page}`;

    try {
      axios({
        method: 'get',
        url,
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken,
        },
      }).then((resp) => {
        const fetchedJobs = resp?.data?.data?.data;
        setJobs(fetchedJobs);
      });
    } catch (err) {
      const errMessageFromServer = err?.response?.data?.message;
      const successStatusFromServer = err?.response?.data?.success;
      console.error(err.message, errMessageFromServer, successStatusFromServer);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <>
      <Container>
        <NavbarHeaderLogout />

        {jobs && jobs.length ? (
          <>
            <h2>Jobs posted by you</h2>

            <Container>
              <div className="row">
                {jobs.map((job) => {
                  return (
                    <div key={job.id} className="col-md-3 my-1">
                      <JobCard job={job} />
                    </div>
                  );
                })}
              </div>
            </Container>
          </>
        ) : (
          <h2>No further Jobs</h2>
        )}

        <div className="d-flex mt-5 justify-content-center">
          <Pagination>
            <Pagination.Prev onClick={PrevPage} />
            <Pagination.Item>{page}</Pagination.Item>
            <Pagination.Next onClick={() => setPage(page + 1)} />
          </Pagination>
        </div>
      </Container>
    </>
  );
};

export default JobsListings;
