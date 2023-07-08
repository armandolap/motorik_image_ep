const cover = document.querySelectorAll(".cover");
const squareCount = 75;
const lineCount = 75;

function createLineContainer(cover, getRandomColor) {
  for (let i = 0; i < lineCount; i++) {
    const lineContainer = document.createElement("div");
    lineContainer.classList.add("line");
    for (let j = 0; j < squareCount; j++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.backgroundColor = getRandomColor();
      lineContainer.appendChild(square);
    }
    cover.appendChild(lineContainer);
  }
}


createLineContainer(cover[0], getRandomColorRed);
createLineContainer(cover[1], getRandomColorGreen);
createLineContainer(cover[2], getRandomColorBlue);
createLineContainer(cover[3], getRandomColor);


function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function getRandomColorRed() {
  const redValues = ["#FF0000", "#FF1111", "#FF2222", "#FF3333", "#FF4444", "#FF5555", "#FF6666", "#FF7777", "#FF8888", "#FF9999", "#FFAAAA", "#FFBBBB", "#FFCCCC", "#FFDDDD", "#FFEEEE"];
  return redValues[Math.floor(Math.random() * redValues.length)];
}

function getRandomColorGreen() {
  const greenValues = ["#00FF00", "#11FF11", "#22FF22", "#33FF33", "#44FF44", "#55FF55", "#66FF66", "#77FF77", "#88FF88", "#99FF99", "#AAFFAA", "#BBFFBB", "#CCFFCC", "#DDFFDD", "#EEFFEE"];
  return greenValues[Math.floor(Math.random() * greenValues.length)];
}

function getRandomColorBlue() {
  const blueValues = ["#0000FF", "#1111FF", "#2222FF", "#3333FF", "#4444FF", "#5555FF", "#6666FF", "#7777FF", "#8888FF", "#9999FF", "#AAAAFF", "#BBBBFF", "#CCCCFF", "#DDDDFF", "#EEEEFF"];
  return blueValues[Math.floor(Math.random() * blueValues.length)];
}

