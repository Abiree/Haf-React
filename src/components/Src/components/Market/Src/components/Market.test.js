import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Src/components/Market from './Src/components/Market';

describe('<Src/components/Market />', () => {
  test('it should mount', () => {
    render(<Src/components/Market />);
    
    const srcComponentsMarket = screen.getByTestId('Src/components/Market');

    expect(srcComponentsMarket).toBeInTheDocument();
  });
});