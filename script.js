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
const shadingButton = document.getElementById("shading-button");

shadingButton.addEventListener("click", function() {
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

