import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Rocket,
  Globe,
  Satellite,
  Activity,
  Bell,
  Search,
  Radar,
  ChevronRight
} from "lucide-react";

import Earth3D from "./Earth3D";
import "./app.css";

function App() {
  return (
    <div className="dashboard">

      {/* MENU */}
      <header className="navbar">
        <div className="logo">
          <Rocket size={22} />
          <span>SPACE MISSION</span>
        </div>

        <nav>
          <a href="#home">Dashboard</a>
          <a href="#missions">Missions</a>
          <a href="#explore">Star Map</a>
          <a href="#fleet">Fleet</a>
        </nav>

        <div className="nav-icons">
          <Search />
          <Bell />
        </div>
      </header>

      {/* HERO */}
      <main id="home" className="hero">

        <section className="hero-text">
          <span className="status">
            ● SYSTEM STATUS: NORMAL
          </span>

          <h1>
            EXPLORE.<br />
            DISCOVER.<br />
            ENDURE.
          </h1>

          <p>
            Explore the universe, discover new worlds
            and expand the boundaries of human presence.
          </p>

          <div className="hero-buttons">
            <a href="#missions" className="primary-btn">
              LAUNCH MISSION ↗
            </a>

            <a href="#explore" className="secondary-btn">
              VIEW STAR MAP +
            </a>
          </div>
        </section>

        <div id="explore" className="earth-container">
          <Canvas camera={{ position: [0, 0, 6.5], fov: 45 }}>
            <Suspense fallback={null}>
              <Earth3D />
            </Suspense>
          </Canvas>
        </div>

      </main>

      {/* ESTATÍSTICAS */}
      <section className="stats">

        <article className="stat-card">
          <Rocket />
          <span>FLEET STATUS</span>
          <h2>OPERATIONAL</h2>
          <p>All systems normal</p>
        </article>

        <article className="stat-card">
          <Globe />
          <span>PLANETS DISCOVERED</span>
          <h2>23</h2>
          <p>Exploration records</p>
        </article>

        <article className="stat-card">
          <Radar />
          <span>SYSTEM SCAN</span>
          <h2>ACTIVE</h2>
          <p>7 objects detected</p>
        </article>

        <article className="stat-card">
          <Activity />
          <span>MISSION PROGRESS</span>
          <h2>72%</h2>
          <p>Current operation</p>
        </article>

      </section>

      {/* MISSÕES */}
      <section id="missions" className="missions">
        <div className="section-heading">
          <div>
            <span>YOUR NEXT CHALLENGE</span>
            <h2>MISSION CONTROL</h2>
          </div>
          <ChevronRight />
        </div>

        <div className="mission-card">
          <div>
            <span className="mission-status">
              ● NEW MISSION
            </span>
            <h3>Oxygen System Inspection</h3>
            <p>
              Verify the oxygen levels inside the spacecraft.
            </p>
          </div>

          <button onClick={() => alert("Mission started!")}>
            START MISSION ↗
          </button>
        </div>
      </section>

    </div>
  );
}

export default App;
