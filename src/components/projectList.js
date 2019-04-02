import React from "react";
import { Link } from "gatsby";
import { getImageUrl } from "takeshape-routing";

import routes from '../routes';

const ProjectList = (props) => {
  const { projects } = props;

  return (
    <>
      {projects.items.map((project, i) => (
        <div key={i}>
          <h1>{project.name}</h1>
          <h2>{project.type}</h2>
          {project.image ? (
            <img
              alt={project.image.description}
              src={getImageUrl(project.image.path)}
            />
          ) : (
            ""
          )}
          <Link to={routes.project(project.name)} className="project">More Info</Link>
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">View Live Site</a>
          <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">View On Github</a>
        </div>
      ))}
    </>
  )
};

export default ProjectList;
