import React from 'react';
import './styles/skills.css'; 
import { FaJava } from 'react-icons/fa';
import { DiMsqlServer, DiMongodb } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";

const technicalSkills = [
  { name: 'JavaScript', level: 'Intermedio', icon: <IoLogoJavascript style={{color : '#e2dc0f'}}/> },
  { name: 'React', level: 'Básico', icon: '⚛️' },
  { name: 'Spring Boot', level: 'Intermedio', icon: '🌱' },
  { name: 'MySQL', level: 'Básico', icon: '🐬' },
  { name: 'Git', level: 'Básico', icon: '🐙' },
  { name: 'Java', level: 'Intermedio', icon: <FaJava style={{color : "red"}}/> },
  { name: 'SQL Server', level: 'Intermedio', icon: <DiMsqlServer style={{color : "blue"}} /> },
  { name: 'MongoDB', level: 'Intermedio', icon: <DiMongodb style={{color : "green"}} /> }
];

const softSkills = [
  { name: 'Trabajo en equipo', description: 'Capacidad para colaborar eficazmente con otros.' },
  { name: 'Resolución de problemas', description: 'Habilidad para encontrar soluciones prácticas y eficientes.' },
  { name: 'Comunicación efectiva', description: 'Facilidad para expresar ideas claramente y escuchar activamente.' },
  { name: 'Adaptabilidad', description: 'Flexibilidad para manejar cambios y aprender nuevas tecnologías.' },
  { name: 'Gestión del tiempo', description: 'Organización para priorizar tareas y cumplir con plazos.' }
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h1 className="section-title">Mis Skills</h1>

      <div className="skills-grid">
        {technicalSkills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-level">Nivel: {skill.level}</p>
          </div>
        ))}
      </div>
      <h2 className="section-title mt-5">Habilidades Blandas</h2>
      <div className="soft-skills-grid ">
        {softSkills.map((skill, index) => (
          <div key={index} className="soft-skill-card">
            <h3 className="soft-skill-name">{skill.name}</h3>
            <p className="soft-skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
