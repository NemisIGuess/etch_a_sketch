let gridResolution = 16;
generateGrid();
let red;
let green;
let blue;

const getResolution = document.getElementById("grid");
getResolution.addEventListener("click", () => {
  userResolution(); 
  generateGrid(); 
});

function userResolution() { // Pregunta la resolucion y comprueba que sea valida.
  gridResolution = prompt("Choose a resolution between 2 and 100.");
  if (gridResolution == undefined || gridResolution == null || gridResolution == "") {
    return;
  } else if (gridResolution < 2 || gridResolution > 100) {
    userResolution();
  } else return gridResolution;
}

const clearGrid = document.getElementById("clear");  
clearGrid.addEventListener("click", generateGrid); // Borra todo el grid y crea uno nuevo sin preguntar resolucion

const changeColor = document.getElementById("color"); 
changeColor.addEventListener("change", () => {
  switch (changeColor.value) { // Cambia los valores de las variables de color cuando se selecciona un color diferente.
    case 'black':
      red = 0;
      green = 0;
      blue = 0;
      break;
    case 'red':
      red = 120;
      green = 0;
      blue = 0;
      break;
    case 'green':
      red = 0;
      green = 120;
      blue = 0;
      break;
    case 'blue':
      red = 0;
      green = 0;
      blue = 120;
      break;
  }
});

function generateGrid() { //Crea el grid
  const sketchPad = document.getElementById("container");
  let pixelSize = 800 / gridResolution;
  sketchPad.innerHTML = ""; // Limpia los divs creados previamente.
  
  for (let i = 0; i < gridResolution; i++) { //Genera el Sketchpad
    for (let j = 0; j < gridResolution; j++) {
      const pixel = document.createElement("span");
      pixel.classList.add("pixel");
      pixel.setAttribute("style", `height: ${pixelSize}px; width: ${pixelSize}px`);
      sketchPad.appendChild(pixel);
    }
  }
  const pixelToColor = Array.from(document.querySelectorAll("span")); // Escucha al evento 'mouseover' para cambiar de color
  pixelToColor.forEach( (pixel) => {
    let shade = 0.1;
    console.log(shade);
    pixel.addEventListener('mouseover', () => {
      pixel.style.background = `rgba(${red}, ${green}, ${blue}, ${shade})`
      shade += 0.1;
    })
});
};