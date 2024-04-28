import React from 'react';
import './SudokuCell.css';

function SudokuCell({ value, onChange, error }) {
    return (
        <input
            type="number"
            className={`cell ${error ? 'error' : ''}`}
            value={value || ''}
            onChange={(e) => onChange(e.target.value)}
            min="1"
            max="9"
        />
    );
}

export default SudokuCell;
