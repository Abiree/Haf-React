import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Donate from './Donate';

describe('<Donate />', () => {
  test('it should mount', () => {
    render(<Donate />);
    
    const donate = screen.getByTestId('Donate');

    expect(donate).toBeInTheDocument();
  });
});