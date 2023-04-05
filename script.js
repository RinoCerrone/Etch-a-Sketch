function makeDivs(numDivs) {
  const containerDiv = document.createElement("div");
  containerDiv.className = "child-divs-container";
  for (let i = 0; i < numDivs; ++i) {
    const childDiv = document.createElement("div");
    childDiv.className = "child-divs";
    containerDiv.appendChild(childDiv);
  }
  return containerDiv;
}

const numDivs = 256;
const containerDiv = makeDivs(numDivs);
document.getElementById("main-content").appendChild(containerDiv);


let mouseDown = false;

document.querySelectorAll(".child-divs").forEach((div) => {
  div.addEventListener("mousedown", () => {
    mouseDown = true;
  });
  div.addEventListener("mousemove", () => {
    if (mouseDown) {
      div.style.backgroundColor = "black";
    }
  });
  div.addEventListener("mouseup", () => {
    mouseDown = false;
  });
  div.addEventListener("click", () => {
    div.style.backgroundColor = "black";
  });
});
