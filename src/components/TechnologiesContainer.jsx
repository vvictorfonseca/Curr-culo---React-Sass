import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiReact,
  DiPostgresql,
  DiMongodb,
  DiSass
} from 'react-icons/di';

import '../styles/components/technologiesContainer.sass';

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "Sass", name: "Sass", icon: <DiSass /> },
  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall /> },
  { id: "postgreSql", name: "PostgreSql", icon: <DiPostgresql /> },
  { id: "MongoDb", name: "MongoDb", icon: <DiMongodb /> },
];

function TechnologiesContainer() {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <h3>{tech.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer