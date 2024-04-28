export const checker = {
    check: function(grid) {
        const rows = new Array(9).fill(0).map(() => new Set());
        const cols = new Array(9).fill(0).map(() => new Set());
        const squares = new Array(9).fill(0).map(() => new Set());

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                const value = grid[i][j];
                const squareIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (value !== "") {
                    if (rows[i].has(value) || cols[j].has(value) || squares[squareIndex].has(value)) {
                        return {valid: false, row: i, col: j};
                    }
                    rows[i].add(value);
                    cols[j].add(value);
                    squares[squareIndex].add(value);
                }
            }
        }
        return {valid: true};
    }
};
