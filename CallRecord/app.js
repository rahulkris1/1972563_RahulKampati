var mongoClient = require('mongodb').MongoClient
const fs = require('fs');
mongoClient.connect('mongodb://localhost:27017', function(err,client) {
    if (err) 
    {
        console.log(err);
        throw err;
    }
    else
    {
        const db = client.db("meanstack");
        console.log("Database Connected");
        fs.readFile("call_data.json",function (err,data) {
            if (err) {
            return console.log(err);
            }
            const record = JSON.parse(data)
            db.collection('callData').insert(record, function(err, res) {
                if (err) {
                    console.log(err);
                    throw err;
                }
                console.log("Data Added " + res);
            });
        });
    }});