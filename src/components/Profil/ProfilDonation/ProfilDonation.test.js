import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProfilDonation from './ProfilDonation';

describe('<ProfilDonation />', () => {
  test('it should mount', () => {
    render(<ProfilDonation />);
    
    const profilDonation = screen.getByTestId('ProfilDonation');

    expect(profilDonation).toBeInTheDocument();
  });
});