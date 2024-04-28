import React from 'react';
import './SudokuGrid.css';

import SudokuCell from './SudokuCell';

function SudokuGrid() {
    return (
        <div className="sudoku-grid">
            {Array.from({ length: 9 }, (_, row) => (
                <div key={row} className="row">
                    {Array.from({ length: 9 }, (_, col) => (
                        <SudokuCell key={col} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default SudokuGrid;
