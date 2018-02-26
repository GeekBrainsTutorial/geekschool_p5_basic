let colors = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'violet', 'pink']
let counter = 0
let x = 200
let x1 = 0
let y1 = 0

function setup() {
  createCanvas(1000, 500)
  background(colors[3])
  console.log(colors.length)
}

function draw() {
  while(counter < colors.length) {
    fill(colors[counter])
    ellipse(x, 300, 100, 100)
    counter++
    x+=100
  }
  x1 = 0
  y1 = 0
  
  for(color of colors) {
    fill(color)
    rect(x1,y1,20,20)
    x1+=20
    y1+=20
  }
}