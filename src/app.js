let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let darkbtn = document.querySelector("#dark-btn");
let msg = document.querySelector("#msg");

let turn0 = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;
    checkwinner();
  });
});
const checkwinner = () => {
  for (let patterns of winPatterns) {
    let p1 = boxes[patterns[0]].innerText;
    let p2 = boxes[patterns[1]].innerText;
    let p3 = boxes[patterns[2]].innerText;

    if (p1 != "" && p2 != "" && p3 != "") {
      if (p1 === p2 && p2 === p3) {
        showwinner(p1);
      }
    }
  }
};
const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const showwinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msg.classList.remove("hide");
  disabledBoxes();
};
const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msg.classList.add("hide");
};

const dark = () => {
  document.body.classList.toggle("dark");
};
reset.addEventListener("click", resetGame);
darkbtn.addEventListener("click", dark);
