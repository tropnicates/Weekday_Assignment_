import React, { useEffect, useState } from 'react';
import JobCard from './JobCard';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    fetchJobsData(0);
  }, []);

  const fetchJobsData = async (page) => {
      try {
        const response = await axios.post('https://api.weekday.technology/adhoc/getSampleJdJSON', {
          limit: 10,
          offset: page
        });
        const data = response.data.jdList;

        console.log(jobs)

        jobs.length > 0 ? setJobs(prev=>[...prev, ...data]) : setJobs(data)
      } catch (error) {
        throw new Error('Error fetching jobs:', error);
      }
  };

  const handleLoadMore = ()=>{
    fetchJobsData(offset+1);
    setOffset(offset+1)
  }

  if (!jobs) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
      {jobs.map(job => (
        <JobCard key={job.jdUid} job={job} />
      ))}
      </div>

      <div style={{alignSelf: 'center', margin: 30, cursor: 'pointer'}} onClick={handleLoadMore}>
        <p>Load More</p>
      </div>
    </div>
  );
}

export default JobList;
