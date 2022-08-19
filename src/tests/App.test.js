import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import PlanetProvider from '../context/PlanetProvider';

describe('Teste do Projeto Starwars', () => {
  beforeEach(() => {
    render(
      <PlanetProvider>
        <App/>
      </PlanetProvider>
    )
  });

  it('Verifica o cabeçalho do componente Table', () => {
    screen.getByRole('columnheader', {  name: /name/i});
    screen.getByRole('columnheader', {  name: /rotation period/i});
    screen.getByRole('columnheader', {  name: /orbital period/i});
    screen.getByRole('columnheader', {  name: /diameter/i});
    screen.getByRole('columnheader', {  name: /climate/i});
    screen.getByRole('columnheader', {  name: /gravity/i});
    screen.getByRole('columnheader', {  name: /terrain/i});
    screen.getByRole('columnheader', {  name: /surface water/i});
    screen.getByRole('columnheader', {  name: /population/i});
    screen.getByRole('columnheader', {  name: /films/i});
    screen.getByRole('columnheader', {  name: /created/i});
    screen.getByRole('columnheader', {  name: /edited/i});
    screen.getByRole('columnheader', {  name: /url/i});
  });

  it('Verifica os inputs do componente Table', () => {
    screen.getByTestId('name-filter');
    screen.getByTestId('column-filter');
    screen.getByTestId('comparison-filter');
    screen.getByTestId('value-filter');
    screen.getByTestId('button-filter');
    screen.getByTestId('button-remove-filters');
  })
})