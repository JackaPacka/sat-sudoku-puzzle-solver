import React, { useState, useEffect } from 'react';
import './SudokuPuzzle.css';

import SudokuGrid from './SudokuGrid';
import Overlay from './Overlay';

import { generator } from "../function/sudokuGenerator";
import { solver } from "../function/sudokuSolver";
import { checker } from "../function/sudokuChecker";

function SudokuPuzzle() {
    const [grid, setGrid] = useState([]);
    const [overlay, setOverlay] = useState({ show: false, message: '', options: [] });

    useEffect(() => {
        handleGenerate();
    }, []);

    const handleGenerate = () => {
        const newPuzzle = generator.generate();
        setGrid(newPuzzle);
        setOverlay({ show: false, message: '', options: [] });
    };

    const handleSolve = () => {
        const solvedPuzzle = solver.solve(grid);
        if (solvedPuzzle) {
            setGrid(solvedPuzzle);
        } else {
            console.error('No solution exists for the current Sudoku puzzle.');
        }
    };

    const handleCheck = () => {
        const result = checker.check(grid);
        if (result.valid) {
            setOverlay({ show: true, message: 'Congratulations! Puzzle solved correctly.', options: [
                    { label: 'OK', action: () => setOverlay({ show: false, message: '', options: [] }) },
                    { label: 'New Puzzle', action: handleGenerate }
                ]});
        } else {
            setOverlay({ show: true, message: 'Some entries are incorrect.', options: [
                    { label: 'Try Again', action: () => setOverlay({ show: false, message: '', options: [] }) }
                ]});
        }
    };

    const handleClear = () => {
        const clearedGrid = grid.map(row => row.map(cell => (typeof cell === 'number') ? '' : cell));
        setGrid(clearedGrid);
    };

    return (
        <div className="SudokuPuzzle">
            <h1>Sudoku Puzzle</h1>
            <SudokuGrid grid={grid} setGrid={setGrid} />

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
