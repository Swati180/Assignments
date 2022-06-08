
document.querySelector("form").addEventListener("submit",DSARevision);

let array=JSON.parse(localStorage.getItem("array"))//null
let Array= JSON.parse(localStorage.getItem("Data"))||[]
// if(localStorage.getItem("Data")==null){
//     array=[]
// }else{
//     array= JSON.parse(localStorage.getItem("Data"))
// }
// instead of above

function DSARevision(event){
event.preventDefault()

   let Obj={
       Title:document.querySelector("#title").value,
       Link:document.querySelector("#link").value,
       Difficulty:document.querySelector("#difficulty").value,
    };

    array.push(Obj);
    displayTable(array);
    localStorage.setItem("Data",JSON.stringify(array))
}

function displayTable(array){
    array.forEach(function (elem){
        document.querySelector("tbody").innerHTML=""
        let tr = document.createElement("tr")
        let td1= document.createElement("td")
        td1.innerText=elem.Title;
        let td2= document.createElement("td")
        td2.innerText=elem.Link;
        let td3= document.createElement("td")
        td3.innerText=elem.Difficulty;
        let td4= document.createElement("td")
        if (elem.Difficulty == "Easy"){
            td4.innerText="No";
        }else{
            td4.innerText="Yes";
        }
   tr.append(td1,td2,td3,td4);
   document.querySelector("tbody").append(tr);
   
   
    })
    
}