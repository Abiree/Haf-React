import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QA from './QA';

describe('<QA />', () => {
  test('it should mount', () => {
    render(<QA />);
    
    const qa = screen.getByTestId('QA');

    expect(qa).toBeInTheDocument();
  });
});