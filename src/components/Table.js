import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const {
    planets,
    filterByName: { name },
    filterNumeric,
  } = useContext(PlanetContext);

  const filteredPlanets = planets
    .filter((element) => element.name.toLowerCase().includes(name));

  let filteredFinal = [...filteredPlanets];
  filterNumeric.forEach(({ column, comparison, value }) => {
    // console.log(comparison);
    switch (comparison) {
    case 'maior que':
      console.log(filteredFinal);
      filteredFinal = filteredFinal.filter((planet) => (
        parseInt(planet[column], 10) > parseInt(value, 10)
      ));
      break;
    case 'menor que':
      filteredFinal = filteredFinal.filter((planet) => (
        parseInt(planet[column], 10) < parseInt(value, 10)
      ));
      break;
    default:
      filteredFinal = filteredFinal.filter((planet) => (
        parseInt(planet[column], 10) === parseInt(value, 10)
      ));
      break;
    }
  });
  console.log(filterNumeric);

  return (
    <table>
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
        {filteredFinal.map((element, index) => (
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
