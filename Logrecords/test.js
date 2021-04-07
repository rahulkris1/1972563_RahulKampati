let obj = require("readline-sync")
let fs = require("fs");
let n = obj.question("How many records you want to store?");


function addData()
{
    let obj1 = {};
    for(var i = 1;i<=n;i++){
        let fname = obj.question("Enter first name : ");
        let lname = obj.question("Enter last name : ");
        let gender = obj.question("Enter gender : ");
        let email = obj.question("Enter email id : ");

        let dateTime=new Date();
        obj1 = {"FirstName":fname,"LastName":lname,"Gender":gender,"Email":email,"date":dateTime};
      
      
    } 
    return obj1;
}

module.exports.readData = () => {
    var records =  addData();
    if(fs.existsSync('record.json'))
    {
        let newTable;
        fs.readFile('record.json',function(err, res) {     
            if (err) throw err;
            newTable = JSON.parse(res);
            console.log("Data is appended to file successfully.")
            if(newTable)
            {
                newTable.table.push(records);
                fs.writeFile('record.json',JSON.stringify(newTable),function(err) {     
                if (err) throw err;
                console.log("Data is appended to file successfully.")
                });
            }
            else
            {
                console.log("No Data")
            }
        });
    
    
    }
    else{
        var data ={
            "table" : []
        }
        data.table.push(records);
        fs.writeFile('record.json', JSON.stringify(data), {spaces:2}, function(err){
        console.log(err);
    });
    }
};



