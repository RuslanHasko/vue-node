require('module-alias/register');
const log = require('color-log');

const http = require('http'),
      ToDoListAPI = require('@ToDoListAPI'),
      ToDoListServer = http.Server(ToDoListAPI),
      ToDoListPORT = process.env.PORT || 3001,
      LOCAL = '0.0.0.0';

ToDoListServer.listen(ToDoListPORT, LOCAL, () => log.info(`\nToDoListAPI running on ${ToDoListPORT}`));
