import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { DataGrid } from '../index';

test('Rendering Data Grid Component', () => {
     render(<DataGrid />);
     const dataGridElement = screen.getByText(/Solution Champs/i);
     expect(dataGridElement).toBeInTheDocument();
});
