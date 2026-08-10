const text = "Hi, I'm Sebastijan";
let index = 0;
const speed = 100;
function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}
window.addEventListener("DOMContentLoaded", typeWriter);