/* BOILERPLATE

function setup() {
	createCanvas(windowWidth, windowHeight)
}
function draw() {
	background('lightblue')
	robot(mouseX, mouseY)
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
*/


function setup() {
	createCanvas(windowWidth, windowHeight)
}
function draw() {
	background('lightblue')
	if(mouseX<95 && mouseY<200) {
		robot(95, 200)
	}
	else if(mouseX>width-95 && mouseY<200){
		robot(width-95, 200)
	}
	else if(mouseX>width-95 && mouseY>height-140){
		robot(width-95, height-140)
	}
	else if(mouseX<95 && mouseY>height-140){
		robot(95, height-140)
	}
	else if(mouseX<95){
		robot(95, mouseY)
	}
	else if(mouseY<200) {
		robot(mouseX, 200)
	}
	else if(mouseX>width-95) {
		robot(width-95, mouseY)
	}
	else if(mouseY>height-140) {
		robot(mouseX, height-140)
	}
	else {
		robot(mouseX, mouseY)
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