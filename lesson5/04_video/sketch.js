// PLEASE USE YOUR OWN API-KEY

let weather;
let city = 'Москва'
let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=099715979800997fed902c8c415868c1'

function preload() {
  weather = loadJSON(url)
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  background('grey')
}

function draw() {
  let tCelsium = weather.main.temp - 273.15
  fill('white')
  textAlign(CENTER)
  textSize(30)
  text('В городе '+city+' сейчас ' + round(tCelsium) + ' градусов', width/2, height/2)
}
