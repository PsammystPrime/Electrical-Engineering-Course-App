import { Footer } from "./App";
import { Link } from "react-router-dom";
import "./Courses.css";

export function Nav() {
  const name = "Learn";

  return (
    <div className="nav">
      <h1>LEEEK</h1>
      <ul className="navLinks">
        <Link to="revision">
          <button>{name}</button>
        </Link>
        <Link to="schools">
          <button>Schools Ranks</button>
        </Link>
        <Link to="careers">
          <button>Careers</button>
        </Link>
      </ul>
    </div>
  );
}

export function Levels() {
  return (
    <>
      <h2>Choose your Learning Programme</h2>
      <div className="levels">
        <div className="level">
          <h3>Certificate</h3>
          <p>Resources for the Certificate programme</p>
          <button>Select Programme</button>
        </div>
        <div className="level">
          <h3>Diploma</h3>
          <p>Resources for the Diploma programme</p>
          <button>Select Programme</button>
        </div>
        <div className="level">
          <h3>Degree</h3>
          <p>Resources for the Degree programme</p>
          <button>Select Programme</button>
        </div>
      </div>
    </>
  );
}

export default function Courses() {
  return (
    <>
      <Nav />
      <Levels />
      <Footer />
    </>
  );
}
