import Logic from 'logic-solver';

export const solver = {
    solve: function(grid) {
        const solver = new Logic.Solver();

        // Generate variable names for each cell and each possible number (1-9)
        let cellVars = {};
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                cellVars[`cell_${i}_${j}`] = Array.from({length: 9}, (_, num) => `cell_${i}_${j}_${num + 1}`);
                // Each cell can only hold one number
                solver.require(Logic.exactlyOne(cellVars[`cell_${i}_${j}`]));
            }
        }

        // Constraints for rows, columns, and blocks
        for (let num = 1; num <= 9; num++) {
            for (let i = 0; i < 9; i++) {
                let rowVars = [];
                let colVars = [];
                let blockVars = [];

                for (let j = 0; j < 9; j++) {
                    rowVars.push(cellVars[`cell_${i}_${j}`][num - 1]);
                    colVars.push(cellVars[`cell_${j}_${i}`][num - 1]);

                    let blockIndex = 3 * Math.floor(i / 3) + Math.floor(j / 3);
                    let blockPos = 3 * (i % 3) + (j % 3);
                    blockVars.push(cellVars[`cell_${blockIndex}_${blockPos}`][num - 1]);
                }

                // Enforce that each number appears exactly once per row, column, and block
                solver.require(Logic.exactlyOne(rowVars));
                solver.require(Logic.exactlyOne(colVars));
                solver.require(Logic.exactlyOne(blockVars));
            }
        }

        // Add constraints for initially filled cells
        grid.forEach((row, i) => {
            row.forEach((num, j) => {
                if (num > 0) {
                    solver.require(cellVars[`cell_${i}_${j}`][num - 1]);
                }
            });
        });

        // Solve the puzzle
        const solution = solver.solve();
        if (!solution) {
            console.error("No solution found.");
            return null;
        }

        // Translate the solution back to grid format
        return grid.map((row, i) =>
            row.map((_, j) =>
                1 + cellVars[`cell_${i}_${j}`].findIndex(varName => solution.evaluate(varName))
            )
        );
    }
};
