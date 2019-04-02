import React from "react";
import { graphql, Link } from "gatsby";
import { getImageUrl } from "takeshape-routing";

import Layout from "../layout";
import routes from '../routes';

const ProjectFull = (props) => {
  const { data } = props;
  const { takeshape } = data;
  const { project } = takeshape;

  return (
    <Layout seo={project.seo}>
      <h1>{project.name}</h1>
      <h2>{project.type}</h2>
      {project.image ? (
          <img
            alt={project.image.description}
            src={getImageUrl(project.image.path)}
          />
        ) : (
          ""
        )
      }
      <div
        dangerouslySetInnerHTML={{ __html: project.description }}
      />
      <Link to={routes.project(project.name)} className="project">More Info</Link>
      <a href={project.liveLink} target="_blank" rel="noopener noreferrer">View Live Site</a>
      <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">View On Github</a>
    </Layout>
  )
};

export default ProjectFull;

export const query = graphql`
  query($projectId: ID!) {
    takeshape {
      project: getProject(_id: $projectId) {
        name
        type
        image {
          description
          path
        }
        liveLink
        gitHubLink
        description: descriptionHtml
        seo {
          title
          description
          ogImage {
            description
            path
          }
        }
      }
    }
  }
`;
