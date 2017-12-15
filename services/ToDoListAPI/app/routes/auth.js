const models = require('@ToDoList/app/setup');

module.exports = (app) => {
  const api = app.ToDoListAPI.app.api.auth;

  app.route('/')
    .get((req, res) => res.send('ToDo List API'));

  app.route('/api/v1/auth')
    .post(api.login(models.User));

}
