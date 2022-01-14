import { ISpeciesFilters, PokemonType } from './models/models';

import './FiltersContainer.css';
import React from 'react';

export const FiltersContainer = ({
  filters,
  setFilters,
}: {
  filters: ISpeciesFilters,
  setFilters: React.Dispatch<React.SetStateAction<ISpeciesFilters>>,
}) => {
  const updateAllowedTypes = (e: any) => {
    const newFilters = {
      ...filters
    };

    newFilters.allowedTypes = new Set();

    const options = e.target.options;

    for (var i = 1; i < options.length; i++) {
      if (options[0].selected || options[i].selected) {
        newFilters.allowedTypes.add(options[i].value);
        newFilters.excludedTypes.delete(options[i].value);
      }
    }

    setFilters(newFilters);
  };

  const updateGeneration = (e: any) => {
    const newFilters = {
      ...filters
    };

    newFilters.generation = new Set();

    const options = e.target.options;

    for (var i = 1; i < options.length; i++) {
      if (options[0].selected || options[i].selected) {
        newFilters.generation.add(parseInt(options[i].value));
      }
    }

    setFilters(newFilters);
  };

  const updateExcludedTypes = (e: any) => {
    const newFilters = {
      ...filters
    };

    newFilters.excludedTypes = new Set();

    const options = e.target.options;

    for (var i = 1; i < options.length; i++) {
      if (!options[0].selected && options[i].selected) {
        newFilters.excludedTypes.add(options[i].value);
        newFilters.allowedTypes.delete(options[i].value);
      }
    }

    setFilters(newFilters);
  };

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
      <span className='filter-group'>
        <label htmlFor='allowedTypes'>Allowed types{` (${filters.allowedTypes.size})`}</label>
        <select multiple name='allowedTypes' placeholder='all' onChange={val => updateAllowedTypes(val)}>
          <option value='all'>all</option>
          {
            Object.values(PokemonType).map(typeName =>
              <option key={typeName} value={typeName} selected={filters.allowedTypes.has(typeName)}>{typeName}</option>
            )
          }
        </select>
      </span>

      <span className='filter-group'>
        <label htmlFor='excludedTypes'>Excluded types{` (${filters.excludedTypes.size})`}</label>
        <select multiple name='excludedTypes' placeholder='all' onChange={val => updateExcludedTypes(val)}>
          <option value='none'>none</option>
          {
            Object.values(PokemonType).map(typeName =>
              <option key={typeName} value={typeName} selected={filters.excludedTypes.has(typeName)}>{typeName}</option>
            )
          }
        </select>
      </span>

      <span className='filter-group'>
        <label htmlFor='generation'>Generation</label>
        <select multiple name='excludedTypes' placeholder='all' onChange={val => updateGeneration(val)}>
          <option value='all'>all</option>
          {
            [...Array(9).keys()].slice(1).map(gen =>
              <option key={gen} value={gen} selected={filters.generation.has(gen)}>{gen}</option>
            )
          }
        </select>
      </span>

      <span className='filter-group'>
        <label htmlFor='allowDupes'>Allow duplicates?</label>
        <input name='allowDupes' type='checkbox' checked={filters.allowDuplicates} onChange={toggleDuplicates} />
      </span>
    </div>
  );
};