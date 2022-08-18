import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [filterNumeric, setNumeric] = useState([]);

  useEffect(() => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      const data = json.results;
      for (let i = 0; i < data.length; i += 1) {
        delete data[i].residents;
      }
      setPlanets(data);
    };

    fetchData();
  }, []);

  const contextValue = {
    planets,
    setPlanets,
    filterByName: { name },
    setName,
    filterNumeric,
    setNumeric,
  };

  return (
    <PlanetContext.Provider value={ contextValue }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
