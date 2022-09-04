import React, { useContext, useEffect, useState } from 'react';
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

  const singleFilterRemove = (filter) => {
    const removeFilter = filterNumeric.filter(
      (element) => element.column !== filter,
    );
    setNumeric(removeFilter);
  };

  const filterRemove = () => {
    setNumeric([]);
  };

  const columnRepeatFilter = columnFilter.filter(
    (cln) => !filterNumeric.some((element) => cln === element.column),
  );

  useEffect(() => {
    setNumFilter((prev) => ({ ...prev, column: columnRepeatFilter[0] }));
  }, [filterNumeric]);

  return (
    <section className="search-number">
      <label htmlFor="column">
        Filtros:
        <select
          data-testid="column-filter"
          name="column"
          value={ column }
          className="filter-numeric"
          onChange={ (e) => setNumFilter({ ...numFilter, column: e.target.value }) }
        >
          {columnRepeatFilter.map((coluna) => (
            <option key={ coluna } value={ coluna }>
              {coluna}
            </option>
          ))}
        </select>
      </label>
      <select
        data-testid="comparison-filter"
        className="filter-numeric"
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
        className="filter-numeric"
        name="value"
        value={ value }
        onChange={ (e) => setNumFilter({ ...numFilter, value: e.target.value }) }
      />
      <button
        type="button"
        className="filter-numeric"
        data-testid="button-filter"
        name="btnFilter"
        onClick={ () => setNumeric([...filterNumeric, numFilter]) }
      >
        Filtrar
      </button>
      <button
        type="button"
        className="filter-numeric"
        data-testid="button-remove-filters"
        onClick={ filterRemove }
      >
        Remover Filtros
      </button>
      {filterNumeric
        && filterNumeric.map((element) => (
          <div key={ element.column } data-testid="filter">
            <span
              className="filter-numeric"
            >
              {`${element.column} ${element.comparison} ${element.value}`}
            </span>
            <button
              className="filter-numeric"
              type="button"
              onClick={ () => singleFilterRemove(element.column) }
            >
              Remover
            </button>
          </div>
        ))}
    </section>
  );
}

export default SearchNumber;
