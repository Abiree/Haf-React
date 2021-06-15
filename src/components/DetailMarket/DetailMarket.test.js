import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DetailMarket from './DetailMarket';

describe('<DetailMarket />', () => {
  test('it should mount', () => {
    render(<DetailMarket />);
    
    const detailMarket = screen.getByTestId('DetailMarket');

    expect(detailMarket).toBeInTheDocument();
  });
});