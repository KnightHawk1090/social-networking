//import necessary functions
const { connect, connection } = require('mongoose');

// define connection string for the DB. 
const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/socialDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;