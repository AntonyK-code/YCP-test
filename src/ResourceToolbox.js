import { useEffect, useState } from 'react';

function ResourceToolbox() {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    fetch('/resources.json')
      .then(response => response.json())
      .then(data => setResources(data));
  }, []);

  return (
    <div>
      <h2>Resource Toolbox</h2>
      <ul>
        {resources.map(resource => (
          <li key={resource.id}>{resource.title} - {resource.category}</li>
        ))}
      </ul>
    </div>
  );
}

export default ResourceToolbox;
