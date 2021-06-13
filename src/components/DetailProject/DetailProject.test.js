import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DetailProject from './DetailProject';

describe('<DetailProject />', () => {
  test('it should mount', () => {
    render(<DetailProject />);
    
    const detailProject = screen.getByTestId('DetailProject');

    expect(detailProject).toBeInTheDocument();
  });
});