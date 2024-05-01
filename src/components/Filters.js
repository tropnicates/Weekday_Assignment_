import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { applyFilter } from '../redux/actions/filterActions';

const Filters = () => {
  const dispatch = useDispatch();
  const [experience, setExperience] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [remote, setRemote] = useState(false);

  const handleApplyFilter = () => {
    const filters = {
      experience,
      company,
      location,
      remote
    };
    dispatch(applyFilter(filters));
  };

  const handleResetFilter = () => {
    setExperience('');
    setCompany('');
    setLocation('');
    setRemote(false);
    // Dispatch action to reset filters if needed
  };

  return (
    <div>
      <h2>Filters</h2>
      <div>
        <label>Experience:</label>
        <input
          type="text"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
      </div>
      <div>
        <label>Company:</label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </div>
      <div>
        <label>Location:</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={remote}
            onChange={(e) => setRemote(e.target.checked)}
          />
          Remote
        </label>
      </div>
      <div>
        <button onClick={handleApplyFilter}>Apply Filters</button>
        <button onClick={handleResetFilter}>Reset Filters</button>
      </div>
    </div>
  );
}

export default Filters;
