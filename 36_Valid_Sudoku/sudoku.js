/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let temp = new Set([]);

    for (let i = 0; i < 9; i++) {
        temp.clear();
        for (let j = 0; j < 9; j++) {

            if (!isNaN(board[i][j]) && temp.has(board[i][j])) {
                return false;
            }
            if (!isNaN(board[i][j])) {
                temp.add(board[i][j]);
            }
        }
    }

    for (let i = 0; i < 9; i++) {
        temp.clear();
        for (let j = 0; j < 9; j++) {

            if (!isNaN(board[j][i]) && temp.has(board[j][i])) {
                return false;
            }
            if (!isNaN(board[j][i])) {
                temp.add(board[j][i]);
            }
        }
    }

    for (let i = 0; i < 9; i += 3) {
        temp.clear();
        let square = board[i].slice(0, 3).concat(board[i + 1].slice(0, 3).concat(board[i + 2].slice(0, 3)));
        for (let j = 0; j < 9; j++) {
            if (!isNaN(square[j]) && temp.has(square[j])) {
                return false;
            }
            if (!isNaN(square[j])) {
                temp.add(square[j]);
            }
        }
        temp.clear();
        square = board[i].slice(3, 6).concat(board[i + 1].slice(3, 6).concat(board[i + 2].slice(3, 6)));
        for (let j = 0; j < 9; j++) {
            if (!isNaN(square[j]) && temp.has(square[j])) {
                return false;
            }
            if (!isNaN(square[j])) {
                temp.add(square[j]);
            }
        }
        temp.clear();
        square = board[i].slice(6, 9).concat(board[i + 1].slice(6, 9).concat(board[i + 2].slice(6, 9)));
        for (let j = 0; j < 9; j++) {
            if (!isNaN(square[j]) && temp.has(square[j])) {
                return false;
            }
            if (!isNaN(square[j])) {
                temp.add(square[j]);
            }
        }
    }
    return true;
};

let tempTrue =
    [["5", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

let tempFalse =
    [["8", "3", ".", ".", "7", ".", ".", ".", "."]
        , ["6", ".", ".", "1", "9", "5", ".", ".", "."]
        , [".", "9", "8", ".", ".", ".", ".", "6", "."]
        , ["8", ".", ".", ".", "6", ".", ".", ".", "3"]
        , ["4", ".", ".", "8", ".", "3", ".", ".", "1"]
        , ["7", ".", ".", ".", "2", ".", ".", ".", "6"]
        , [".", "6", ".", ".", ".", ".", "2", "8", "."]
        , [".", ".", ".", "4", "1", "9", ".", ".", "5"]
        , [".", ".", ".", ".", "8", ".", ".", "7", "9"]]
let output = "initial";
output = isValidSudoku(tempFalse).toString();

console.log(output)


