module.exports = function solveSudoku(matrix) {

}

function extractEmptyPosition (matrix) {

    let emptyPosition = [];

    matrix.forEach((item, index) => {
        let firstIndex = index;
        item.forEach((item, index) => {
            if (item === 0) {
                emptyPosition.push([firstIndex, index]);
            }
        })

    });

    return emptyPosition;
}

function checkRow (matrix, row, value) {

    let result = matrix[row].find(item => item === value);
    return result === undefined;
}

function checkColumn (matrix, column, value) {

    let result = matrix.find(item => item[column] === value);
    return result === undefined;
}

function checkSquare (matrix, column, row, value) {

    let startRowIndexSquare = 0;
    let startColumnIndexSquare = 0;
    let sizeSquare = 3;

    while (row >= startRowIndexSquare + sizeSquare) {
        startRowIndexSquare += sizeSquare;
    }

    while (column >= startColumnIndexSquare + sizeSquare) {
        startColumnIndexSquare += sizeSquare;
    }

    for (let i = startRowIndexSquare; i < startRowIndexSquare + sizeSquare; i++) {

        for (let j = startColumnIndexSquare; j < startColumnIndexSquare + sizeSquare; j++) {

            if (matrix[i][j] === value) {

                return false;
            }
        }
    }
    return true;
}


function checker(matrix, column, row, value) {

        return checkRow (matrix, row, value) && checkColumn (matrix, column, value) && checkSquare(matrix, column, row, value);
}

const initial = [
    [6, 5, 0, 7, 3, 0, 0, 8, 0],
    [0, 0, 0, 4, 8, 0, 5, 3, 0],
    [8, 4, 0, 9, 2, 5, 0, 0, 0],
    [0, 9, 0, 8, 0, 0, 0, 0, 0],
    [5, 3, 0, 2, 0, 9, 6, 0, 0],
    [0, 0, 6, 0, 0, 0, 8, 0, 0],
    [0, 0, 9, 0, 0, 0, 0, 0, 6],
    [0, 0, 7, 0, 0, 0, 0, 5, 0],
    [1, 6, 5, 3, 9, 0, 4, 7, 0]
];

let res = checker (initial, 1, 1, 2);

console.log(res);