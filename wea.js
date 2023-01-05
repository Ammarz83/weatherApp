let key = "f5d9234be1bfda95ccf0f5b0a787d029"





// fetch(url)
//     .then (resp => resp.json())
//     .then(data =>  {
//         console.log(data)
       
//     hourlyWeather(data.hourly)
//     currentWeather(data.current)
//     dailyWeather(data.daily)
//     })
// function currentWeather(data){
//     $feels.textContent = data.feels_like + 'C°'
//     $description.insertAdjacentHTML('beforeend', `
//     <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
//     <span class="desc">${data.weather[0].description}
//     `)
//     console.log(data);
// }
// function hourlyWeather(data){
//     console.log(data);
//     data.forEach((element,index ) => {
//         $hourly.insertAdjacentHTML('beforeend',`
//             <div class="hour">
//             <p>${index == 0 ? 'Now' :new Date().getHours()}</p>
//             <img src="http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png">
//             <p>${element.temp} C°</p>
//             </div> 
//         `) 
//     });
// }
// function dailyWeather(data){
//     console.log(data);
//     data.forEach((element,index) => {
//         $daily.insertAdjacentHTML('beforeend',  `
//             <div class="day">
//             <p class="week">${index == 0 ? 'Today' : new Date().getDay()}</p>
//             <img src="http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png">
//             <p>${element.temp.min} C° </p>
//             <img class="line" src="Vector 8.png">
//             <p>${element.temp.max} C°</p>
            
//             </div>

//         `)
//     })
// }

let cities = [
    {
        lat:42.882004  ,
        lon:74.582748
    },
    {
        lat:40.513996,
        lon:72.816101
    },
    {
        lat:42.8417, 
        lon:75.3016
    },
    {
        lat:40.0626, 
        lon:70.8194
    },
    {
        lat:42.3333, 
        lon:72
    },
    {
        lat:41.4287, 
        lon:75.9911
    },
    {
        lat:42.4907, 
        lon:78.3936
    },
    {
        lat:40.9333, 
        lon:73
    }
]
getData(cities[0])

async function getData(city){
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&lang=ru&units=metric&appid=${key}`
    let resp = await fetch(url)
    let data = await resp.json()
    console.log(data);
    currentWeather(data.current)
    hourlyWeather(data.hourly)
    dailyWeather(data.daily)
}

function currentWeather(data){
    let $title = document.querySelector('.title')
    let $currentImg = document.querySelector('.icon')
    let $description = document.querySelector('.description')
    let $feels = document.querySelector('.feels')

    $title.textContent = data.temp
    $description.textContent = data.weather[0].description
    $feels.textContent = "Ощущается" + "   " + data.feels_like + "C°"
    $currentImg.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
}

function hourlyWeather(data){
    let $hourly = document.querySelector('.hourly')
    data.forEach((element, index) => {
        $hourly.insertAdjacentHTML('beforeend',`
        <div class="hour">
        <p>${index == 0 ? 'сейчас' :times[new Date().getHours() + index ]} </p>
        <img src="http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png"
        <p>${element.temp}C°</p>
        </div>
        `)
    });
}

function dailyWeather(data){
    let $daily = document.querySelector('.daily')
    data.forEach((element,index) => {
        $daily.insertAdjacentHTML('beforeend', `
        <div class="day">
        <p>${index == 0 ? 'сегодня'  :week[new Date().getDay() + index ]}</p>
        <img src="http://openweathermap.org/img/wn/${element.weather[0].icon}@2x.png"
        <p>${element.temp.min}C°</p>
        <p>${element.temp.max}C°</p>

        </div>
        `)
    })
}

document.querySelector('select').addEventListener('change', function(){
    switch(this.value){
        case "osh":
            getData(cities[1])
            break
        case 'bishkek':
            getData(cities[0])
            break    
        case 'tokmok':
            getData(cities[2])
            break 
        case 'batken':
            getData(cities[3])
            break  
        case 'talas':
            getData(cities[4])
            break   
        case 'naryn':
                getData(cities[5])
                break  
        case 'karakol':
            getData(cities[6])
            break  
        case 'djalaAbad':
            getData(cities[7])
            break   
        case 'bishkek':
            getData(cities[8])
            break              
    }   
})

let week = [
    "Воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "Четверг",
    "пятница",
    "суббота",
    "Воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "Четверг",
    "пятница",
    "суббота"



]


let times = [
    "24:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "24:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "24:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "24:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
    "24:00"
]