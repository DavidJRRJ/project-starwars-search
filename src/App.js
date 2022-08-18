import React from 'react';
import './App.css';
import SearchName from './components/SearchName';
import SearchNumber from './components/SearchNumber';
import Table from './components/Table';
import PlanetProvider from './context/PlanetProvider';

function App() {
  return (
    <div>
      <PlanetProvider>
        <SearchName />
        <SearchNumber />
        <Table />
      </PlanetProvider>
    </div>
  );
}

export default App;
