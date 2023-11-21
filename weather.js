var prevDiv = null;
var mainDay = null;
var dateObj = new Date();
console.log(dateObj);
var day = dateObj.getDay();
var days = 0;
// Fetching Day Code
var daysarr = ["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
let mainDayFlex = document.querySelector(".flex-1");
mainDayDiv = mainDayFlex.querySelector(".Day");
mainDayDiv.innerText = daysarr[day];

//onEventListener Code
const myClick = (e) => {
    console.log(e.target, e.class)

    if(prevDiv) { 
        prevDiv.style.color = 'black';        
    }

    const myElementID = e.target;
    myElementID.style.color = "blue";
    
    prevDiv = myElementID;
    if(prevDiv.innerText ==="OTTAWA"){
        cityOttawa(); 
        let segmentDiv = document.querySelector(".segment");
        console.log(segmentDiv);
        for(let x=0;x<6;x++){
        let subDayDiv = segmentDiv.querySelector(`.Day${x}`);
        console.log(subDayDiv);
        let subDay = subDayDiv.querySelector(".Day");
        days = findDay(day+1);
        subDay.innerText = daysarr[days];
        console.log(subDay.innerText);
        }
    }
    else if(prevDiv.innerText ==="MOSCOW"){
        cityMoscow();
        
    }
    else if(prevDiv.innerText ==="TOKYO"){
        console.log(mainDayDiv);
        cityTokyo();
        
    }
}
function cityOttawa(){
    let weatherIconFlex = document.querySelector(".flex-2");
    let weatherIconDiv = weatherIconFlex.querySelector(".weathericon");
    let weatherIcon = weatherIconDiv.querySelector("#imagecloud");
    weatherIcon.src = "../weatherIcons/rainfall.png";
    let innerFlex = document.querySelector(".inner-flex");
    let temp = innerFlex.querySelector(".temp");
    temp.innerText = "18\u00B0";
    let climate = innerFlex.querySelector(".climate");
    climate.innerText = "Windy";
}
function cityMoscow(){
    let weatherIconFlex = document.querySelector(".flex-2");
    let weatherIconDiv = weatherIconFlex.querySelector(".weathericon");
    let weatherIcon = weatherIconDiv.querySelector("#imagecloud");
    weatherIcon.src = "../weatherIcons/sunny.png";
    let innerFlex = document.querySelector(".inner-flex");
    let temp = innerFlex.querySelector(".temp");
    temp.innerText = "28\u00B0";
    let climate = innerFlex.querySelector(".climate");
    climate.innerText = "Sunny";
}
function cityTokyo(){
    let weatherIconFlex = document.querySelector(".flex-2");
    let weatherIconDiv = weatherIconFlex.querySelector(".weathericon");
    let weatherIcon = weatherIconDiv.querySelector("#imagecloud");
    weatherIcon.src = "../weatherIcons/drizzle.png";
    let innerFlex = document.querySelector(".inner-flex");
    let temp = innerFlex.querySelector(".temp");
    temp.innerText = "13\u00B0";
    let climate = innerFlex.querySelector(".climate");
    climate.innerText = "Drizzle";
}

function findDay(days){
    if(days>=7){
        days = days-7;
    }
    return days;
}
    

    

