import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MarketBar from './MarketBar';

describe('<MarketBar />', () => {
  test('it should mount', () => {
    render(<MarketBar />);
    
    const marketBar = screen.getByTestId('MarketBar');

    expect(marketBar).toBeInTheDocument();
  });
});