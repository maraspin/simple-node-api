const noteRoutes = require('./note_routes');

module.exports = function(app, people) {
  noteRoutes(app, people);
  // Other route groups could go here, in the future
};