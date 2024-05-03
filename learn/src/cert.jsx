import { Footer } from "./App";
import { Nav } from "./Courses";
import { Link } from "react-router-dom";
import imag3 from "/CRT Worked examples.pdf";
import image2 from "/Analogue Electronics 1, DEE 1 notes_075733 (2).pdf";
import image from "/KRA.pdf";
import "./Courses.css";
import { Document, Page } from "react-pdf";
import { useState } from "react";
import { pdfjs } from "react-pdf";
import { all } from "axios";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

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
  // const arr = [image, image2];
  const [numPages, setNumPages] = useState(null);
  const [pageNum, setPageNum] = useState(1);

  function loadDocument({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <>
      <Nav />
      <h2>Mathematics</h2>
      <div className="pages">
        <Document className="doc" file={image} onLoadSuccess={loadDocument}>
          <Page className="page" pageNumber={pageNum}></Page>
        </Document>
      </div>

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
