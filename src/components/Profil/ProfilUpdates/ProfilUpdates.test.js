import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProfilUpdates from './ProfilUpdates';

describe('<ProfilUpdates />', () => {
  test('it should mount', () => {
    render(<ProfilUpdates />);
    
    const profilUpdates = screen.getByTestId('ProfilUpdates');

    expect(profilUpdates).toBeInTheDocument();
  });
});