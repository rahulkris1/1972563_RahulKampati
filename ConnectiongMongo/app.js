let app = require("express")();
let bodyParser = require("body-parser");
// enable body part data
app.use(bodyParser.urlencoded({extended:true}));   
let port=9090; 

let obj = require("mongoose");  //load the module 
obj.Promise= global.Promise;       // creating the reference. 
let url = "mongodb://localhost:27017/meanstack";
const mongooseDbOption ={       // to avoid warning 
    useNewUrlParser: true,
    useUnifiedTopology: true
}
obj.connect(url,mongooseDbOption);   //ready to connect 
let db = obj.connection;    // connected to database. 
db.on("error",(err)=>console.log(err));
db.once("open",()=>{

    //Defined the Schema 
    let ProductSchema = obj.Schema({
        _cid:Number,
        cname:String,
        details:String,
        amount:Number
    });
    // Creating Model using schema 
    let Product = obj.model("",ProductSchema,"courseDB");
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.get("/add",(req,res)=> {
    res.sendFile(__dirname+"/add.html");
})

app.get("/update",(req,res)=> {
    res.sendFile(__dirname+"/update.html");
})

app.get("/delete",(req,res)=> {
    res.sendFile(__dirname+"/delete.html");
})

app.get("/fetch",async(req,res)=> {

    obj.connect(url,mongooseDbOption);   //ready to connect 
    let db = obj.connection;    // connected to database. 
    db.on("error",(err)=>console.log(err));

    const items = await db.collection('courseDB').find({}).toArray();
    console.log(items);
    res.send(items);
    db.close();   
    })


app.post("/addcourse",(req,res)=>{
    obj.connect(url,mongooseDbOption);   //ready to connect 
    let db = obj.connection;    // connected to database. 
    db.on("error",(err)=>console.log(err));

    const p1 = new Product({_cid:req.body.cId, cname:req.body.cName, details:req.body.des, amount:req.body.amnt});
    p1.save((err,result)=>{
        if(!err){
            console.log("Course inserted successfully"+result)
            res.send("Course inserted successfully")
        }else {
            console.log(err);
            res.send("Course not inserted ")
        }
        db.close();       //close the connectiond..
    })

})

app.post("/updateCourse",(req,res)=>{
    obj.connect(url,mongooseDbOption);   //ready to connect 
let db = obj.connection;    // connected to database. 
db.on("error",(err)=>console.log(err));

    db.collection("courseDB").updateOne({_cid:Number(req.body.cId)},{$set:{amount:Number(req.body.amnt)}},(err,result)=> { 
        if(!err){
            console.log("Course updated successfully"+result)
            res.send("Course updated successfully")
        }else {
            console.log(err);
            res.send("Course not updated ")
        }
        db.close();          //close the connectiond..
    })

})

app.post("/delCourse",(req,res)=>{
    obj.connect(url,mongooseDbOption);   //ready to connect 
let db = obj.connection;    // connected to database. 
db.on("error",(err)=>console.log(err));

    db.collection("courseDB").deleteOne({_cid:Number(req.body.cId)},(err,result)=> { 
        if(!err){
            console.log("Course deleted successfully"+result)
            res.send("Course deleted successfully")
        }else {
            console.log(err);
            res.send("Course not deleted ")
        }
        db.close();        //close the connectiond..
    })

})

})
    app.listen(port,()=>console.log(`Server running on port number ${port}`))