import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
      <Skill skill="react" emoji="💪" color="blue" />
      <Skill skill="java" emoji="💪" color="white" />
      <Skill skill="javascript" emoji="💪" color="red" />
    </div>
  );
};

const Skill = (props) => {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
