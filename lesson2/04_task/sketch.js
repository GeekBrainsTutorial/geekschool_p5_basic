/* BOILERPLATE

function setup() {
  createCanvas(1000, 500)
  background('blue')
  rect(450, 150, 100, 70, 10)
  rect(475, 130, 50, 20)
  line(500, 110, 500, 130)
  ellipse(500, 110, 10, 10)
  ellipse(480, 170, 20, 20)
  ellipse(525, 170, 20, 20)
  rect(475, 190, 55, 20, 10)
  rect(490, 220, 20, 20)
  rect(430, 240, 140, 130)
  rect(460, 370, 20, 50)
  rect(520, 370, 20, 50)
  arc(470, 440, 50, 50, PI, TWO_PI)
  arc(530, 440, 50, 50, PI, TWO_PI)
  ellipse(571, 265, 50, 50)
  ellipse(430, 265, 50, 50)
  rect(575, 260, 20, 100)
  rect(405, 260, 20, 100)
 
}
 
function draw() {
 
}
*/


// код приведен как пример, ученик сам может придумать как раскрасить робота. главное использовать функции fill() stroke() и noStroke() и переместить строительство плечей вниз
function setup() {
  createCanvas(1000, 500)
  background('blue')
  fill('silver')
  rect(450, 150, 100, 70, 10)
  rect(475, 130, 50, 20)
  line(500, 110, 500, 130)
  fill('red')
  ellipse(500, 110, 10, 10)
  fill('yellow')
  noStroke()
  ellipse(480, 170, 20, 20)
  ellipse(525, 170, 20, 20)
  fill('white')
  rect(475, 190, 55, 20, 10)
  stroke('black')
  fill('silver')
  rect(490, 220, 20, 20)
  rect(430, 240, 140, 130)
  rect(460, 370, 20, 50)
  rect(520, 370, 20, 50)
  arc(470, 440, 50, 50, PI, TWO_PI)
  arc(530, 440, 50, 50, PI, TWO_PI)
  rect(575, 260, 20, 100)
  rect(405, 260, 20, 100)
  ellipse(571, 265, 50, 50)
  ellipse(430, 265, 50, 50)

 
}
 
function draw() {
 
}