import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CarbonCredit from './CarbonCredit';

describe('<CarbonCredit />', () => {
  test('it should mount', () => {
    render(<CarbonCredit />);
    
    const carbonCredit = screen.getByTestId('CarbonCredit');

    expect(carbonCredit).toBeInTheDocument();
  });
});