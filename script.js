function typeEffect(element, text, speed) {
  let index = 0;
  element.textContent = "";

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  }

  type();
}

document.querySelectorAll(".wave-text").forEach((element) => {
  const text = element.dataset.text;

  element.innerHTML = text
    .split("")
    .map((letter, i) => {
      const content = letter === " " ? "&nbsp;" : letter;
      return `<span style="animation-delay: ${i * 0.1}s">${content}</span>`;
    })
    .join("");
});

const element1 = document.getElementById("headerlogo1");
const element2 = document.getElementById("headerlogo2");
const element3 = document.getElementById("headerlogo3");
const element4 = document.getElementById("section1Title");
const element5 = document.getElementById("section1SubTitle");
const element6 = document.getElementById("languagesTitle");
const element7 = document.getElementById("languagesSubTitle");
const element8 = document.getElementById("section2Title");
const element9 = document.getElementById("section2SubTitle");

const headerText1 = "Lucas Girata";
const headerText2 = "平田 ルーカス";
const headerText3 = "Aspiring Software Developer";
const section1Title = "Sobre mim";
const section1SubTitle = "私について";
const languagesTitle = "Idiomas";
const languagesSubTitle = "言語";
const section2Title = "Formações";
const section2SubTitle = "資格・学歴";

typeEffect(element1, headerText1, 100);
typeEffect(element2, headerText2, 100);
typeEffect(element3, headerText3, 100);
typeEffect(element4, section1Title, 100);
typeEffect(element5, section1SubTitle, 100);
typeEffect(element6, languagesTitle, 100);
typeEffect(element7, languagesSubTitle, 100);
typeEffect(element8, section2Title, 100);
typeEffect(element9, section2SubTitle, 100);

const track = document.getElementById("carouselImages");
let images = Array.from(track.children);
let index = 1; // começa em 1 porque o índice 0 vai virar o clone
let isTransitioning = false;

// Clona a primeira e a última imagem, colocando nas pontas
function setupClones() {
  const firstClone = images[0].cloneNode(true);
  const lastClone = images[images.length - 1].cloneNode(true);

  track.appendChild(firstClone);
  track.insertBefore(lastClone, images[0]);

  // Posiciona o carrossel no primeiro slide real (sem transição)
  track.style.transition = "none";
  track.style.transform = `translateX(-${index * 100}%)`;
}

function moveSlide(direction) {
  if (isTransitioning) return; // evita clique duplo durante a animação
  isTransitioning = true;

  index += direction;
  track.style.transition = "transform 0.5s ease-in-out";
  track.style.transform = `translateX(-${index * 100}%)`;
}

track.addEventListener("transitionend", () => {
  const totalReal = images.length;

  if (index === 0) {
    track.style.transition = "none";
    index = totalReal;
    track.style.transform = `translateX(-${index * 100}%)`;
  } else if (index === totalReal + 1) {
    track.style.transition = "none";
    index = 1;
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  isTransitioning = false;
});

let autoplayInterval = setInterval(() => moveSlide(1), 3000);

const carousel = document.querySelector(".carousel");
carousel.addEventListener("mouseenter", () => clearInterval(autoplayInterval));
carousel.addEventListener("mouseleave", () => {
  autoplayInterval = setInterval(() => moveSlide(1), 3000);
});

setupClones();
