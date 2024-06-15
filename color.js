const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervelId;

const startChangingColor = () => {
  if (!intervelId) {
    intervelId = setInterval(changeColor, 1000);

    function changeColor() {
      document.querySelector("#color").style.backgroundColor = randomColor();
    }
  }
};
const stopChangingColor = () => {
  if (intervelId) {
    clearInterval(intervelId);
    intervelId = null;
    document.querySelector("#color").style.backgroundColor = null;
  }
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
