import React from 'react';
import './styles/skills.css'; 
import { FaJava} from 'react-icons/fa';
import { DiMsqlServer, DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";

const skills = [
  { name: 'JavaScript', level: 'Intermedio', icon: <IoLogoJavascript style={{color : '#e2dc0f'}}/>},
  { name: 'React', level: 'Intermedio', icon: '⚛️' },
  { name: 'Spring Boot', level: 'Intermedio', icon: '🌱' },
  { name: 'MySQL', level: 'Básico', icon: '🐬' },
  { name: 'Git', level: 'Básico', icon: '🐙' },
  { name: 'Java',level : 'Intermedio' ,  icon: <FaJava style={{color : "red"}}/> },
  { name: 'Sql Server',level : 'Intermedio' ,  icon: <DiMsqlServer style={{color : "blue"}} /> },
  { name: 'MongoDB',level : 'Intermedio' ,  icon: <DiMongodb style={{color : "green"}} />}
];

const Skills = () => {
  return (
    <div className='content w-75 p-5'>
    <h1>Mis Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <span className="skill-icon">{skill.icon}</span>
            <h3>{skill.name}</h3>
            <p>Nivel: {skill.level}</p>
          </div>
        ))}
      </div>
      </div>
  );
};

export default Skills;
