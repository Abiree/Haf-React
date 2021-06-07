import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Carbon from './Carbon';

describe('<Carbon />', () => {
  test('it should mount', () => {
    render(<Carbon />);
    
    const carbon = screen.getByTestId('Carbon');

    expect(carbon).toBeInTheDocument();
  });
});