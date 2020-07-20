const css = document.querySelector("h3");
let color1 = document.getElementsByName("color1")[0];
let color2 = document.getElementsByName("color2")[0];
const body = document.querySelector("#gradient");
body.style.zoom = "80%";
const changeBackground = () => {
    body.style.background = "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";
    css.textContent = body.style.background + ";"

}
color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground); 

