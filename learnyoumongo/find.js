//collection = parrots; print docs where age > process.argv[2];
const url = "mongodb://localhost:27017";
const dbName = "learnyoumongo";
const age = parseInt(process.argv[2]);

var mongoClient = require('mongodb').MongoClient;
mongoClient.connect( (url+"/"+dbName), function(err, client) {
  if (err) {throw err};
  // console.log("\nsuccessfully connected");


  var parrotsCollection = client.collection("parrots");
  // console.log(parrotsCollection);

  var t = parrotsCollection.find({
    age: {$gt: age}
  }).toArray(function(err, documents) {
    if (err) throw err;
    console.log(documents);
  });
  /**/


  // console.log("disconnecting...");
  client.close();
});
/*
  if (connect_err) throw connect_err;
  var parrots = db.collection('parrots');
  parrots.find({
    age: {$gt: passedAge}
  }).toArray(function(find_err, data){
    if (find_err) throw find_err;
    console.log(data);
    db.close();
  });
});
/**/
