
import { useState } from "react";
import {
  HashRouter,
  MemoryRouter,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import "./App.css";

function Home() {
  return (
    <section className="page-content">
      <span className="eyebrow">01 / HOME</span>
      <h2>Welcome, Explorer</h2>
      <p>
        This application demonstrates three different
        routing methods in React.
      </p>
    </section>
  );
}

function About() {
  return (
    <section className="page-content">
      <span className="eyebrow">02 / ABOUT</span>
      <h2>About This Project</h2>
      <p>
        React Router allows users to move between
        components without reloading the entire page.
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section className="page-content">
      <span className="eyebrow">03 / CONTACT</span>
      <h2>Contact Section</h2>
      <p>
        This page is included to demonstrate route
        navigation and location changes.
      </p>
    </section>
  );
}

function Navigation() {
  return (
    <nav className="nav-links">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

function RouteContent() {
  const location = useLocation();

  return (
    <>
      <div className="location-bar">
        <span>Current path</span>
        <code>{location.pathname}</code>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="*"
          element={<h2>Page Not Found</h2>}
        />
      </Routes>
    </>
  );
}

function HashDemo() {
  return (
    <HashRouter>
      <div className="demo-panel">
        <div className="panel-heading">
          <span className="status-dot" />
          <h2>HashRouter</h2>
          <span className="type-tag">URL HASH</span>
        </div>

        <p>
          Routes are stored after the # symbol in the URL.
        </p>

        <Navigation />
        <RouteContent />

        <div className="example-url">
          Example: /#/about
        </div>
      </div>
    </HashRouter>
  );
}

function MemoryDemo() {
  return (
    <MemoryRouter initialEntries={["/"]}>
      <div className="demo-panel">
        <div className="panel-heading">
          <span className="status-dot" />
          <h2>MemoryRouter</h2>
          <span className="type-tag">IN MEMORY</span>
        </div>

        <p>
          Navigation is stored internally without changing
          the browser address bar.
        </p>

        <Navigation />
        <RouteContent />

        <div className="example-url">
          Browser URL remains unchanged
        </div>
      </div>
    </MemoryRouter>
  );
}

function StaticDemo() {
  return (
    <StaticRouter location="/about">
      <div className="demo-panel">
        <div className="panel-heading">
          <span className="status-dot" />
          <h2>StaticRouter</h2>
          <span className="type-tag">FIXED PATH</span>
        </div>

        <p>
          The location is fixed to /about for this
          demonstration.
        </p>

        <RouteContent />

        <div className="example-url">
          Fixed location: /about
        </div>
      </div>
    </StaticRouter>
  );
}

export default function App() {
  const [selected, setSelected] = useState("hash");

  return (
    <main className="app-shell">
      <header className="hero">
        <div className="brand">
          <div className="brand-mark">RT</div>
          <span>FIELD NOTES / REACT LAB</span>
        </div>

        <div className="hero-content">
          <span className="eyebrow">PRACTICAL 11 / NAVIGATION</span>
          <h1>Router <em>Types.</em></h1>
          <p>
            Explore three ways to manage navigation
            in React applications.
          </p>
        </div>

        <div className="hero-footer">
          <span>LEARN • BUILD • EXPLORE</span>
          <span>REACT ROUTER STUDY</span>
        </div>
      </header>

      <section className="workspace">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SELECT A MODULE</span>
            <h2>Routing Console</h2>
          </div>
          <span className="live-label">● SYSTEM READY</span>
        </div>

        <div className="router-tabs">
          <button
            className={selected === "hash" ? "active" : ""}
            onClick={() => setSelected("hash")}
          >
            <span>01</span> HashRouter
          </button>

          <button
            className={selected === "memory" ? "active" : ""}
            onClick={() => setSelected("memory")}
          >
            <span>02</span> MemoryRouter
          </button>

          <button
            className={selected === "static" ? "active" : ""}
            onClick={() => setSelected("static")}
          >
            <span>03</span> StaticRouter
          </button>
        </div>

        {selected === "hash" && <HashDemo />}
        {selected === "memory" && <MemoryDemo />}
        {selected === "static" && <StaticDemo />}

        <section className="comparison">
          <span className="eyebrow">QUICK REFERENCE</span>
          <h2>Choose the right route.</h2>

          <div className="comparison-grid">
            <article>
              <h3>HashRouter</h3>
              <p>Static hosting and URL-hash navigation.</p>
            </article>
            <article>
              <h3>MemoryRouter</h3>
              <p>Tests, embedded apps and internal navigation.</p>
            </article>
            <article>
              <h3>StaticRouter</h3>
              <p>Server-side rendering with a known location.</p>
            </article>
          </div>
        </section>

        <footer className="app-footer">
          <span>REACT ROUTER / PRACTICAL PROJECT</span>
          <span>ARMY GREEN × IVORY</span>
        </footer>
      </section>
    </main>
  );
}
