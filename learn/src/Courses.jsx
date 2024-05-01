import { Footer } from "./App";
import { Link } from "react-router-dom";

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
      <h1>Courses</h1>
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
