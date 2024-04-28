import React, { useState } from 'react';
import './SudokuPuzzle.css';

import SudokuGrid from './SudokuGrid';
import Overlay from './Overlay';
/*
import {sudokuGenerator} from "../function/sudokuGenerator";
import {sudokuSolver} from "../function/sudokuSolver";
import {checkSudoku} from "../function/sudokuChecker";
*/

function SudokuPuzzle() {
    const [overlay] = useState({ show: false, message: '', options: [] });

    const handleGenerate = () => {
        console.log("TODO: handleGenerate");
    };

    const handleSolve = () => {
        console.log("TODO: handleSolve");
    };

    const handleCheck = () => {
        console.log("TODO: handleCheck");
    };

    const handleClear = () => {
        console.log("TODO: handleClear");
    };

    return (
        <div className="SudokuPuzzle">
            <h1>Sudoku Puzzle</h1>

            <SudokuGrid />

            <div className="controls">
                <button onClick={handleGenerate}>Generate</button>
                <button onClick={handleClear}>Clear</button>
                <button onClick={handleCheck}>Check</button>
                <button onClick={handleSolve}>Solve</button>
            </div>

            {overlay.show && <Overlay message={overlay.message} options={overlay.options} />}
        </div>
    );
}

export default SudokuPuzzle;
