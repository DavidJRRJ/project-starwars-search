import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function SearchName() {
  const { setName } = useContext(PlanetContext);

  const handleChange = ({ target: { value } }) => {
    setName(value);
  };

  return (
    <input
      type="text"
      data-testid="name-filter"
      onChange={ handleChange }
      placeholder="Name Filter"
    />
  );
}

export default SearchName;
