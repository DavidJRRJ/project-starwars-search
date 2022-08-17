import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetContext from './PlanetContext';

function PlanetProvider({ children }) {
  const [planets, setPlanets] = useState('');

  useEffect(() => {
    const url = 'https://swapi-trybe.herokuapp.com/api/planets/';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        const data = json.results;
        for (let i = 0; i < data.length; i += 1) {
          delete data[i].residents;
        }
        // console.log(data);
        setPlanets(data);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  return (
    <PlanetContext.Provider value={ { planets, setPlanets } }>
      { children }
    </PlanetContext.Provider>
  );
}

PlanetProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetProvider;
