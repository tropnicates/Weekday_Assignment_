import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from '../redux/actions/jobActions';

const InfiniteScroll = () => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(10);
  const loading = useSelector(state => state.jobs.loading);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      if (!loading) {
        dispatch(fetchJobs(10, offset));
        setOffset(prevOffset => prevOffset + 10);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return null;
};

export default InfiniteScroll;
