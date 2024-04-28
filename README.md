# SAT Sudoku Puzzle Solver

This project uses a SAT solver to solve Sudoku puzzles.

**Created by Jack Randolph.**

## Description

In this project, I modeled a Sudoku puzzle as a satisfiability problem. I used the "logic-solver" library, a boolean satisfiability solver implemented in JavaScript. Each cell in the Sudoku grid was represented as a set of boolean variables that corresponded to the digits **1** through **9**. The solution process involves setting up rules that make sure that each number only appears once per row, column, and grid.

My source code was written in JavaScript and uses the "logic-solver" library to define and solve the SAT model. I figured out how to dynamically generate SAT variables for each possible number in each cell. For each row, column, and block, I applied the `Logic.exactlyOne` rule from the library. This makes sure that exactly one of the given variables is true. I also added rules to bind the prefilled numbers in the grid to their respective cells, allowing it to essentially solve any valid inputted puzzle.

## How To Use

1. Select the **New Puzzle** button to "generate" a new puzzle. (These puzzles are not actually generated but are instead selected from a list of puzzles.)
2. Select the **Solve** button to see the solution to the puzzle.

You can also select the **Clear** button to clear the puzzle and input your own puzzle.
