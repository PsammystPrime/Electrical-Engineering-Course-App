import { Footer } from "./App";
import { Nav } from "./Courses";
import { Link } from "react-router-dom";

export function AllProgrammes() {
  return (
    <>
      <h2>Choose your Learning Programme</h2>
      <div className="levels">
        <div className="level">
          <h3>Module One</h3>
          <p>Introduction to the Certificate programme</p>
          <Link to={"mod1"}>
            <button>Select Programme</button>
          </Link>
        </div>
        <div className="level">
          <h3>Module Two</h3>
          <p>Finalising the Certificate programme</p>
          <Link to={"mod2"}>
            <button>Select Programme</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export function Module1() {
  function Subjects() {
    return (
      <>
        <h3>Select unit</h3>
        <div className="allUnits">
          <Link to={"maths"}>
            <p className="unit">Mathematics</p>
          </Link>
          <Link to={"maths"}>
            <p className="unit">Analogue Electronics</p>
          </Link>
          <Link to={"maths"}>
            <p className="unit">Chemistry</p>
          </Link>
          <Link to={"maths"}>
            <p className="unit">Installation Technology</p>
          </Link>
          <Link to={"maths"}>
            <p className="unit">Electrical Principles</p>
          </Link>
          <Link to={"maths"}>
            <p className="unit">Technical Drawing</p>
          </Link>
          <Link to={"maths"}>
            <p className="unit">Electrical Measurement & Fault Diagnosis</p>
          </Link>
        </div>
      </>
    );
  }
  return (
    <>
      <Nav />
      <Subjects />
      <Footer />
    </>
  );
}

export function Maths() {
  const arr = ["pdf one", "pdf two", "pdf three"];
  return (
    <>
      <Nav />
      {arr.map((item, index) => {
        return (
          <div key={index} className="allSubjects">
            <div key={item}>{item}</div>
          </div>
        );
      })}
      <Footer />
    </>
  );
}

export default function Certificate() {
  return (
    <>
      <Nav />
      <AllProgrammes />
      <Footer />
    </>
  );
}
