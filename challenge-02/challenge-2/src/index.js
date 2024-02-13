import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "Java",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Spring",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "kafak",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "docker",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

const Avatar = () => {
  return (
    <div>
      <img className="avatar" src="avatar-pic.jpg" alt="amir parvaneh" />
    </div>
  );
};

const Intro = () => {
  return (
    <div>
      <h1>Amir parvaneh</h1>
      <p>
        full-stack software developer passion to solve hard challenges... and
        love to work in big companies with really challenging projects...
      </p>
    </div>
  );
};

const SkillList = () => {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
};

const Skill = ({ skill, color, level }) => {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "✋"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
};

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
