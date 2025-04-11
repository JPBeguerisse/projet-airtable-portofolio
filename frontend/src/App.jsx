import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/projects`)
      .then((res) => setProjects(res.data))
      .catch((err) => console.error(err));
  }, []);


  console.log(projects);
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Projets ESGI</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <strong>{project.fields.name}</strong> — {project.fields.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
