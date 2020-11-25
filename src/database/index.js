const mongoose = require('mongoose'); 


mongoose.connect('mongodb://localhost/projeto-getic', {useMongoClient: true, useNewUrlParser: true,
useUnifiedTopology: true,
useCreateIndex: true}); 
mongoose.Promise = global.Promise;


module.exports = mongoose;