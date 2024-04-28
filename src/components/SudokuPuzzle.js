import React, { useState, useEffect } from 'react';
import './SudokuPuzzle.css';

import SudokuGrid from './SudokuGrid';
import Overlay from './Overlay';

import { generator } from "../function/sudokuGenerator";
import { solver } from "../function/sudokuSolver";

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
            const updatedGrid = grid.map((row, i) =>
                row.map((cell, j) => cell === '' ? solvedPuzzle[i][j].toString() : cell)
            );
            setGrid(updatedGrid);
        } else {
            setOverlay({ show: true, message: 'Could not find a solution.', options: [
                    { label: 'Okay :(', action: () => setOverlay({ show: false, message: '', options: [] }) }
            ]});
        }
    };

    const handleClear = () => {
        setOverlay({ show: true, message: 'Are you sure you want to clear the puzzle?', options: [
                { label: 'Yes', action: () => {
                        const clearedGrid = grid.map((row, _) =>
                            row.map((_, __) => '')
                        );
                        setGrid(clearedGrid);
                        setOverlay({ show: false, message: '', options: [] });
                    }
                },
                { label: 'No', action: () => setOverlay({ show: false, message: '', options: [] }) }
        ]});
    };

    return (
        <div className="SudokuPuzzle">
            <h1>Sudoku Puzzle</h1>
            <SudokuGrid grid={grid} setGrid={setGrid} />

            <div className="controls">
                <button onClick={handleGenerate}>New Puzzle</button>
                <button onClick={handleClear}>Clear</button>
                <button onClick={handleSolve}>Solve</button>
            </div>

            {overlay.show && <Overlay message={overlay.message} options={overlay.options} />}
        </div>
    );
}

export default SudokuPuzzle;
