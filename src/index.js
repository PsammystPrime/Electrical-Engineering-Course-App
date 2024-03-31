const main = document.getElementById("main");
const getStarted = document.getElementById("start");
const info = document.getElementById("text");
const display = document.querySelector(".display");
const home = document.querySelector(".home");
const cats = document.querySelector(".cats");
const vision = document.querySelector(".vision");

import { courses } from "./courses.js";

function moduleCard() {
  const container = document.createElement("div");
  const card = document.createElement("div");
  const cardTitle = document.createElement("h1");
  const cardPara = document.createElement("p");
  const btns = document.createElement("div");
  const next = document.createElement("button");
  getStarted.textContent = "";
  container.className = "container";
  card.className = "card";
  btns.className = "btns";
  cardTitle.textContent = "Module One";
  cardPara.textContent = " Get a quick introduction to Electrical Engineering";
  next.textContent = "Go to Units";

  next.addEventListener("click", chooseUnit);

  btns.appendChild(next);
  card.appendChild(cardTitle);
  card.appendChild(cardPara);
  card.appendChild(btns);
  container.appendChild(card);
  display.appendChild(container);
}

function ChooseModule() {
  display.textContent = "";
  main.textContent = "";
  main.textContent = "Choose a module level for learning";

  moduleCard();
}

function chooseUnit() {
  display.textContent = "";
  main.textContent = "Choose a unit";

  courses.forEach((unit) => {
    const container = document.createElement("div");
    const card = document.createElement("div");
    const cardTitle = document.createElement("h1");
    const cardPara = document.createElement("p");
    const btns = document.createElement("div");
    const next = document.createElement("button");
    getStarted.textContent = "";
    container.className = "container";
    card.className = "card";
    btns.className = "btns";
    cardTitle.textContent = unit.sub.name;
    cardPara.textContent = unit.sub.info;
    next.textContent = "Go to Topics";

    console.log(unit);

    btns.appendChild(next);
    card.appendChild(cardTitle);
    card.appendChild(cardPara);
    card.appendChild(btns);
    container.appendChild(card);
    display.appendChild(container);
  });
}

function assessments() {
  display.textContent = "";

  const container = document.createElement("div");
  const card = document.createElement("div");
  const cardTitle = document.createElement("h1");
  const cardPara = document.createElement("p");
  const btns = document.createElement("div");
  const next = document.createElement("button");
  getStarted.textContent = "";
  container.className = "container";
  card.className = "card";
  btns.className = "btns";
  cardTitle.textContent = "Module One";
  cardPara.textContent = " It's time for some assessments on the units.";
  next.textContent = "Next";

  next.addEventListener("click", unitCats);

  btns.appendChild(next);
  card.appendChild(cardTitle);
  card.appendChild(cardPara);
  card.appendChild(btns);
  container.appendChild(card);
  display.appendChild(container);
}

function unitCats() {
  display.textContent = "";
  main.textContent = "Choose a unit";

  courses.forEach((unit) => {
    const container = document.createElement("div");
    const card = document.createElement("div");
    const cardTitle = document.createElement("h1");
    const cardPara = document.createElement("p");
    const btns = document.createElement("div");
    const next = document.createElement("button");
    getStarted.textContent = "";
    container.className = "container";
    card.className = "card";
    btns.className = "btns";
    cardTitle.textContent = unit.sub.name;
    cardPara.textContent = "Assess your knowledge on " + unit.sub.name;
    next.textContent = "Go to Topics";

    btns.appendChild(next);
    card.appendChild(cardTitle);
    card.appendChild(cardPara);
    card.appendChild(btns);
    container.appendChild(card);
    display.appendChild(container);
  });
}

getStarted.addEventListener("click", ChooseModule);
cats.addEventListener("click", assessments);
