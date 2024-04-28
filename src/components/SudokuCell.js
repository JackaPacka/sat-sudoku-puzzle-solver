import React from 'react';
import './SudokuCell.css';

function SudokuCell({ value, onChange }) {
    return (
        <input
            className={`cell ${value !== '' ? 'not-editable' : ''}`}
            type="text"
            maxLength="1"
            value={value}
            onChange={(e) => onChange(e.target.value.replace(/[^1-9]/g, ''))}
            disabled={value !== ''}
        />
    );
}

export default SudokuCell;
