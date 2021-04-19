// Connect API
const DOMAIN = `http://api.openweathermap.org/data/2.5/weather?`
const API_KEY = `&APPID=10d288b61704a5239e53beef7ef992cb`
const UNIT = `&units=imperial`
// const URL = `${DOMAIN}q=${inputValue}${API_KEY}${UNIT}`

// Search Functionality
const searchLocation = async () => {
  try {
    let inputValue = document.querySelector(`#input`).value
    if (inputValue === "") {
      return null
    } else {
      let response = await axios.get(
        `${DOMAIN}q=${inputValue}${API_KEY}${UNIT}`
      )
      showWeatherData(response.data)
      // console.log(response)
    }
  } catch (error) {
    console.error(error)
  }
}

searchLocation()

// Display Endpoint Data
const showWeatherData = (data) => {
  let mainCard = `
  <h1 id="main-data">${data.name}<br><small>Current Conditions: ${data.weather[0].main}</small></h1> 
  ` // <i>${data.weather[0].icon}</i>
  document
    .querySelector(`.main-card`)
    .insertAdjacentHTML(`afterbegin`, mainCard)

  let card1 = `
  <h3 id="main-temp">Current:<br> <span>${data.main.temp}°</span></h3>
  `
  document.querySelector(`.card-1`).insertAdjacentHTML(`afterbegin`, card1)

  let card2 = `
  <h3 id="feels-like">Feels Like:<br> <span>${data.main.feels_like}°</span></h3>
  `
  document.querySelector(`.card-2`).insertAdjacentHTML(`afterbegin`, card2)

  let card3 = `
  <h3 id="humidity">Humidity:<br> <span>${data.main.humidity}%</span></h3>
  `
  document.querySelector(`.card-3`).insertAdjacentHTML(`afterbegin`, card3)

  let card4 = `
  <h3 id="wind">Wind Speed:<br> <span>${data.wind.speed} mph</span></h3>
  `
  document.querySelector(`.card-4`).insertAdjacentHTML(`afterbegin`, card4)

  let card5 = `
  <h3 id="min-max">High/Low:<br> <span>${data.main.temp_min}°/${data.main.temp_max}°</span></h3>
  `
  document.querySelector(`.card-5`).insertAdjacentHTML(`afterbegin`, card5)
}

// Changing Background Images

// Event Listener

const searchButton = document.querySelector(`#search-button`)
searchButton.addEventListener("click", searchLocation)

// Clear

// const removeWeather = () => {
//   const removeData = document.querySelector(".main-card", ".card")
//   while (removeData.lastChild) {
//     removeData.removeChild(removeData.lastChild)
//   }
// }
