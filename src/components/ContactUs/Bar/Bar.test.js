import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Bar from './Bar';

describe('<Bar />', () => {
  test('it should mount', () => {
    render(<Bar />);
    
    const bar = screen.getByTestId('Bar');

    expect(bar).toBeInTheDocument();
  });
});