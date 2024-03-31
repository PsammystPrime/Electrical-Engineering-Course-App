const main = document.getElementById("main");
const getStarted = document.getElementById("start");
const info = document.getElementById("text");
const display = document.querySelector(".display");

import { courses } from "./courses.js";

// // const container = document.createElement("div");

function moduleCard() {
  const container = document.createElement("div");
  const card = document.createElement("div");
  const cardTitle = document.createElement("h1");
  const cardPara = document.createElement("p");
  const btns = document.createElement("div");
  const next = document.createElement("button");
  const prev = document.createElement("button");
  getStarted.textContent = "";
  container.className = "container";
  card.className = "card";
  btns.className = "btns";
  cardTitle.textContent = "Module One";
  cardPara.textContent = " Get a quick introduction to Electrical Engineering";
  prev.textContent = "Go to Homepage";
  next.textContent = "Go to modules";

  // next.addEventListener("click", chooseUnit);
  // prev.addEventListener("click", console.log("home"));

  btns.appendChild(next);
  btns.appendChild(prev);
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

  console.log(courses);

  moduleCard();
  console.log(courses);
}

// function unitCard() {
//   const container = document.createElement("div");
//   const card = document.createElement("div");
//   const cardPara = document.createElement("p");
//   const btns = document.createElement("div");
//   const next = document.createElement("button");
//   const prev = document.createElement("button");
//   getStarted.textContent = "";
//   container.className = "container";
//   card.className = "card";
//   btns.className = "btns";
//   cardPara.textContent = "cardPara";
//   cardPara.textContent = " Unit One and two ";
//   prev.textContent = "Go to modules";
//   next.textContent = "Go to topics";

//   next.addEventListener("click", chooseTopic);
//   // prev.addEventListener("click", console.log("home"));

//   btns.appendChild(next);
//   btns.appendChild(prev);
//   card.appendChild(cardPara);
//   card.appendChild(btns);
//   container.appendChild(card);
//   display.appendChild(container);
// }

// function topicCard() {
//   const container = document.createElement("div");
//   const card = document.createElement("div");
//   const cardPara = document.createElement("p");
//   const btns = document.createElement("div");
//   const next = document.createElement("button");
//   const prev = document.createElement("button");
//   getStarted.textContent = "";
//   container.className = "container";
//   card.className = "card";
//   btns.className = "btns";
//   cardPara.textContent = "cardPara";
//   cardPara.textContent = " Topic One and two ";
//   prev.textContent = "Go to Units";
//   next.textContent = "Go to individual topics";

//   next.addEventListener("click", module3);
//   // prev.addEventListener("click", console.log("home"));

//   btns.appendChild(next);
//   btns.appendChild(prev);
//   card.appendChild(cardPara);
//   card.appendChild(btns);
//   container.appendChild(card);
//   display.appendChild(container);
// }

// function chooseUnit() {
//   display.textContent = "";

//   main.textContent = "Choose a unit";
//   //   info.textContent = courses.module1[1].Mathematics[0].name;
//   console.log(courses.module1[1]);
//   courses.module1.forEach(() => {
//     // console.log(courses[0].module1);
//     unitCard();
//   });
// }

// function chooseTopic() {
//   display.textContent = "";

//   main.textContent = "Choose a topic";
//   //   info.textContent = courses.module1[1].Mathematics[1].Algebra[0].name;

//   courses.module1[1].forEach((module) => {
//     // console.log("mod");
//     topicCard();
//   });

//   // next.addEventListener("click", module3);
//   // prev.addEventListener("click", chooseUnit);
// }

// function module3() {
//   //   main.textContent =
//   //     courses.module1[1].Mathematics[1].Algebra[1].units[1].heading;
//   //   info.textContent = courses.module1[1].Mathematics[1].Algebra[1].units[1].body;

//   const next = document.createElement("button");
//   const prev = document.createElement("button");
//   next.textContent = "next";
//   prev.textContent = "prev";
//   main.appendChild(next);
//   main.appendChild(prev);

//   // next.addEventListener("click", () => console.log("end"));
//   // prev.addEventListener("click", chooseUnit);
// }

getStarted.addEventListener("click", ChooseModule);
