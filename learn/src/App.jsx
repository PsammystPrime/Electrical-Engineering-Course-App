import "./App.css";
export function Nav() {
  return (
    <div className="nav">
      <h1>SPACE</h1>
      <ul className="navLinks">
        <li key={1}>Revision</li>
        <li key={2}>Schools Ranks</li>
        <li key={3}>Careers</li>
      </ul>
    </div>
  );
}
export function Main() {
  return (
    <main>
      <div className="intro">
        <h1>
          Learn Electrical and <br /> Electronics Engineering
        </h1>
        <p>
          The first platform built to help Electrical and Electronics
          Engineering students in Kenya in their success Journey and later
          exploring opportunities in the Industry with ease.
        </p>
        <button className="getStarted">Get Started</button>
      </div>
      <div className="cards">
        <div className="card">
          <h2>Cerificate</h2>
          <p>
            Resources for learning and revision for students in colleges and
            Tvets
          </p>
        </div>
        <div className="card">
          <h2>Diploma</h2>
          <p>
            Resources for diploma students for the three module programme in
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
          Electronics Engineering
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
