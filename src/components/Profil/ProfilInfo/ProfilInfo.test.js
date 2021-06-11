import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProfilInfo from './ProfilInfo';

describe('<ProfilInfo />', () => {
  test('it should mount', () => {
    render(<ProfilInfo />);
    
    const profilInfo = screen.getByTestId('ProfilInfo');

    expect(profilInfo).toBeInTheDocument();
  });
});