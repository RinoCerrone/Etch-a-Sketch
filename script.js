function makeDivs(numDivs) {
    const containerDiv = document.createElement("div");
    containerDiv.className = "child-divs-container";
        for (let i = 0; i < numDivs; ++i){
            const childDiv = document.createElement('div');
            childDiv.className="child-divs";
            containerDiv.appendChild(childDiv)    
            }
        return containerDiv;
}
const numDivs = 126;
const containerDiv = makeDivs(numDivs);
document.getElementById("main-content").appendChild(containerDiv);   