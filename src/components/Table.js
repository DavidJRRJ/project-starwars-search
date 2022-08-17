import React, { useContext, useState, useEffect } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const {
    filterByName: { name },
    setName,
  } = useContext(PlanetContext);
  const [planets, setPlanets] = useState([]);

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
        setPlanets(data);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  const filteredPlanets = planets.filter((element) => (
    element.name.toLowerCase().includes(name)
  ));

  // console.log(filteredPlanets);

  return (
    <table>
      <input
        type="text"
        placeholder="Filter"
        data-testid="name-filter"
        onChange={ (e) => setName(e.target.value) }
      />
      <thead>
        <tr>
          <th>Name</th>
          <th>Rotation Period</th>
          <th>Orbital Period</th>
          <th>Diameter</th>
          <th>Climate</th>
          <th>Gravity</th>
          <th>Terrain</th>
          <th>Surface Water</th>
          <th>Population</th>
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {filteredPlanets.map((element, index) => (
          <tr key={ index }>
            <td>{element.name}</td>
            <td>{element.rotation_period}</td>
            <td>{element.orbital_period}</td>
            <td>{element.diameter}</td>
            <td>{element.climate}</td>
            <td>{element.gravity}</td>
            <td>{element.terrain}</td>
            <td>{element.surface_water}</td>
            <td>{element.population}</td>
            <td>{element.films}</td>
            <td>{element.created}</td>
            <td>{element.edited}</td>
            <td>{element.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
