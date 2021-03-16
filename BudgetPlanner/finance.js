

function insertNewRecord(){
    var obj = JSON.parse(sessionStorage.getItem("managers"));
    var budget = 0;
    var table = document.getElementById("managerList");
    var body = table.getElementsByTagName("tbody")[0];
    for(i=0; i< obj.length; i++)
    {
        var newRow = body.insertRow(); 
        var newCell1 = newRow.insertCell(0);
        var newCell2 = newRow.insertCell(1);
        var newCell3 = newRow.insertCell(2);
        budget += parseInt(obj[i].bVal);
        newCell3.innerHTML = budget;
        newCell1.innerHTML = obj[i].cName;
        newCell2.innerHTML = obj[i].pName;
    }

    var gettotal = document.getElementById("budjtot");
    gettotal.innerHTML = budget;
  

}
