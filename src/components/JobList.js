import React from 'react';
import { useSelector } from 'react-redux';
import JobCard from './JobCard';

const JobList = () => {
  const jobs = useSelector(state => state.jobs.data.jdList); // Accessing the jdList array from the state

  if (!jobs) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {jobs.map(job => (
        <JobCard key={job.jdUid} job={job} />
      ))}
    </div>
  );
}

export default JobList;