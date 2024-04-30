import "./App.css";
import { Link } from "react-router-dom";

export function Nav() {
  return (
    <div className="nav">
      <h1>LEEEK</h1>
      <ul className="navLinks">
        <Link to="revision">
          <button>Revision</button>
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
export function Main() {
  return (
    <main>
      <div className="intro">
        <h1>
          Learn Electrical and <br /> Electronics Engineering <br /> Kenya
        </h1>
        <p>
          The first platform built to help Electrical and Electronics
          Engineering students in Kenya in their success Journey and later
          exploring opportunities in the Industry with ease.
        </p>
        <Link to="courses">
          <button className="getStarted">Get Started</button>
        </Link>
      </div>
      <div className="cards">
        <div className="card">
          <h2>Certificate</h2>
          <p>
            Resources for learning and revision for students in colleges and
            Tvets pursuing the Certificate Programme.
          </p>
        </div>
        <div className="card">
          <h2>Diploma</h2>
          <p>
            Resources for diploma students for the Three Module Programme in
            colleges and Tvets
          </p>
        </div>
        <div className="card">
          <h2>Degree</h2>
          <p>
            Well curated resources for students in Universities to aid them in
            their Degree programme.
          </p>
        </div>
      </div>
    </main>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="footerInfo">
        <h1 className="footerTitle">
          Learn Electrical & <br />
          Electronics Engineering Kenya
        </h1>
        <div className="info">
          <h3>INFO</h3>
          <ul>
            <li key={"abt"}>About us</li>
            <li key={"priv"}>Privacy</li>
            <li key={"tc"}>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>+254 716-041-426</li>
            <li>PsammystPrime384@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="copyright">2024-Copyright</div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}
