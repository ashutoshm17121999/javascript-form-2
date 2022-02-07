var product=[];
function call(){
var id = document.getElementById('pId').value;
var name = document.getElementById('pName').value;
var price = document.getElementById('pPrice').value;
return{
    'pId': id,
    'pName': name,
    'pPrice': price,
}
}
function addProduct(){
    var products = call()
    product.push(products);
    console.log([0]);
    table = document.getElementById('table1');
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    for(var i = 0; i<product.length; i++){
        cell1.innerHTML = product[i].pId
        cell2.innerHTML = product[i].pName
        cell3.innerHTML = product[i].pPrice
    }
}