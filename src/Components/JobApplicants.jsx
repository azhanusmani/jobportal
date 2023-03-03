import React, { useEffect, useState } from 'react';
import axios from 'axios';

import JobApplicant from './JobApplicant';
import { getLocalStorage } from '../Utils/localStorage';

const JobApplicants = ({ job }) => {
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    let url = `${import.meta.env.VITE_BASE_API_HOST}/api/v1/recruiters/jobs/${
      job.id
    }/candidates`;
    const authToken = getLocalStorage('authToken');

    try {
      axios({
        method: 'get',
        url,
        headers: {
          'Content-Type': 'application/json',
          Authorization: authToken,
        },
      }).then((resp) => {
        const fetchedApplicants = resp?.data?.data;
        setApplicants(fetchedApplicants);
      });
    } catch (err) {
      const errMessageFromServer = err?.response?.data?.message;
      const successStatusFromServer = err?.response?.data?.success;
      console.error(err.message, errMessageFromServer, successStatusFromServer);
    }
  }, []);

  return (
    <>
      <small>Total applicants: {applicants?.length || 0}</small>

      {applicants && applicants.length ? (
        applicants.map((applicant) => {
          return <JobApplicant key={applicant.id} applicant={applicant} />;
        })
      ) : (
        <>
          <br />

          <h4>
            <span className="material-symbols-outlined">no_accounts</span>No
            current Applicants
          </h4>
        </>
      )}
    </>
  );
};

export default JobApplicants;
