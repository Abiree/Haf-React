import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import UpBar from './UpBar';

describe('<UpBar />', () => {
  test('it should mount', () => {
    render(<UpBar />);
    
    const upBar = screen.getByTestId('UpBar');

    expect(upBar).toBeInTheDocument();
  });
});