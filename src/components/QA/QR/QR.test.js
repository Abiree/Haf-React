import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QR from './QR';

describe('<QR />', () => {
  test('it should mount', () => {
    render(<QR />);
    
    const qr = screen.getByTestId('QR');

    expect(qr).toBeInTheDocument();
  });
});