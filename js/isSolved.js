export const isSolved = (board) => {
  let merged = [].concat(board).join(",").split(",");
  let column1 = [];
  let column2 = [];
  let column3 = [];
  let diagonal1 = [];
  let diagonal2 = [];

  let i = 0;
  for (let line of board) {
    column1.push(line[0]);
    column2.push(line[1]);
    column3.push(line[2]);
    diagonal1.push(line[0 + i]);
    diagonal2.push(line[2 - i]);
    i++;
  }

  let columns = [].concat(
    [column1],
    [column2],
    [column3],
    [diagonal1],
    [diagonal2],
    board
  );

  for (let column of columns) {
    if (column.reduce((a, b) => a + b, 0) === 6) {
      return 2;
    } else if (
      column.reduce((a, b) => a + b, 0) === 3 &&
      column.indexOf(0) == -1
    ) {
      return 1;
    }
  }

  if (merged.includes("0")) {
    return -1;
  } else {
    return 0;
  }
};

export default isSolved;
