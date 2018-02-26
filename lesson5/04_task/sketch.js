// PLEASE USE YOUR OWN API-KEY

// BOILERPLATE
// let weather;
// let city = /* введите название города */
// let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=099715979800997fed902c8c415868c1'

// function preload() {
//   weather = loadJSON(url)
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight)
//   background('grey')
// }

// function draw() {
//   let humidity = /*введите ключи объекта weather под названием main и humidity по очереди*/
//   fill('white')
//   textAlign(CENTER)
//   textSize(30)
//   text('В городе '+city+' влажность ' + humidity + ' %', width/2, height/2)
// }

let weather;
let city = 'Москва'
let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=099715979800997fed902c8c415868c1'

function preload() {
  weather = loadJSON(url)
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight)
  background('grey')
}

function draw() {
  // put drawing code here
  let humidity = weather.main.humidity
  fill('white')
  textAlign(CENTER)
  textSize(30)
  text('В городе '+city+' влажность ' + humidity + ' %', width/2, height/2)
}