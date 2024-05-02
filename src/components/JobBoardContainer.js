import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import JobList from './JobList';
import Filters from './Filters';
import InfiniteScroll from './InfiniteScroll';
import { fetchJobs } from '../redux/actions/jobActions';

const JobBoardContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  return (
    <div>
      <Filters />
      <JobList />
      <InfiniteScroll />
    </div>
  );
}

export default JobBoardContainer;
