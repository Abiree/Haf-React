import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodaysProject from './TodaysProject';

describe('<TodaysProject />', () => {
  test('it should mount', () => {
    render(<TodaysProject />);
    
    const todaysProject = screen.getByTestId('TodaysProject');

    expect(todaysProject).toBeInTheDocument();
  });
});