import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/index.css';

import SudokuPuzzle from './components/SudokuPuzzle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SudokuPuzzle />
  </React.StrictMode>
);
