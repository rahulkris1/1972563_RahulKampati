let app = require("express")();
let http = require("http").Server(app);   // to load the library we have run port number using hhtp module 
let io = require("socket.io")(http);
var mongoClient = require('mongodb').MongoClient

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"/chat.html");
})

io.on("connection",(socket)=> {
    console.log("Client connected to application.....");
    
    socket.on("chat",(data)=> {
        console.log(data);
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
        
            db.collection('chat').insertOne(data, function(err, res) {
                if (err) {
                    console.log(err);
                    throw err;
                }
                else
                    console.log("Data Added " + res);
            });

        }

    })
})
})


http.listen(9090,()=>console.log('server running on port number 9090'));