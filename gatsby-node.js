const path = require("path");
const routes = require("./src/routes");

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      takeshape {
        projects: getProjectList {
          items {
            _id
            name
          }
        }
      }
    }
  `);

  data.takeshape.projects.items.forEach(({ _id, name }) => {
    actions.createPage({
      path: routes.project(name),
      component: path.resolve("./src/pages/project.js"),
      context: {
        projectId: _id
      }
    });
  });
};
