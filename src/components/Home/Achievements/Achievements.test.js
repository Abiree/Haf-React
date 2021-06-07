import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Achievements from './Achievements';

describe('<Achievements />', () => {
  test('it should mount', () => {
    render(<Achievements />);
    
    const achievements = screen.getByTestId('Achievements');

    expect(achievements).toBeInTheDocument();
  });
});