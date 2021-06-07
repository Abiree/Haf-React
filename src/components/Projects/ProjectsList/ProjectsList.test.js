import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProjectsList from './ProjectsList';

describe('<ProjectsList />', () => {
  test('it should mount', () => {
    render(<ProjectsList />);
    
    const projectsList = screen.getByTestId('ProjectsList');

    expect(projectsList).toBeInTheDocument();
  });
});