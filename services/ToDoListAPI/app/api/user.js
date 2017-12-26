const mongoose = require('mongoose');
const api = {};

// Setup Admin Account
api.setup = (User) => (req, res) => {
  const admin = new User({
    username: 'admin',
    email: 'admin@admin.admin',
    password: 'admin'
  });

  admin.save(error => {
    if (error) {
      throw error;
    }
    console.log('Admin account was succesfully set up');
    res.json({
      success: true
    });
  })
}

// Return list of all users in system
api.index = (User, ToDoListToken) => (req, res) => {
  const token = ToDoListToken;
  if (token) {
    User.find({}, (error, users) => {
      if (error) {
        throw error;
      }
      res.status(200).json(users);
    });
  } else {
    return res.status(403).send({
      success: false,
      message: 'Unauthorized'
    });
  }
}

// SignUp
api.signup = (User) => (req, res) => {
  if (!req.body.username || !req.body.email || !req.body.password) {
    res.json({
      success: false,
      message: 'Please, pass a username. e-mail and password.'
    });
  } else {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email.toLowerCase(),
      password: req.body.password
    });
    newUser.save((error) => {
      if (error) {
        return res.status(400).json({
          success: false,
          message:  'Username already exists.'
        });
      }
      res.json({
        success: true,
        message: 'Account created successfully'
      });
    })
  }
}

module.exports = api;
