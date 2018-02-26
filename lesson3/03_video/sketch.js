function setup() {
	createCanvas(1000, 1000)
}
function draw() {
	background('lightblue')
	snowman(500, 700)
	snowman(800, 400)
	snowman(200, 600)
	snowman(mouseX, mouseY)
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