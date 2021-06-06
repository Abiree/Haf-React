import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Numbers from './Numbers';

describe('<Numbers />', () => {
  test('it should mount', () => {
    render(<Numbers />);
    
    const numbers = screen.getByTestId('Numbers');

    expect(numbers).toBeInTheDocument();
  });
});