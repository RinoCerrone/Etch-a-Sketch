function makeDivs(numDivs, divSize) {
  const containerDiv = document.createElement("div");
  containerDiv.className = "child-divs-container";
  containerDiv.style.width = containerDiv.style.height = `${numDivs * divSize}px`;
  
  for (let i = 0; i < numDivs * numDivs; ++i) {
    const childDiv = document.createElement("div");
    childDiv.className = "child-divs";
    childDiv.style.width = childDiv.style.height = `${divSize}px`;
    containerDiv.appendChild(childDiv);
  }
  
  return containerDiv;
}

const sizeSlider = document.getElementById("sizeSlider");
const containerDiv = document.getElementById("main-content");
const defaultNumDivs = 8;
const defaultDivSize = 64;
let numDivs = defaultNumDivs;
let divSize = defaultDivSize;

function updateGrid() {
  
  if(sizeSlider.value==1)numDivs=8;
  if(sizeSlider.value==2)numDivs=16;
  if(sizeSlider.value==3)numDivs=32;
  if(sizeSlider.value==4)numDivs=64;

  divSize = 480 / numDivs;
  containerDiv.innerHTML = "";
  containerDiv.appendChild(makeDivs(numDivs, divSize));
}

updateGrid();

sizeSlider.addEventListener("input", updateGrid);


let mouseDown = false;
const blackButton = document.getElementById("black-button");

blackButton.addEventListener("click", function() {
  const childDivs = document.querySelectorAll(".child-divs");

  childDivs.forEach(function(div) {
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
});
const clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", function() {
  const childDivs = document.querySelectorAll(".child-divs");

  childDivs.forEach(function(div) {
    div.style.backgroundColor = "white";
  });
});

const randomButton = document.getElementById("random-button");

randomButton.addEventListener("click", function() {
  const childDivs = document.querySelectorAll(".child-divs");

  childDivs.forEach(function(div) {
    div.addEventListener("mousedown", () => {
      mouseDown = true;
    });
    div.addEventListener("mousemove", () => {
      if (mouseDown) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        if(randomColor!="000")div.style.backgroundColor = "#" + randomColor;
      }
    });
    div.addEventListener("mouseup", () => {
      mouseDown = false;
    });
    div.addEventListener("click", () => {
      const randomColor = Math.floor(Math.random()*16777215).toString(16);
      div.style.backgroundColor = "#" + randomColor;
  });
 });
});
const eraserButton = document.getElementById("eraser-button");

eraserButton.addEventListener("click", function() {
  const childDivs = document.querySelectorAll(".child-divs");

  childDivs.forEach(function(div) {
    div.addEventListener("mousedown", () => {
      mouseDown = true;
    });
    div.addEventListener("mousemove", () => {
      if (mouseDown) {
        div.style.backgroundColor = "white";
      }
    });
    div.addEventListener("mouseup", () => {
      mouseDown = false;
    });
    div.addEventListener("click", () => {
      
      div.style.backgroundColor = "white";
  });
 });
});

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((otherButton) => {
      otherButton.classList.remove("clicked");
    });
    button.classList.add("clicked");
  });
});




