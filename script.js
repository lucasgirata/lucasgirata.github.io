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
let index = 1;
let isTransitioning = false;

function setupClones() {
  const firstClone = images[0].cloneNode(true);
  const lastClone = images[images.length - 1].cloneNode(true);

  track.appendChild(firstClone);
  track.insertBefore(lastClone, images[0]);

  track.style.transition = "none";
  track.style.transform = `translateX(-${index * 100}%)`;
}

function moveSlide(direction) {
  if (isTransitioning) return;
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

const projectDetails = {
  pokedesk: {
    title: "Professor's PokéDesk",
    description:
      "<p>Catálogo interativo da Pokédex das três primeiras regiões do mundo Pokémon, com busca e filtragem em tempo real, páginas de perfil com possibilidade de montar sua própria equipe utilizando drag-and-drop e persistência dos dados entre sessões via JSON Server. Desenvolvido inteiramente em Web e JavaScript vanilla, sem frameworks.</p>",
    image: "imgs/professorspokedesk.png",
    period: "<p><span>Período: </span>jun/2026 - Em desenvolvimento</p>",
    tech: "<p><span>Linguagens: </span>HTML5, CSS3, JavaScript, JSON Server</p>",
    dev: "<p><span>Desenvolvimento: </span>Individual</p>",
    method:
      "<p><span>Metodologia: </span>Desenvolvimento ágil, com organização via Trello</p>",
  },
  rotaBrasil: {
    title: "RotaBrasil",
    description:
      '<p>Aplicação web moderna voltada para a exploração de destinos turísticos e parques nacionais brasileiros. Arquitetura por componentes, rotas tipadas e catálogo estruturado, utilizando React, TypeScript e Tailwind. Desenvolvida durante a matéria de "Web Development: Framework".</p>',
    image: "imgs/rotabrasil.png",
    period: "<p><span>Período: </span>mar/2026 - jul/2026</p>",
    tech: "<p><span>Linguagens: </span>React, Vite, React Router, Typescript, Tailwind v4, API REST, Python, MySQL</p>",
    dev: "<p><span>Desenvolvimento: </span>Em equipe (5 integrantes)</p>",
    method:
      "<p><span>Metodologia: </span>Desenvolvimento ágil, com organização via Trello</p>",
  },
  temai: {
    title: "Tem Aí?",
    description:
      "<p>Sistema completo de estoque para mercadinhos de condomínio. Com cadastro de produtos, controle de quantidade de produtos disponíveis e consulta rápida para os moradores, pensado para pequenas as operações locais da área residêncial.</p>",
    image: "imgs/temai.png",
    period: "<p><span>Período: </span>mar/2026 - jul/2026</p>",
    tech: "<p><span>Linguagens: </span>HTML5, CSS3, JavaScript, Python, MySQL</p>",
    dev: "<p><span>Desenvolvimento: </span>Em equipe (5 integrantes)</p>",
    method:
      "<p><span>Metodologia: </span>Desenvolvimento ágil, com organização via Trello</p>",
  },
  taskmanager: {
    title: "Task Manager",
    description:
      "<p>To-do-list que facilita a organização e acompanhamento das tarefas do curso. Permite visualizar de forma clara as tarefas de cada matéria, seu respectivo prazo, se possuem peso na nota final e a qual RA (Resultado de Aprendizagem) ela faz parte. Além disso, permiteacompanhar a nota parcial de cada matéria, baseadas nos pesos de cada tarefa somativa e de cada RA, facilitando o entendimento do resultadoparticular de cada um ao longo do semestre.</p>",
    image: "imgs/taskmanager.png",
    period: "<p><span>Período: </span>jun/2026 - Em desenvolvimento</p>",
    tech: "<p><span>Linguagens: </span>React, Vite, CSS3, JSON Server</p>",
    dev: "<p><span>Desenvolvimento: </span>Individual</p>",
    method:
      "<p><span>Metodologia: </span>Desenvolvimento ágil, com organização via Trello</p>",
  },
};

const modalOverlay = document.getElementById("overlay-modelo");
const modalTitle = document.getElementById("title-modelo");
const modalDescription = document.getElementById("description-modelo");
const modalImage = document.getElementById("img-modelo");
const modalPeriod = document.getElementById("period-modelo");
const modalTech = document.getElementById("tech-modelo");
const modalDev = document.getElementById("dev-modelo");
const modalMethod = document.getElementById("method-modelo");
const modalClose = document.getElementById("close-modelo");

document.querySelectorAll(".saiba-mais").forEach((botao) => {
  botao.addEventListener("click", () => {
    const projectId = botao.dataset.project;
    const dados = projectDetails[projectId];

    if (!dados) return;

    modalTitle.textContent = dados.title;
    modalDescription.innerHTML = dados.description;
    modalImage.src = dados.image;
    modalPeriod.innerHTML = dados.period;
    modalTech.innerHTML = dados.tech;
    modalDev.innerHTML = dados.dev;
    modalMethod.innerHTML = dados.method;
    modalOverlay.classList.add("active");
  });
});

modalClose.addEventListener("click", fecharModal);

modalOverlay.addEventListener("click", (event) => {
  if (event.target === modalOverlay) fecharModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") fecharModal();
});

function fecharModal() {
  modalOverlay.classList.remove("active");
}
