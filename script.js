// Besedilo, ki se bo natipkalo
const text = "Hi, I'm Sebastijan";
let index = 0;
const speed = 100; // Hitrost tipkanja v milisekundah (manjše število = hitreje)

function typeWriter() {
  if (index < text.length) {
    document.getElementById("typewriter").textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

// Zagon animacije, ko se stran naloži
window.addEventListener("DOMContentLoaded", typeWriter);