const myBox = document.getElementById("myBox");
let moveAmount = 100;
let x = 0;
let y = 0;

document.addEventListener("keydown", () => {
  myBox.textContent = "😡";
  myBox.style.backgroundColor = "red";
});
document.addEventListener("keyup", () => {
  myBox.textContent = "😤";
  myBox.style.backgroundColor = "yellow";
});
document.addEventListener("keyup", (event) => {
  if (event.key.startsWith("Arrow")) {
    event.preventDefault();

    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }

    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
  }
  console.log(event);
});
