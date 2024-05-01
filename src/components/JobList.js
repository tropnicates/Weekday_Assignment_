import JobCard from './JobCard';

import React from 'react';
import { useSelector } from 'react-redux';

const JobList = () => {
  const jobs = useSelector(state => state.jobs); // Assuming 'jobs' is the slice of state containing job data

  if (!jobs) {
    return <div>Loading...</div>;
  }

  if (jobs.error) {
    return <div>Error: {jobs.error.message}</div>;
  }

  if (!Array.isArray(jobs.data)) {
    return <div>Invalid data structure</div>;
  }

  return (
    <div>
      {jobs.data.map(job => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          {/* Render other job details */}
        </div>
      ))}
    </div>
  );
}

export default JobList;

