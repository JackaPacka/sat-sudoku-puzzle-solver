import React from 'react';
import './SudokuGrid.css';

import SudokuCell from './SudokuCell';

function SudokuGrid({ grid, setGrid }) {
    const handleCellValueChange = (rowIndex, colIndex, value) => {
        const newGrid = grid.slice();
        newGrid[rowIndex][colIndex] = value;
        setGrid(newGrid);
    };

    return (
        <div className="sudoku-grid">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, colIndex) => (
                        <SudokuCell
                            key={`${rowIndex}-${colIndex}`}
                            value={cell}
                            onChange={(value) => handleCellValueChange(rowIndex, colIndex, value)}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default SudokuGrid;
