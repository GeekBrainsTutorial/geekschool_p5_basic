let city = 'Москва'
let url = 'http://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=099715979800997fed902c8c415868c1'
let weather = ''

function preload() {
  weather = loadJSON(url)
}
function setup() {
  createCanvas(windowWidth, windowHeight)
  console.log(weather)
}

function draw() {
  background('lightblue')
  let t = weather.main.temp - 273.15
  let h = weather.main.humidity
  fill('white')
  rectMode(CORNER)
  rect(0, 0, 400, 400)
  fill('black')
  text('В городе '+city+' температура '+round(t)+' градусов Цельсия', 50, 150)
  text('Относительная влажность ' + h + '%', 100, 200)
  if(t<-5){
    robot(mouseX, mouseY)
  }
  else if(t>-5 && t<0){
    snowman(mouseX, mouseY)
  }
  else if(t>0 && t<10){
    panda(mouseX, mouseY)
  }
  else {
    banana(mouseX, mouseY)
  }
}



function robot(centerX, centerY) {
  fill('white')
  stroke('black')

  rectMode(CENTER)
  rect(centerX, centerY, 140, 130)
  rect(centerX, centerY-120, 100, 70, 10)
  rect(centerX, centerY-165, 50, 20)

  line(centerX, centerY-175, centerX, centerY-195)
  ellipse(centerX, centerY-195, 10, 10)
  ellipse(centerX-20, centerY-135, 20, 20)
  ellipse(centerX+20, centerY-135, 20, 20)
  rect(centerX, centerY-105, 55, 20, 10)

  rect(centerX, centerY-75, 20, 20)

  rect(centerX-35, centerY+90, 20, 50)
  rect(centerX+35, centerY+90, 20, 50)

  arc(centerX-35, centerY+140, 50, 50, PI, TWO_PI)
  arc(centerX+35, centerY+140, 50, 50, PI, TWO_PI)
  rect(centerX+85, centerY-5, 20, 100)
  rect(centerX-85, centerY-5, 20, 100)
  ellipse(centerX+70, centerY-50, 50, 50)
  ellipse(centerX-70, centerY-50, 50, 50)
}

function snowman(centerX, centerY) {
  fill('white')
  noStroke()
  ellipse(centerX,centerY,200,200)
  ellipse(centerX,centerY-100,150,150)
  ellipse(centerX,centerY-200,100,100)
  fill('black')
  ellipse(centerX-20, centerY-210, 20, 20)
  ellipse(centerX+20, centerY-210, 20, 20)
  fill('orange')
  triangle(centerX, centerY-195, centerX-100, centerY-190, centerX, centerY-185)
  strokeWeight(5)
  stroke('black')
  line(centerX-20, centerY-175, centerX+20,centerY-175)
  noStroke()
  fill('silver')
  quad(centerX-40, centerY-230, centerX-20, centerY-280, centerX+20, centerY-280, centerX+40, centerY-230)
}

function panda(cornerX, cornerY) {
  let panda =
  [
    [0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0],
    [1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1],
    [1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1],
    [1,1,1,1,0,0,0,0,0,0,0,0,2,2,1,1,1,1],
    [0,1,1,0,0,0,0,0,0,0,0,0,0,0,2,1,1,0],
    [0,0,1,0,0,1,1,1,0,0,1,1,1,0,2,1,0,0],
    [0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,2,1,0],
    [0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,2,1,0],
    [0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,2,1,0],
    [0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,2,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,0],
    [0,1,0,0,0,0,0,1,1,1,1,0,0,0,2,2,1,0],
    [0,0,1,0,0,0,0,0,1,1,0,0,0,0,2,1,0,0],
    [0,0,1,0,0,0,1,0,0,0,0,1,0,0,2,1,0,0],
    [0,0,0,1,0,0,0,1,1,1,1,0,2,2,1,0,0,0],
    [0,0,0,0,1,1,0,0,2,2,2,2,1,1,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0]
  ]
  let x = cornerX
  let y = cornerY
  for(line of panda) {
    for(block of line) {
      if(block == 0) {
        fill('white')
      } else if(block == 1){
        fill('black')
      }else {
        fill('lightgrey')
      }
      rect(x,y,20,20)
      x+=20
    }
    y+=20
    x=cornerX
  }
}

function banana(startX, startY) {
  let banana = 
  [
    [0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,2,2,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,2,2,1,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,2,2,2,1,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,2,2,2,2,2,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,1,1,1,1,2,2,2,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,1,0,0,0,1,2,2,2,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,1,1,1,0,0,1,2,2,2,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,0,1,0,0,0,1,2,2,2,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,1,1,1,1,2,2,1,2,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,2,2,2,1,1,1,2,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,1,1,1,2,2,1,2,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,2,2,2,1,2,2,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,2,1,1,2,2,2,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,1,1,2,2,2,2,2,1,0,0,0,0,0,0,0],
    [0,1,1,1,0,0,0,0,0,1,2,2,2,2,2,2,2,1,0,0,0,1,1,1,0],
    [1,0,0,1,1,0,0,0,0,1,2,2,2,2,2,2,1,1,0,0,1,1,0,0,1],
    [1,0,0,0,1,0,0,0,1,1,2,2,2,2,2,2,1,0,0,0,1,0,0,0,1],
    [1,0,0,1,1,0,0,0,1,2,2,2,2,2,2,1,1,0,0,0,1,1,0,0,1],
    [0,1,1,1,1,1,0,1,1,2,2,2,2,2,2,1,1,1,0,1,1,1,1,1,0],
    [0,0,0,0,0,1,1,1,1,2,2,2,2,2,1,1,0,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,1,2,2,2,2,2,1,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,2,2,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0],
    [0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0]
  ]
  let x = startX
  let y = startY
  y = startY
  for(line of banana) {
    for(block of line) {
      if(block == 0) {
        fill('white')
      }else if(block == 1) {
        fill('black')
      }else {
        fill('yellow')
      }
      rect(x, y, 20, 20)
      x+=20
    }
    y+=20
    x = startX
  }
}
