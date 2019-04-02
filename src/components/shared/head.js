import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";
import { getImageUrl } from "takeshape-routing";

const Head = (props) => {
  const { data, seo } = props;
  const { takeshape } = data;
  const { siteSettings } = takeshape;

  const title = `${seo.title} | ${siteSettings.siteName}`;
  const favicon = getImageUrl(siteSettings.favicon.path);

  return (
    <Helmet>
      <html lang="en"/>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={seo.description} />
      <meta property="og:locale" content="en_CA" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content="https://kristenkriens.com/" /> /* TODO: */
      <meta property="og:site_name" content={siteSettings.siteName} />
      <meta property="og:image" content={seo.ogImage.path} />
      <link rel="canonical" href="https://kristenkriens.com/" /> /* TODO: */
      <link rel="icon" href={favicon} type="image/png" />
      <link rel="apple-touch-icon-precomposed" href={favicon} type="image/png" />
    </Helmet>
  )
};

export const query = graphql`
  query {
    takeshape {
      siteSettings: getSiteSettings {
        siteName
        favicon {
          path
        }
      }
    }
  }
`;

export default (props) => (
  <StaticQuery query={query} render={data => <Head data={data} {...props} />} />
);
