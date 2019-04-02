import React from "react";
import { graphql } from "gatsby";

import Layout from "../layout";
import ProjectList from "../components/projectList";

const IndexPage = (props) => {
  const { data } = props;
  const { takeshape } = data;
  const { homepage, projects } = takeshape;

  return (
    <Layout seo={homepage.seo}>
      <ProjectList projects={projects} className="main" />
    </Layout>
  )
};

export default IndexPage;

export const query = graphql`
  query {
    takeshape {
      homepage: getHomepage {
        seo {
          title
          description
          ogImage {
            description
            path
          }
        }
      }
      projects: getProjectList {
        items {
          name
          type
          image {
            description
            path
          }
          liveLink
          gitHubLink
        }
      }
    }
  }
`;
