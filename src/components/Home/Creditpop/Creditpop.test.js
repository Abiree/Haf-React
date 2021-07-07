import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Creditpop from './Creditpop';

describe('<Creditpop />', () => {
  test('it should mount', () => {
    render(<Creditpop />);
    
    const creditpop = screen.getByTestId('Creditpop');

    expect(creditpop).toBeInTheDocument();
  });
});