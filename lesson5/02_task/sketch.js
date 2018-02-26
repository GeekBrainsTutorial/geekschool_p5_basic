/* BOILERPLATE

let colors = ['gold', 'silver', 'lightgreen']
let x = 95
function setup() {
	createCanvas(windowWidth, windowHeight)
	background('lightblue')

}
function draw() {

}

function robot(centerX, centerY, allColor) {
	fill(allColor)
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
*/


let colors = ['gold', 'silver', 'lightgreen']
let x = 95
function setup() {
	createCanvas(windowWidth, windowHeight)
	background('lightblue')

}
function draw() {
	for(color of colors) {
		robot(x, height/2, color)
		x+=200
	}
}

function robot(centerX, centerY, allColor) {
	fill(allColor)
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