import { ISpeciesFilters } from './models/models';

import './FiltersContainer.css';
import React from 'react';

export const FiltersContainer = ({
  filters,
  setFilters,
}: {
  filters: ISpeciesFilters,
  setFilters: React.Dispatch<React.SetStateAction<ISpeciesFilters>>,
}) => {
  const toggleDuplicates = () => {
    const newFilters = {
      ...filters
    };

    newFilters.allowDuplicates = !filters.allowDuplicates;

    setFilters(newFilters);
  };

  return (
    <div className='filter-container'>
      {/* Type filters */}
      <span className='filter-group'></span>

      {/* Generation filters */}
      <span className='filter-group'></span>

      <span className='filter-group'>
        <input name='allowDupes' type='checkbox' checked={filters.allowDuplicates} onChange={toggleDuplicates} />
        <label htmlFor='allowDupes'>Allow duplicates?</label>
      </span>
    </div>
  );
};