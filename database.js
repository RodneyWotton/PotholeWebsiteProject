function getdata(){
    var onstreet = document.getElementById("onstreet").value;
    var fromstreet = document.getElementById("fstreet").value;
    var tostreet = document.getElementById("tstreet").value;
    var size = document.getElementById("size").value;
    var addcom = document.getElementById("comments").value;

    var currentdate = new Date(); 
    var datetime = (currentdate.getMonth()+1) + "/"
                + currentdate.getDate()  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();

    var i = 0;
    for(var x = 0; x < 100; x++){
        var items = localStorage.getItem('location' + x);
        if (items === null || items.length === 0){
            i = x;
            break;
        }
    }
    localStorage.setItem("location" + i, onstreet + ", " + fromstreet + ", " + tostreet);
    localStorage.setItem("sizeest" + i, size);
    localStorage.setItem("comments" + i, addcom);
    localStorage.setItem("date" + i, datetime);
}

function putintodatabase(){
    
    var table = document.getElementById("myTable");

    var i = 0;
    for(var x = 0; x < 100; x++){
        var items = localStorage.getItem('location' + x);
        if (items === null || items.length === 0){
            i = x;
            break;
        }
    }

    for(var x = 0; x < i; x++){
        var row = table.insertRow(1);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);

        cell1.innerHTML = localStorage.getItem("location" + x);
        cell2.innerHTML = localStorage.getItem("sizeest" + x);
        cell3.innerHTML = localStorage.getItem("comments" + x);
        cell4.innerHTML = localStorage.getItem("date" + x);
    }
}

function changeColor(){
    let color = document.getElementById('colorInputColor').value
    document.body.style.backgroundColor = color;
}

function headquarters_appear(){
    document.getElementById('headquarters').style.visibility="visible"
    } 

function headquarters_disappear(){
    document.getElementById('headquarters').style.visibility="hidden"
}