var setZeroes = function (matrix) {
  const columns = new Set();
  const rows = new Set();

  matrix.forEach((row, i) => {
    row.forEach((value, j) => {
      if (value === 0) {
        columns.add(i);
        rows.add(j);
      }
    });
  });

  [...columns].forEach((i) => matrix[i].forEach((_, j) => (matrix[i][j] = 0)));
  matrix.forEach((_, i) => [...rows].forEach((j) => (matrix[i][j] = 0)));

  return matrix;
};

var setZeroes = function (matrix) {
  let zeroPos = [];

  // find positions of 0 in matrix
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        zeroPos.push([i, j]);
      }
    }
  }

  // set that position rows and cols to 0
  for (let i = 0; i < zeroPos.length; i++) {
    let [row, col] = zeroPos[i];
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[row][i] = 0;
    }
  }
};
