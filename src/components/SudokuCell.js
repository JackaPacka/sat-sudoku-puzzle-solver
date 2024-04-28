import React from 'react';
import './SudokuCell.css';

function SudokuCell({ value, onChange, disabled }) {
    return (
        <input
            className={`cell ${disabled ? 'not-editable' : ''}`}
            type="text"
            maxLength="1"
            value={value}
            onChange={(e) => onChange(e.target.value.replace(/[^1-9]/g, ''))}
            disabled={disabled}
        />
    );
}

export default SudokuCell;
