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

const element1 = document.getElementById("headerlogo1");
const element2 = document.getElementById("headerlogo2");
const element3 = document.getElementById("headerlogo3");
const element4 = document.getElementById("section1Title");

const headerText1 = "Lucas Girata";
const headerText2 = "平田 ルーカス";
const headerText3 = "Aspiring Software Developer";
const section1Title = "Sobre mim";

typeEffect(element1, headerText1, 100);
typeEffect(element2, headerText2, 100);
typeEffect(element3, headerText3, 100);
typeEffect(element4, section1Title, 100);
