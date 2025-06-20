let btn = document.querySelector("button");
let div = document.querySelector("div");

let h3 = document.createElement("h3");

btn.addEventListener("click", function () {
  let randomColor = getRandomColor();
  div.style.backgroundColor = randomColor;
  btn.after(h3);
  h3.innerText = "RGB Code: " + randomColor;
});

function getRandomColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
}
