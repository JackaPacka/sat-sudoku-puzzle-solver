import React from 'react';
import './SudokuCell.css';

function SudokuCell({ state, onChange, value = ''}) {
    return (
        <input
            className={`cell ${value !== '' ? 'not-editable' : state === 1 ? 'error' : state === 2 ? 'correct' : ''}`}
            type="text"
            maxLength="1"
            disabled={!!value}
        />
    );
}

export default SudokuCell;
