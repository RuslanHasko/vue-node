const log = require('color-log');

module.exports = (mongoose, config) => {
  const database = mongoose.connection;
  mongoose.Promise = Promise;
  mongoose.connect(config.database, {
    useMongoClient: true,
    promiseLibrary: global.Promise
  });

  database.on('error', error => log.error(`Connection to ToDoList database failed:\n${error}`));
  database.on('connected', () => log.info('Connected to ToDoList database\n'));
  database.on('disconnected', () => log.warn('Disconnected from ToDoList database\n'));

  process.on('SIGINT', () => {
    database.close(() => {
      log.mark('ToDoList terminated, connection closed\n');
      process.exit(0);
    })
  });

};
