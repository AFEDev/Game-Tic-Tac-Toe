import isSolved from "./isSolved.js";
import gameOver from "./gameOver.js";

let mainArray = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

const cells0 = document.querySelectorAll(".row-1 .cell");
const cells2 = document.querySelectorAll(".row-2 .cell");
const cells3 = document.querySelectorAll(".row-3 .cell");

const buttons = (cells1, lineNumber) => {
  for (let i = 0; i < cells1.length; i++) {
    cells1[i].addEventListener("click", () => {
      console.log(isSolved(mainArray));
      console.log(mainArray);

      if (cells1[i].innerHTML == "") {
        let merged = [].concat(mainArray).join(",").split(",");

        if (
          merged.filter((item) => item == "1").length >
          merged.filter((item) => item == "2").length
        ) {
          let textOver = document.createTextNode("O");
          cells1[i].appendChild(textOver);
          mainArray[lineNumber][i] = 2;
          if (isSolved(mainArray) === 2) {
            return (mainArray = gameOver(2));
          }
        } else if (
          merged.filter((item) => item === "1").length ==
          merged.filter((item) => item === "2").length
        ) {
          let textOver = document.createTextNode("X");
          cells1[i].appendChild(textOver);
          mainArray[lineNumber][i] = 1;

          if (isSolved(mainArray) === 1) {
            return (mainArray = gameOver(1));
          } else if (isSolved(mainArray) === 0) {
           // mainArray = mainArray = gameOver(0);
            return (mainArray = gameOver(0));
          }
        }
      }
    });
  }
};

buttons(cells0, 0);
buttons(cells2, 1);
buttons(cells3, 2);

console.log(isSolved(mainArray));

// 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// else {
//   gameOver(0);
// }
