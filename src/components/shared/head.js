import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

const Head = (props) => {
  const { data, seo } = props;
  const { takeshape } = data;
  const { siteSettings } = takeshape;

  return (
    <Helmet>
      <html lang="en"/>
      <title>{siteSettings.siteName} | {seo.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
  )
};

export const query = graphql`
  query {
    takeshape {
      siteSettings: getSiteSettings {
        siteName
      }
    }
  }
`;

export default (props) => (
  <StaticQuery query={query} render={data => <Head data={data} {...props} />} />
);
