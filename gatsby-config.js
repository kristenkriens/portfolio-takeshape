require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: `${process.env.SITE_URL}`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "TS",
        fieldName: "takeshape",
        url: `https://api.takeshape.io/project/${process.env.TAKESHAPE_PROJECT}/graphql`,
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.TAKESHAPE_TOKEN}`,
        },
        // Additional options to pass to node-fetch
        fetchOptions: {},
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `${process.env.SITE_URL}`,
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require("node-sass"),
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Lato:100,300,500,700"]
        }
      }
    }
  ]
};
