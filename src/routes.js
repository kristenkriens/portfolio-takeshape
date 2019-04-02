const slugify = require("slugify");

const routes = {
  project: function(name) {
    const slug = slugify(name.toLowerCase());
    return `/projects/${slug}/`;
  }
};

export default routes;
