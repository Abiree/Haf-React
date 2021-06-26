import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Donationpop from './Donationpop';

describe('<Donationpop />', () => {
  test('it should mount', () => {
    render(<Donationpop />);
    
    const donationpop = screen.getByTestId('Donationpop');

    expect(donationpop).toBeInTheDocument();
  });
});