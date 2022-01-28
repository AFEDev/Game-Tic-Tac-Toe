const cell11 = document.querySelector(".cell11");

function isSolved(board) {
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
}

let mainArray = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const cells1 = document.querySelectorAll(".row-1 .cell");
const cells2 = document.querySelectorAll(".row-2 .cell");
const cells3 = document.querySelectorAll(".row-3 .cell");

const buttons = (cells1, lineNumber) => {
  for (let i = 0; i < cells1.length; i++) {
    cells1[i].addEventListener("click", () => {
      console.log(isSolved(mainArray));

      if (cells1[i].innerHTML == "") {
        let merged = [].concat(mainArray).join(",").split(",");

        if (
          merged.filter((item) => item == "1").length >
          merged.filter((item) => item == "2").length
        ) {
          let textOver = document.createTextNode("O");
          cells1[i].appendChild(textOver);
          mainArray[lineNumber][i] = 2;
          if (isSolved(mainArray) == 2) {
            return console.log("laimejo 0");
          }
        } else {
          let textOver = document.createTextNode("X");
          cells1[i].appendChild(textOver);
          mainArray[lineNumber][i] = 1;

          if (isSolved(mainArray) == 1) {
            return console.log("laimejo X");
          }
        }
      } else {
        console.log("Lygiosios");
      }
    });
  }
};

buttons(cells1, 0);
buttons(cells2, 1);
buttons(cells3, 2);

// if (isSolved(mainArray) == 1) {
//   console.log("laimejo 1")
// } else if (isSolved(mainArray) == 2) {
//   console.log("laimejo 2")
// } else {
//   console.log("tesiam")
// }

console.log(isSolved(mainArray));

// 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:
