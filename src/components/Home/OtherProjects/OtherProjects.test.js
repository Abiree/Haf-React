import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OtherProjects from './OtherProjects';

describe('<OtherProjects />', () => {
  test('it should mount', () => {
    render(<OtherProjects />);
    
    const otherProjects = screen.getByTestId('OtherProjects');

    expect(otherProjects).toBeInTheDocument();
  });
});