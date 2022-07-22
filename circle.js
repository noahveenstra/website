const degreeToRadian = (angle) => {
  return angle * (Math.PI / 180);
};

const radius = 60;
const diameter = radius * 2;

const circle = document.querySelector("#circular-text");
circle.style.width = `${diameter}px`;
circle.style.height = `${diameter}px`;

const text = circle.innerText;
const characters = text.split("");
circle.innerText = null;

const startAngle = -90;
const endAngle = 270;
const angleRange = endAngle - startAngle;

const deltaAngle = angleRange / characters.length;
let currentAngle = startAngle;

characters.forEach((char, index) => {
  const charElement = document.createElement("span");
  charElement.innerText = char;
  const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
  const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));

  const transform = `translate(${xPos}px, ${yPos}px)`;
  const rotate = `rotate(${index * deltaAngle}deg)`;
  charElement.style.transform = `${transform} ${rotate}`;

  currentAngle += deltaAngle;
  circle.appendChild(charElement);
});
