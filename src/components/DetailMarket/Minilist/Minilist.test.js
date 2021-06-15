import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Minilist from './Minilist';

describe('<Minilist />', () => {
  test('it should mount', () => {
    render(<Minilist />);
    
    const minilist = screen.getByTestId('Minilist');

    expect(minilist).toBeInTheDocument();
  });
});