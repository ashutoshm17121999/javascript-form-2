// changes are mentioned below
var array=[];
function myFunction(){
    var id = document.getElementById('pID').value;
    var name1 = document.getElementById('pName').value;
    var price = document.getElementById('pPrice').value;
    myLogic(id, name1, price);
    myDisplay(array);
}
function myLogic(id , name1 , price){
    for(var i = 0;i<array.length;i++){
        console.log(array[i]);
        if (array[i].pID == id)
            {
                     alert("Product ID already exists");
                 return;
            }
    }
    obj= {};
    obj['pID'] = id;
    obj['pName'] = name1;
    obj['pPrice'] = price;
    array.push(obj);
}
function myDisplay(result){
var text = document.getElementById('table1');
text.innerHTML = "<tr>\
     <td>Product Id</td>\
     <td>Product Name</td>\
     <td>Product Price</td>\
    </tr>";
    for(let i =0; i<result.length;i++){
        text.innerHTML+='<tr>\
         <td>' + result[i].pID + '</td>\
         <td>' + result[i].pName + '</td>\
         <td>' + result[i].pPrice + '</td>\
     </tr>';
    }
    
}