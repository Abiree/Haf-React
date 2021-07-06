import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Treepop from './Treepop';

describe('<Treepop />', () => {
  test('it should mount', () => {
    render(<Treepop />);
    
    const treepop = screen.getByTestId('Treepop');

    expect(treepop).toBeInTheDocument();
  });
});