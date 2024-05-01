import React from 'react';
import { useSelector } from 'react-redux';

const JobList = () => {
  const jobs = useSelector(state => state.jobs); 

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


        </div>
      ))}
    </div>
  );
}

export default JobList;

