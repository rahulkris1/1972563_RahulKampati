// export class product {
//     title : String;
//     price : Number;
// }
var obj = [];
var prodd = {};
function loadDataa(title, price) {
    var data = JSON.parse(sessionStorage.getItem("items") || '[]');
    if (data) {
        console.log(data);
        obj = data;
    }
    prodd.price = parseInt(price);
    prodd.title = title;
    obj.push(prodd);
    sessionStorage.setItem("items", JSON.stringify(obj));
    console.log(obj);
    alert("Item Added to cart successfully");
}
function checkout() {
    var check = [];
    var total = 0;
    var table = null;
    check = JSON.parse(sessionStorage.getItem("items") || '{}');
    console.log(check);
    table = document.getElementById("checkoutList");
    var body = table.getElementsByTagName("tbody")[0];
    for (var i = 0; i < check.length; i++) {
        var newRow = body.insertRow();
        var newCell1 = newRow.insertCell(0);
        var newCell2 = newRow.insertCell(1);
        total += parseInt(check[i].price);
        console.log(total);
        newCell1.innerHTML = check[i].title;
        newCell2.innerHTML = check[i].price;
    }
    document.getElementById("total").innerHTML = total.toString();
}
