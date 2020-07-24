const css = document.querySelector("h3");
const [color1, color2] = document.querySelectorAll(".color");
const body = document.querySelector("#gradient");
body.style.zoom = "80%";

linearGradient = () => `linear-gradient(to right, ${color1.value}, ${color2.value})`;
changeBackground = () => {
    body.style.background = linearGradient();
    css.textContent = body.style.background + ";"
}
color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);

