import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Buy from './Buy';

describe('<Buy />', () => {
  test('it should mount', () => {
    render(<Buy />);
    
    const buy = screen.getByTestId('Buy');

    expect(buy).toBeInTheDocument();
  });
});