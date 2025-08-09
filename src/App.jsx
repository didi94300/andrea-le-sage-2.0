import { useState } from "react";
import avatar from "/public/avatar.png";

export default function App() {
  const [xp, setXp] = useState(70);
  const [level, setLevel] = useState(1);
  const [quests, setQuests] = useState([
    { id: 1, text: "Faire 30 min de maths", done: false, xp: 30 },
    { id: 2, text: "Avancer sur une fiche de révision", done: false, xp: 40 },
    { id: 3, text: "Pas de distraction pendant 1h", done: false, xp: 30 },
  ]);

  const handleQuestDone = (id) => {
    const updated = quests.map((q) => {
      if (q.id === id && !q.done) {
        const newXp = xp + q.xp;
        const newLevel = Math.floor(newXp / 100) + 1;
        setXp(newXp);
        setLevel(newLevel);
        return { ...q, done: true };
      }
      return q;
    });
    setQuests(updated);
  };

  return (
    <div>
      <h1>Andrea – Le Sage</h1>
      <div className="card">
        <img src="/avatar.png" alt="Avatar" />
        <h2>Niveau {level}</h2>
        <div className="progress">
          <div
            className="progress-bar"
            style={{ width: `${xp % 100}%` }}
          ></div>
        </div>
        <p>{xp % 100} / 100 XP</p>
      </div>

      <div className="card">
        <h2>Quêtes</h2>
        {quests.map((quest) => (
          <div key={quest.id}>
            <p style={{ textDecoration: quest.done ? "line-through" : "none" }}>
              {quest.text}
            </p>
            <button disabled={quest.done} onClick={() => handleQuestDone(quest.id)}>
              {quest.done ? "Fait ✅" : `+${quest.xp} XP`}
            </button>
          </div>
        ))}
      </div>

      <div className="card">
        <h2>Récompenses</h2>
        <ul>
          <li>🎬 1 épisode de série</li>
          <li>▶️ 20 min de YouTube</li>
          <li>🎥 1 film ou séance détente</li>
        </ul>
      </div>
    </div>
  );
}
