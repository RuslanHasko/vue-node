const mongoose = require('mongoose'),
      UserModel = require('@ToDoListModels/user');

const models = {
  User: mongoose.model('User')
}

module.exports = models;
