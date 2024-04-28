import Logic from 'logic-solver';

export const solver = {
    solve: function(grid) {
        const logicSolver = new Logic.Solver();
        let variables = [];

        // Each cell gets 9 variables (one for each possible number)
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                for (let num = 1; num <= 9; num++) {
                    variables.push(`cell_${i}_${j}_${num}`);
                }
            }
        }

        // Add constraints for all rows, columns, and squares
        variables.forEach(v => logicSolver.require(Logic.exactlyOne(variables)));

        // Pre-fill the known values from the grid
        grid.forEach((row, i) => {
            row.forEach((val, j) => {
                if (val) logicSolver.require(`cell_${i}_${j}_${val}`);
            });
        });

        const solution = logicSolver.solve();
        if (!solution) return null;  // No solution found

        // Convert the solution back to a 2D array
        return grid.map((row, i) => row.map((_, j) => {
            for (let num = 1; num <= 9; num++) {
                if (solution.evaluate(`cell_${i}_${j}_${num}`)) return num;
            }
        }));
    }
};
