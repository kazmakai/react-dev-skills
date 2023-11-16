import SkillList from "./SkillList";
import NewSkillForm from "./NewSkillForm";
import { useState } from "react";

const initialSkills = [
  { name: "HTML", level: 5},
  { name: "CSS", level: 3},
  { name: "JavaScript", level: 4},
  { name: "Python", level: 2},
];

function App() {
  const [skills, setSkills] = useState (initialSkills);

  // Event Handler
  const addSkills = (newSkill) => {
    setSkills([...skills, newSkill]);
  }

  return (
    <div>
      <h1>React Dev Skills</h1>
      <SkillList skills={skills}/>
      <hr />
      <NewSkillForm addSkills={addSkills}/>
    </div>
  );
}

export default App;
