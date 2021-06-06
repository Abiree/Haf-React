import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Filltrage from './Filltrage';

describe('<Filltrage />', () => {
  test('it should mount', () => {
    render(<Filltrage />);
    
    const filltrage = screen.getByTestId('Filltrage');

    expect(filltrage).toBeInTheDocument();
  });
});