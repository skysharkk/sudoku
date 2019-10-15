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

module.exports = function solveSudoku(matrix) {

    let emptyPosition = extractEmptyPosition (matrix);

    for (let i = 0; i < emptyPosition.length;) {

        let row = emptyPosition[i][0];
        let column = emptyPosition[i][1];
        let value = matrix[row][column] + 1;
        let status = false;

        while (!status && value <= 9) {

            if (checker(matrix, column, row, value)) {

                matrix[row][column] = value;
                i++;
                status = true;
            } else {

                value++;
            }
        }

        if (!status) {

            matrix[row][column] = 0;
            i--;
        }
    }

    return matrix;
}





