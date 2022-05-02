// write js code here corresponding to index.html
// You should add submit event on the form
var form  = document.querySelector("#masaiForm");
form.addEventListener("submit",dataMatch);

var matchArr = JSON.parse(localStorage.getItem("schedule")) || [];
console.log(matchArr)
function dataMatch(event){
    event.preventDefault();
    var data ={
        matchNum:form.matchNum.value,
        teamA:form.teamA.value,
        teamB:form.teamB.value,
        date:form.date.value,
        venue:form.venue.value
    }
    matchArr.push(data);
    localStorage.setItem("schedule",JSON.stringify(matchArr));
    window.location.replace("index.html");
}