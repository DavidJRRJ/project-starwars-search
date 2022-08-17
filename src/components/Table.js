import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

function Table() {
  const { planets } = useContext(PlanetContext);
  // console.log(planets);
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
        {Object.keys(planets).map((keys) => (
          <tr key={ keys }>
            <td>{planets[keys].name}</td>
            <td>{planets[keys].rotation_period}</td>
            <td>{planets[keys].orbital_period}</td>
            <td>{planets[keys].diameter}</td>
            <td>{planets[keys].climate}</td>
            <td>{planets[keys].gravity}</td>
            <td>{planets[keys].terrain}</td>
            <td>{planets[keys].surface_water}</td>
            <td>{planets[keys].population}</td>
            <td>{planets[keys].films}</td>
            <td>{planets[keys].created}</td>
            <td>{planets[keys].edited}</td>
            <td>{planets[keys].url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
