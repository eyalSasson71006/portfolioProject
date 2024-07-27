const apiKey = "16b9072cd8ba0cf8ecd5ff62555c509c"

const locationInput = document.getElementById("locationInput")
const degrees = document.getElementById("degrees")
const condition = document.getElementById("condition")
const wind = document.getElementById("wind")
const visibility = document.getElementById("visibility")
const humidity = document.getElementById("humidity")
const feels = document.getElementById("feels")
const day1 = document.getElementById("day1")
const day2 = document.getElementById("day2")
const day3 = document.getElementById("day3")
const day4 = document.getElementById("day4")
const day5 = document.getElementById("day5")
const day6 = document.getElementById("day6")

let cityName = locationInput.value

async function getData() {
    try {
        let data = await (await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`)).json();
        let id = data.list[0].weather[0].id;
        if (id == 800) {
            document.body.style.backgroundImage = "url(./images/clear.jpg)";
        } else if (id > 800) {
            document.body.style.backgroundImage = "url(./images/clouds.jpg)";
        } else if (id >= 700 && id < 800) {
            document.body.style.backgroundImage = "url(./images/atmosphere.jpg)";
        } else if (id >= 600 && id < 700) {
            document.body.style.backgroundImage = "url(./images/snow.jpg)";
        } else if (id >= 300 && id < 600) {
            document.body.style.backgroundImage = "url(./images/rain.jpg)";
        } else {
            document.body.style.backgroundImage = "url(./images/storm.jpg)";
        }
        locationInput.value = data.city.name;
        degrees.innerText = data.list[0].main.temp + "°";
        condition.innerText = data.list[0].weather[0].main;
        wind.innerText = data.list[0].wind.speed + " km/h";
        visibility.innerText = data.list[0].visibility / 1000 + "km";
        humidity.innerText = data.list[0].main.humidity + "%";
        feels.innerText = data.list[0].main.feels_like + "°";
        day1.innerHTML = getWeekForecast(data.list, 1)
        day2.innerHTML = getWeekForecast(data.list, 2)
        day3.innerHTML = getWeekForecast(data.list, 3)
        day4.innerHTML = getWeekForecast(data.list, 4)
        day5.innerHTML = getWeekForecast(data.list, 5)
        
    } catch (error) {
        console.log(error);
        alert("Invalid location, try again...")
        locationInput.value = ""
    }
}

locationInput.addEventListener("change", () => {
    cityName = locationInput.value;
    getData();
})

function unixToDay(unixTime) {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date(unixTime*1000);
    return daysOfWeek[date.getDay()];
}

function getWeekForecast(data, dayNum) {
    let weekForecast =[]

    data.forEach(entry => {
        let lastDay = weekForecast.find(element => element.day == unixToDay(entry.dt))
        if(!lastDay){
            weekForecast.push({
                day: unixToDay(entry.dt),
                max: entry.main.temp_max,
                min: entry.main.temp_min,
            })
        }else{
            lastDay.max = Math.max(lastDay.max, entry.main.temp_max);
            lastDay.min = Math.min(lastDay.min, entry.main.temp_min);
        }
    })
    return `
        ${weekForecast[dayNum].day} <br>
        Max: ${weekForecast[dayNum].max}° <br>
        Min: ${weekForecast[dayNum].min}° <br>
        `;
}


getData()