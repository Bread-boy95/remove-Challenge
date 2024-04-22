// ARRAY VISUALIZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let myArray = [400, 200, 200, 400, 200, 200, 200, 400, 200, 200, 200, 200, 400];

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
  // Logic
  let barWidth = cnv.width / myArray.length;

  // Drawing
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  // Draw Bar Graph
  ctx.fillStyle = "orange";
  ctx.strokeStyle = "grey";
  for (let i = 0; i < myArray.length; i++) {
    ctx.fillRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
    ctx.strokeRect(i * barWidth, cnv.height - myArray[i], barWidth, myArray[i]);
  }

  document.addEventListener("keydown", keydownEvent);

  function keydownEvent(event) {
    console.log(event.code);

    if (event.code == "Digit1") {
      for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] == 400) {
          let del = 400;
          let position = myArray.indexOf(del);
          myArray.splice(position, 1);
        }
      }
    } else if (event.code == "Digit2") {
      for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] == 200) {
          let del2 = 200;
          let position2 = myArray.indexOf(del2);
          myArray.splice(position2, 1);
        }
      }
    }
  }

  // Request another Animation Frame
  requestAnimationFrame(draw);
}
