const gameOver = (result) => {
  const body = document.querySelector("body");
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const button = document.createElement("button");
  body.appendChild(div);
  div.appendChild(h2);
  div.appendChild(button);
  button.innerText = "OK";
  button.addEventListener("click", () => {
    div.remove();
  });
  div.classList.add("notification");
  if (result == 1) {
    h2.innerText = "X win";
  } else if (result == 2) {
    h2.innerText = "O win";
  } else if (result == 0) {
    h2.innerText = "It's cats game";
  }
};

export default gameOver;
// 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:
