

var objArr = []
function onAdd(){
   var data = JSON.parse(sessionStorage.getItem("managers"));
   if(data)
   {
     objArr = data;
   }
    formData();
}

function formData(){
    var bObj = {};
    bObj.cName = document.getElementById("Clid").value;
    bObj.pName = document.getElementById("Pid").value;
    bObj.bVal = document.getElementById("Bid").value;
    objArr.push(bObj);
    alert("Data added!")
    sessionStorage.setItem("managers", JSON.stringify(objArr));
    resetData();

}

function resetData() {
    document.getElementById("Clid").value="";
    document.getElementById("Pid").value="";
    document.getElementById("Bid").value="";

    }
    