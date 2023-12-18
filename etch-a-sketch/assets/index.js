const container = document.getElementsByClassName("container")[0];

document.body.setAttribute("style", "padding: 0; margin: 0; box-sizing: border-box;");

container.setAttribute("style", "display: flex; flex-wrap: wrap; width: 342px; margin: 60px auto 0px;");

for (let i = 0; i < 1024; i++) {
  const newBox = document.createElement("div");
  container.appendChild(newBox);
  newBox.setAttribute("style", "width: 9.3px; height: 9.3px;border: 1px solid;");
  newBox.setAttribute("class", "box");
}

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("mouseenter", () => {
    box.style.backgroundColor = "blue";
  });
});
