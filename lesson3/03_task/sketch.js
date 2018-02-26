/* BOILERPLATE
function setup() {
	createCanvas(windowWidth, windowHeight)
}
function draw() {
	background('lightblue')
	let centerX = mouseX
	let centerY = mouseY
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
*/

function setup() {
	createCanvas(windowWidth, windowHeight)
}
function draw() {
	background('lightblue')
	snowman(140, height-100)
	robot(width-140, height-140)
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