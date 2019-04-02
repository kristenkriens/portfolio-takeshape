import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";

import routes from "../../routes";

const Header = (props) => {
  const { data } = props;

  return (
    <nav>
      <div>
        <Link to="/" activeClassName="active">
          Home
        </Link>
      </div>
    </nav>
  )
};

const query = graphql`
  query {
    takeshape {
      projects: getProjectList {
        items {
          name
        }
      }
    }
  }
`;

export default (props) => (
  <StaticQuery query={query} render={data => <Header data={data} {...props} />} />
);
