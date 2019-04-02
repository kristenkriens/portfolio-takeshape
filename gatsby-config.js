require("dotenv").config();

module.exports = {
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-source-graphql",
            options: {
                typeName: "TS",
                fieldName: "takeshape",
                url: `https://api.takeshape.io/project/${process.env.TAKESHAPE_PROJECT}/graphql`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.TAKESHAPE_TOKEN}`,
                },
                // Additional options to pass to node-fetch
                fetchOptions: {},
            },
        },
    ]
};
