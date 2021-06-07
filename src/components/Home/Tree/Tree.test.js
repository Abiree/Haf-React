import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Tree from './Tree';

describe('<Tree />', () => {
  test('it should mount', () => {
    render(<Tree />);
    
    const tree = screen.getByTestId('Tree');

    expect(tree).toBeInTheDocument();
  });
});