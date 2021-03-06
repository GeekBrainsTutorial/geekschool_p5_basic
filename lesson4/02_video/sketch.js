let color = 'black'

function setup() {
	createCanvas(1000, 1000)
}
function draw() {
	background('lightblue')
	if(mouseIsPressed) {
		color = 'red'
	}
	else {
		color = 'black'
	}

	if(mouseX<100 && mouseY<280) {
		snowman(100, 280, color)
	}
	else if(mouseX>width-100 && mouseY<280) {
		snowman(width-100, 280, color)
	}
	else if(mouseX>width-100 && mouseY>height-100) {
		snowman(width-100, height-100, color)
	}
	else if(mouseX<100 && mouseY>height-100) {
		snowman(100, height-100, color)
	}
	else if(mouseX<100){
		snowman(100, mouseY, color)
	}
	else if(mouseX>width-100){
		snowman(width-100, mouseY, color)
	}
	else if(mouseY>height-100){
		snowman(mouseX, height-100, color)
	}
	else if(mouseY<280){
		snowman(mouseX, 280, color)
	}
	else {
		snowman(mouseX, mouseY, color)
	}
	
}

function snowman(centerX, centerY, eyeColor) {
	fill('white')
	noStroke()
	ellipse(centerX,centerY,200,200)
	ellipse(centerX,centerY-100,150,150)
	ellipse(centerX,centerY-200,100,100)
	fill(eyeColor)
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