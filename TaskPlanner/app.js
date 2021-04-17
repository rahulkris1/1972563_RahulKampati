let http = require("http");
var qs = require('querystring');
var fs= require('fs');
var path = require('path');
var jsonArray=[]

let port=9999;
// create array Task array 
let server = http.createServer((req,res)=> {
    console.log(req.url)
    if(req.url=="/store" && req.method == "GET")
        {
            res.setHeader("content-type","text/html");  // by default data consider as a html 
            res.end(
            `<head>
            <style>
            body {text-align : center;}
            h1 {color: black;}
            p{color: red;}
            input {
                width: 30%;
                padding: 12px 20px;
                margin: 8px 0;
                box-sizing: border-box;
                margin-left : 30px;
              }
            </style>
            </head>
            <body>
            <h1><u>Task Planner</u></h1>
            <form action="/store" method="post">
            <div style='border: 1px solid black;'>
            <br/><br/>
                <label>EmpId</label> &nbsp;
                <input type="number" name="empid"/><br/><br/>
                <label>TaskId</label> &nbsp;
                <input type="number" name="taskid"/><br/><br/>
                <label>Task</label> &nbsp; &nbsp;
                <input type="text" name="task"/><br/><br/>
                <label>Deadline</label>
                <input type="text" name="deadline"/><br/><br/>
                <input type="submit" value="Submit"/>
                <br/><br/>
            </div>
        </form>
            </body>
            `);

        }
        else if(req.url=="/store" && req.method == "POST")
        {
            var body=''
            console.log(req.url)

            if(req.headers['content-type'] === 'application/x-www-form-urlencoded') {
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                    
               });
                req.on('end', () => {
                    //let data = url.parse(body,true).query;
            
                    var data_1= qs.parse(body)
                    var obj = {"empid":data_1.empid,"taskid":data_1.taskid,"task":data_1.task,"deadline":data_1.deadline}
                   
                    jsonArray.push(obj)
                    console.log(jsonArray)
                });
        
                fs.writeFile('record.json',JSON.stringify(jsonArray),function(err) {     
                    if (err) throw err;
                    console.log("Data is appended to file successfully.")
                    res.end("Data added Successfully!");
                    });
            }
        
             
        }else if(req.url=="/delete"){
            res.setHeader("content-type","text/html");  // by default data consider as a html 
            res.end(
            `<form action="/delete/data" method="post">
            <div style='margin : 100px;'>
            <h1>Delete Data</h1>
            <label>Task Id</label> &nbsp; &nbsp;
            <input type="text" name="taskid"/><br/><br/>
            <input type="submit" value="Delete"/>
            </div>
        </form>`);

       }
        else if(req.url=="/delete/data")
        {
            var data_1=""
            if(req.headers['content-type'] === 'application/x-www-form-urlencoded') {
                let body = '';
                req.on('data', chunk => {
                    body += chunk.toString();
                    
               });

               req.on('end', () => {
                var response= qs.parse(body)
                data_1= response.taskid
                console.log(data_1)
                console.log(jsonArray)
                for( var i = 0; i < jsonArray.length; i++)
                { 
                    if ( jsonArray[i].taskid === data_1) { 
                        jsonArray.splice(i, 1); 
                    }
                }
                console.log(jsonArray)
            });
            fs.unlink(path.join(__dirname,"record.json"),(err)=>{
                if (err) throw err;
                console.log('file deleted successfully...')
            fs.writeFile('record.json',JSON.stringify(jsonArray),function(err) {     
                if (err) throw err;
                  console.log("Data is appended to file successfully.")
                    });
            });
            }
        }
        else if(req.url=="/details"){
               var str=" <h1 style='margin-left : 100px;'>Employee Details</h1><table style='border: 1px solid black; margin-left : 100px; width: 80%'>";
               str+= "<tr>"
               str+=  "<th style='border: 1px solid black;'>Emp Id</th>"
               str+=  "<th style='border: 1px solid black;'>Task Id</th>"
               str+=  "<th style='border: 1px solid black;'>Task</th>"
               str+=  "<th style='border: 1px solid black;'>Deadline</th>"
               str+= "</tr>"
                str +=""
                for (let i=0;i<jsonArray.length;i++){
                    let value= jsonArray[i]
                    str += "<tr style='text-align: center;'>"
                    str += "<td style='border: 1px solid black;'>"+value.empid+"</td>"
                    str += "<td style='border: 1px solid black;'>"+value.taskid+"</td>"
                    str += "<td style='border: 1px solid black;'>"+value.task+"</td>"
                    str += "<td style='border: 1px solid black;'>"+value.deadline+"</td>"
                    str += "</tr>"
                }
                str +=" </table>";
                res.end(str)
        }

        
    
    
});

server.listen(port,()=>console.log(`Server running on port number ${port}`));

    

