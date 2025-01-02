// Função para verificar se a seção está visível na tela
const sections = document.querySelectorAll(".reveal");

function revealOnScroll() {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
      section.classList.add("visible"); // Adiciona a classe para a animação
    } else {
      section.classList.remove("visible"); // Remove a classe quando sair da tela
    }
  });
}

// Chama a função quando a página rolar
window.addEventListener("scroll", revealOnScroll);

// Chama a função para revelar as seções já visíveis ao carregar a página
document.addEventListener("DOMContentLoaded", revealOnScroll);
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// typing funtion
var typed = new Typed(".auto-type", {
  strings: ["Moçambique"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});
