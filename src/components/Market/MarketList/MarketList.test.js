import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MarketList from './MarketList';

describe('<MarketList />', () => {
  test('it should mount', () => {
    render(<MarketList />);
    
    const marketList = screen.getByTestId('MarketList');

    expect(marketList).toBeInTheDocument();
  });
});