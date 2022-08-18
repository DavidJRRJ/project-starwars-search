import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';

function SearchNumber() {
  const { filterNumeric, setNumeric } = useContext(PlanetContext);
  const [numFilter, setNumFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });
  const columnFilter = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const comparisonFilter = ['maior que', 'menor que', 'igual a'];
  const { column, comparision, value } = numFilter;

  return (
    <section>
      <label htmlFor="column">
        Coluna:
        <select
          data-testid="column-filter"
          name="column"
          value={ column }
          onChange={ (e) => setNumFilter({ ...numFilter, column: e.target.value }) }
        >
          {columnFilter.map((coluna) => (
            <option key={ coluna } value={ coluna }>
              {coluna}
            </option>
          ))}
        </select>
      </label>
      <select
        data-testid="comparison-filter"
        name="comparison"
        value={ comparision }
        onChange={ (e) => setNumFilter({ ...numFilter, comparison: e.target.value }) }
      >
        {comparisonFilter.map((options) => (
          <option key={ options } value={ options }>
            {options}
          </option>
        ))}
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="value"
        value={ value }
        onChange={ (e) => setNumFilter({ ...numFilter, value: e.target.value }) }
      />
      <button
        type="button"
        data-testid="button-filter"
        name="btnFilter"
        onClick={ () => setNumeric([...filterNumeric, numFilter]) }
      >
        Filtro
      </button>
    </section>
  );
}

export default SearchNumber;