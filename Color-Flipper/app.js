function getRandomHexColor() {
  const hexCharacters = "0123456789ABCDEF";
  let color = "#";

  for (i = 0; i < 6; i++) {
    color += hexCharacters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function changeColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  document.body.style.backgroundColor = newColor;
  document.querySelector(".color").innerText = newColor;
  document.querySelector(".color").style.color = newColor;
}
