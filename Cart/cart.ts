

// export class product {

//     title : String;
//     price : Number;

// }


var obj: any[] = [];
var prodd : any = {};

function loadDataa(title : string, price : string) : void{
   
    var data = JSON.parse(sessionStorage.getItem("items") || '[]');
    if(data)
    {
        obj = data;
    }
    prodd.price = parseInt(price);
    prodd.title = title;

    obj.push(prodd);
    sessionStorage.setItem("items", JSON.stringify(obj));
    console.log(obj);
    alert("Item Added to cart successfully");
}

function checkout(){
    var check: any[] = [];
    var total: number = 0;
    var table : any = null;
    check = JSON.parse(sessionStorage.getItem("items") || '[]');
     table = document.getElementById("checkoutList");
    var body = table.getElementsByTagName("tbody")[0];
    for(let i=0; i < check.length; i++){
        var newRow = body.insertRow(); 
        var newCell1 = newRow.insertCell(0);
        var newCell2 = newRow.insertCell(1);
        
        total += parseInt(check[i].price);
        console.log(total);
        newCell1.innerHTML = check[i].title;
        newCell2.innerHTML = check[i].price;

    }
    (<HTMLInputElement>document.getElementById("total")).innerHTML = total.toString();
}

