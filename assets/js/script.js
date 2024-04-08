const searchFormEl = document.querySelector('#search-form');
const APIKey = "e1314b6747c43f042575f8bfecca167e";
const resultTextEl = document.querySelector('#result-text');
const resultContentEl = document.querySelector('#result-content');
let day0title = document.querySelector('#day0-title');
let day1title = document.querySelector('#day1-title');
let day2title = document.querySelector('#day2-title');
let day3title = document.querySelector('#day3-title');
let day4title = document.querySelector('#day4-title');
let day5title = document.querySelector('#day5-title');

let day0icon = document.querySelector('#day0-icon');
let day1icon = document.querySelector('#day1-icon');
let day2icon = document.querySelector('#day2-icon');
let day3icon = document.querySelector('#day3-icon');
let day4icon = document.querySelector('#day4-icon');
let day5icon = document.querySelector('#day5-icon');


let day0temp = document.querySelector('#day0-temp');
let day1temp = document.querySelector("#day1-temp");
let day2temp = document.querySelector("#day2-temp");
let day3temp = document.querySelector("#day3-temp");
let day4temp = document.querySelector("#day4-temp");
let day5temp = document.querySelector("#day5-temp");

let day0humidty = document.querySelector('#day0-humidty');
let day1humidty = document.querySelector('#day1-humidty');
let day2humidty = document.querySelector('#day2-humidty');
let day3humidty = document.querySelector('#day3-humidty');
let day4humidty = document.querySelector('#day4-humidty');
let day5humidty = document.querySelector('#day5-humidty');

let day0wind = document.querySelector('#day0-wind');
let day1wind = document.querySelector('#day1-wind');
let day2wind = document.querySelector('#day2-wind');
let day3wind = document.querySelector('#day3-wind');
let day4wind = document.querySelector('#day4-wind');
let day5wind = document.querySelector('#day5-wind');


// function getIconCode(weatherCondition) {

//   switch (weatherCondition) {
//     case 'Clear':
//         icon = '🌤'; // Sunny icon
//         break;
//     case 'Clouds':
//         icon = '🌥'; // Cloudy icon
//         break;
//     case 'Rain':
//         icon = '🌧'; // Rainy icon
//         break;
//     // Add more cases for other weather conditions as needed
//     default:
//         icon = '❓'; // Default icon for unknown weather
//         break;
// }

//   return icon;
// }


function weatherSearch(e){
  e.preventDefault()
  let city = document.querySelector('#search-input');
  city = city.value
  const queryURL =`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=e1314b6747c43f042575f8bfecca167e&units=imperial`;
 

fetch(queryURL)
.then(response => response.json())
.then(data => {console.log(data)
 
  day0title.textContent = data.list[0].dt_txt
  day0icon.src =data.list[0].weather[0].icon
  day0temp.textContent = data.list[0].main.temp 
  day0humidty.textContent = data.list[0].main.humidity 
  day0wind.textContent = data.list[0].wind.gust

  day1title.textContent = data.list[8].dt_txt
  day1icon.textContent =data.list[8].weather[0].icon
  day1temp.textContent = data.list[8].main.temp 
  day1humidty.textContent = data.list[8].main.humidity 
  day1wind.textContent = data.list[8].wind.gust

  day2title.textContent = data.list[16].dt_txt
  day2icon.textContent = data.list[16].weather[0].main
  console.log(day2icon);
  day2temp.textContent = data.list[16].main.temp 
  day2humidty.textContent = data.list[16].main.humidity 
  day2wind.textContent = data.list[16].wind.gust

  day3title.textContent = data.list[24].dt_txt
  day3icon.textContent = data.list[24].weather[0].main
  console.log(day3icon);
  day3temp.textContent = data.list[24].main.temp 
  day3humidty.textContent = data.list[24].main.humidity 
  day3wind.textContent = data.list[24].wind.gust

  day4title.textContent = data.list[32].dt_txt
  day4icon.textContent = data.list[32].weather[0].main
  console.log(day4icon);
  day4temp.textContent = data.list[32].main.temp 
  day4humidty.textContent = data.list[32].main.humidity 
  day4wind.textContent = data.list[32].wind.gust

  day5title.textContent = data.list[39].dt_txt
  day5icon.textContent = data.list[39].weather[0].main
  console.log(day5icon);
  day5temp.textContent = data.list[39].main.temp 
  day5humidty.textContent = data.list[39].main.humidity 
  day5wind.textContent = data.list[39].wind.gust

  
  let icon = data.list[0].weather[0].icon;
  const iconUrl =`https://openweathermap.org/img/wn/${icon}.png`;
  day0icon.setAttribute('src', iconUrl);
  console.log(day0icon);
  // const iconUrl = iconMap[data.list[i].weather[0].icon];
  // weatherIcon.src = iconUrl;
})

.catch(error => console.error('Error:',error));
}
document.querySelector('#original-search').addEventListener('click', weatherSearch);

 