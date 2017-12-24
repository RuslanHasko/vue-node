module.exports = {
  secret: 'todolistsecret',
  session: { session: false },
  database: 'mongodb://RuslanHasko:MaRk_mongodb_1494@' +
  'ruslanhasko-cluster1-shard-00-00-uflk4.mongodb.net:27017,' +
  'ruslanhasko-cluster1-shard-00-01-uflk4.mongodb.net:27017,' +
  'ruslanhasko-cluster1-shard-00-02-uflk4.mongodb.net:27017/todolist' +
  '?replicaSet=RuslanHasko-Cluster1-shard-0' +
  '&ssl=true' +
  '&authSource=admin'
}
