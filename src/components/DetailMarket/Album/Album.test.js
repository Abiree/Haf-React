import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Album from './Album';

describe('<Album />', () => {
  test('it should mount', () => {
    render(<Album />);
    
    const album = screen.getByTestId('Album');

    expect(album).toBeInTheDocument();
  });
});