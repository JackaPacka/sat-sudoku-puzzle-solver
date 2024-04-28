import Logic from 'logic-solver';

export const solver = {
    solve: function(grid) {
        // The logic solver library I'm using
        const solver = new Logic.Solver();

        // This just generates all the variable names for each possible number which is 1-9
        let cellVars = {};
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                cellVars[`cell_${i}_${j}`] = Array.from({length: 9}, (_, num) => `cell_${i}_${j}_${num + 1}`);
                solver.require(Logic.exactlyOne(cellVars[`cell_${i}_${j}`]));
            }
        }

        // Rules for the rows, columns, and blocks
        // This just tells the solver that each number must appear exactly once in all rows, columns, and blocks
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

        // FAILED TO FIND A SOLUTION BRUH!
        const solution = solver.solve();
        if (!solution) {
            return null;
        }

        // Translates the solvers output into a 2d array so I can display it in the UI
        return grid.map((row, i) =>
            row.map((_, j) =>
                1 + cellVars[`cell_${i}_${j}`].findIndex(varName => solution.evaluate(varName))
            )
        );
    }
};
