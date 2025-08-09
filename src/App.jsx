import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Andrea – Le Sage</h1>
        <p>Objectif : Avoir 15 de moyenne</p>
      </header>

      <section className="avatar-section">
        {/* Image venant du dossier public */}
        <img src="/avatar.png" alt="Avatar d'Andrea" className="avatar" />
      </section>

      <section className="stats">
        <h2>Compétences</h2>
        <ul>
          <li>Maths</li>
          <li>SES</li>
        </ul>

        <h2>Compétence personnelle</h2>
        <p>Moins procrastiner</p>

        <h2>Récompenses</h2>
        <p>Regarder une série, vidéo YouTube ou film</p>
      </section>
    </div>
  );
}

export default App;


