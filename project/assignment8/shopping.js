window.onload = pageLoad;

function pageLoad(){
    var xhr = new XMLHttpRequest(); 
    xhr.open("GET", "cloth.json"); 
    xhr.onload = function() { 
        var jsdata = JSON.parse(xhr.responseText);
        console.log(jsdata);
        showData(jsdata);
    }; 
    xhr.onerror = function() { alert("ERROR!"); }; 
    xhr.send();
}

function showData(data){
    var showdiv = document.getElementById("layer")
    var divlog = showdiv.querySelectorAll("div");
    var keys = Object.keys(data);
    for(var i =0; i< keys.length;i++){
        var item = data[keys[i]];
        var itembox = divlog[i];

        var itemImage = document.createElement("img");
        itemImage.src = item.img;
        itembox.appendChild(itemImage);
        var itemDetail = document.createElement("p");
        itemDetail.innerHTML = item.brand;
        itembox.appendChild(itemDetail);
        var itemDetail2 = document.createElement("p");
        itemDetail2.innerHTML = "price : " + item.price;
        itembox.appendChild(itemDetail2);
    }
}