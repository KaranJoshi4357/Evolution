// write js code here corresponding to matches.html

var matchData = JSON.parse(localStorage.getItem("schedule"));

var favArr = JSON.parse(localStorage.getItem("favourites"))||[];

display(matchData);
 var check = document.querySelector("#filterVenue").addEventListener("change", filterVenue)

// function filterVenue(check){
//     var data ={check:check.value}
//     console.log(data);

// }

function display(data) {
    document.querySelector("tbody").innerHTML = "";
    matchData.forEach(function (data,i) {

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
    var favourites  = document.createElement("td");
    favourites.innerText = "Favourite";
    favourites.style.color = "green";
    favourites.style.cursor = "pointer"
    favourites.addEventListener("click",function (){
        addToFavourite(data);
    })

    tr.append(mNum,tA,tB,d,venue,favourites);
    document.querySelector("tbody").append(tr);
})
}

function addToFavourite(el){
    favArr.push(el);
    localStorage.setItem("favourites",JSON.stringify(favArr))
}