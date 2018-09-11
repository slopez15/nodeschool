var mongo = require('mongodb').MongoClient;
mongo.connect("mongodb://localhost:27017/learnyoumongo", function(err, db) {
  // db gives access to the database
  //db.collection('<collection name>');
  //find()
  //process.argv[2] //1st arg
  //parseInt()
/*
collection.find({
  name: 'foo'
}).toArray(function(err, documents) {

})
*/
  
db.close();
});
//














