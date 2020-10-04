'use strict';

var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://db_mapping:27017";

let user_database = null


const connection = (callback) => {
    const client = new MongoClient(url, { keepAlive: 1,useUnifiedTopology: true,useNewUrlParser: true });
    client.connect((err,client) => {
        console.log("Successful connect to database")
        // perform actions on the collection object
        user_database = client.db('user')
        return callback(err)
    })
}

module.exports.connectToServer = connection
module.exports.getUserDb = ()=>{return user_database}

// // App
// const app = express();
// app.get('/', (req, res) => {
// 	var username = req.query.username;

// 	MongoClient.connect(url, function(err, db) {
//   	if (err) throw err;

//   	var dbo = db.db('user');
//   	dbo.collection('userProfile').findOne({ uname: username }, function(err, result) {
//   		if (err) throw err;
//     	profile_image = result.profile_image;
//     	db.close();
//     	});

// 	});

//     res.status(200).send({
//           username: username,
//           profile_image: profile_image
//     });
// });
