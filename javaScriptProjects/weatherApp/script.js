const apiKey = "16b9072cd8ba0cf8ecd5ff62555c509c"

const locationInput = document.getElementById("locationInput")
const degrees = document.getElementById("degrees")
const condition = document.getElementById("condition")
const wind = document.getElementById("wind")
const visibility = document.getElementById("visibility")
const humidity = document.getElementById("humidity")
const feels = document.getElementById("feels")

let cityName = locationInput.value

async function getData() {
    try {
        let data = await (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`)).json();

        let id = data.weather[0].id;
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
        locationInput.value = data.name;
        degrees.innerText = data.main.temp + "°";
        condition.innerText = data.weather[0].main;
        wind.innerText = data.wind.speed + " km/h";
        visibility.innerText = data.visibility / 1000 + "km";
        humidity.innerText = data.main.humidity + "%";
        feels.innerText = data.main.feels_like + "°";
    } catch (error) {
        alert("Invalid location, try again...")
        locationInput.value = ""
    }
}

locationInput.addEventListener("change", () => {
    cityName = locationInput.value;
    getData();
})

getData()