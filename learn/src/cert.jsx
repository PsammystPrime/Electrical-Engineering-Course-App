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
      <div className="allSubjects">
        <p className="subject">Mathematics</p>
        <p>Analogue Electronics</p>
        <p>Chemistry</p>
        <p>Installation Technology</p>
        <p>Electrical Principles</p>
        <p>Technical Drawing</p>
        <p>Electrical Measurement & Fault Diagnosis</p>
      </div>
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

export default function Certificate() {
  return (
    <>
      <Nav />
      <AllProgrammes />
      <Footer />
    </>
  );
}
