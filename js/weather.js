const API_KEY = "078c5b3254fb1f51b5f77a7f5ff51cfa";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data=>{
        const weather = document.querySelector(".article8 .weather strong");
        const city = document.querySelector(".article8 .weather span");
        const temp = document.querySelector(".article8 .temperature span");
        city.innerText = data.name;
        weather.innerText = data.weather[0].description;
        temp.innerText = data.main.temp;
    });
}

function onGeoError(){
    alert("I can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError)