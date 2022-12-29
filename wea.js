let key = "2cfda1f27f8f18422038c85cc30073ad"
let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${42.882004}&lon=${74.582748}&lang=ru&units=metric&appid=${key}`

let $cityName = document.querySelector('.cityName')
let $description = document.querySelector('.description')
let $feels = document.querySelector('.feels')
let $hourly = document.querySelector('.hourly')
let $daily = document.querySelector('.daily')



fetch(url)
    .then (resp => resp.json())
    .then(data =>  {
        console.log(data)
       
    hourlyWeather(data.hourly)
    currentWeather(data.current)
    dailyWeather(data.daily)
    })
function currentWeather(data){
    $feels.textContent = data.feels_like + 'C°'
    $description.insertAdjacentHTML('beforeend', `
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
    <span class="desc">${data.weather[0].description}
    `)
    console.log(data);
}
function hourlyWeather(data){
    console.log(data);
    data.forEach((element,index ) => {
        $hourly.insertAdjacentHTML('beforeend',`
            <div class="hour">
            <span>${index == 0 ? 'Now' :new Date().getHours()}<span>
            <img src="http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png">
            <span>${element.temp} C°<span>
            </div> 
        `)
    });
}
function dailyWeather(data){
    console.log(data);
    data.forEach((element,index) => {
        $daily.insertAdjacentHTML('beforeend',  `
            <div class="day">
            <span class="week">${index == 0 ? 'Today' : new Date().getDay()}</span>
            <img src="http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png">
            <p>${element.temp.min} C° </p>
            <img class="line" src="Vector 8.png">
            <p>${element.temp.max} C°</p>
            
            </div>

        `)
    })
}