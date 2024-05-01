import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import JobList from './JobList';
import Filters from './Filters';
import InfiniteScroll from './InfiniteScroll';
import { fetchJobs } from '../redux/actions/jobActions';

const JobBoardContainer = () => {
  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div>
      <Filters />
      <JobList jobs={jobs} />
      <InfiniteScroll />
    </div>
  );
}

export default JobBoardContainer;
