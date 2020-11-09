let gridResolution = 16;
generateGrid();

const getNumberOfSquares = document.getElementById("grid")
getNumberOfSquares.addEventListener("click", () => {
  gridResolution = prompt("Choose the resolution of the SketchPad Between 2 and 100.")
  generateGrid();
});


function generateGrid() {
  const sketchPad = document.getElementById("container");
  let pixelSize = 800 / gridResolution;

  sketchPad.innerHTML = ""; // Limpia los divs creados previamente.
  
  for (let i = 0; i < gridResolution; i++) { //Genera el Sketchpad
    for (let j = 0; j < gridResolution; j++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.setAttribute("style", `heigth: ${pixelSize}px; width: ${pixelSize}px`);
      sketchPad.appendChild(pixel);
    }
  }
};