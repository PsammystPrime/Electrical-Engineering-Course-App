const main = document.getElementById("main");
const getStarted = document.getElementById("start");
const info = document.getElementById("text");
const display = document.querySelector(".display");

import { courses } from "./courses.js";

const container = document.createElement("div");
const card = document.createElement("div");
const cardPara = document.createElement("p");
const btns = document.createElement("div");
const next = document.createElement("button");
const prev = document.createElement("button");

function dd() {
  container.className = "container";
  card.className = "card";
  btns.className = "btns";
  cardPara.textContent = "cardPara";
  cardPara.textContent = " Module O0ne ";
  prev.textContent = "prev";
  next.textContent = "next";
  // next.addEventListener("click", () => console.log("end"));
  btns.appendChild(next);
  btns.appendChild(prev);
  card.appendChild(cardPara);
  card.appendChild(btns);
  container.appendChild(card);
  display.appendChild(container);
}

function ChooseModule() {
  main.textContent = "";
  main.textContent = "Choose a module level for learning";
  info.textContent = courses.module1[0].title;

  // console.log("mod");
  dd();
  cardPara.textContent = "Module One";

  next.addEventListener("click", chooseUnit);
  prev.addEventListener("click", console.log("home"));

  console.log(courses);
  //   console.log(courses.module1[1].Mathematics[1].Algebra[0].body);
}

function chooseUnit() {
  main.textContent = "Choose a unit";
  //   info.textContent = courses.module1[1].Mathematics[0].name;

  courses.module1.forEach(() => {
    console.log("unit");
    dd();
    cardPara.textContent = "A unit";
  });

  next.addEventListener("click", chooseTopic);
  prev.addEventListener("click", ChooseModule);
}

function chooseTopic() {
  main.textContent = "Choose a topic";
  //   info.textContent = courses.module1[1].Mathematics[1].Algebra[0].name;

  courses.module1[1].forEach((module) => {
    // console.log("mod");
    dd();
    cardPara.textContent = "Topics";
  });

  next.addEventListener("click", module3);
  prev.addEventListener("click", chooseUnit);
}

function module3() {
  //   main.textContent =
  //     courses.module1[1].Mathematics[1].Algebra[1].units[1].heading;
  //   info.textContent = courses.module1[1].Mathematics[1].Algebra[1].units[1].body;

  const next = document.createElement("button");
  const prev = document.createElement("button");
  next.textContent = "next";
  prev.textContent = "prev";
  main.appendChild(next);
  main.appendChild(prev);

  next.addEventListener("click", () => console.log("end"));
  prev.addEventListener("click", chooseUnit);
}

getStarted.addEventListener("click", ChooseModule);
