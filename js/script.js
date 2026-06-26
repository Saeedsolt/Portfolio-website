const text = "Saeed Soltani"
const textElement = document.getElementById("text-el");
let i = 0;
function type() {
    if(i < text.length){
        textElement.textContent += text[i]
        i++;
        setTimeout(type, 200)
    }
}
window.addEventListener("load", type())
