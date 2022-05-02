// write js code here corresponding to favourites.html

var favData = JSON.parse(localStorage.getItem("favourites"));
display(favData);

function display(data) {
    document.querySelector("tbody").innerHTML = "";
    favData.forEach(function (data,i) {

    var tr = document.createElement("tr");

    var mNum = document.createElement("td");
    mNum.innerText = data.matchNum
    var tA = document.createElement("td");
    tA.innerText = data.teamA;
    var tB = document.createElement("td");
    tB.innerText = data.teamB;
    var d= document.createElement("td");
    d.innerText = data.date
    var venue = document.createElement("td");
    venue.innerText = data.venue
    var del  = document.createElement("td");
    del.innerText = "Delete";
    del.style.color = "red";
    del.style.cursor = "pointer"
    del.addEventListener("click",function (){
        deleteItem(data,i);
        
    })

    tr.append(mNum,tA,tB,d,venue,del);
    document.querySelector("tbody").append(tr);
})
}

function deleteItem(data,i){
    favData.splice(i,1);
    localStorage.setItem("favourites",JSON.stringify(favData));
    window.location.replace("favourites.html");
}