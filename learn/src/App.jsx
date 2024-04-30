export function Nav() {
  return (
    <div>
      <h1>SPACE</h1>
      <ul className="navLinks">
        <li key={1}>Revision</li>
        <li key={2}>Schools Ranks</li>
        <li key={3}>Careers</li>
      </ul>
    </div>
  );
}
export function Main() {}
export function Footer() {}

export default function App() {
  return (
    <>
      <Nav></Nav>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}
