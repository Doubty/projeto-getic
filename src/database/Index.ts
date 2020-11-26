import { connect } from 'mongoose';

const database = connect('mongodb://localhost/projeto-getic', {
  useMongoClient: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

export default database;
