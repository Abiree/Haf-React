import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Forum from './Forum';

describe('<Forum />', () => {
  test('it should mount', () => {
    render(<Forum />);
    
    const forum = screen.getByTestId('Forum');

    expect(forum).toBeInTheDocument();
  });
});