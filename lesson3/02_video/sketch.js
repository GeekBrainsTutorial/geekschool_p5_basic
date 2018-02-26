function setup() {
	createCanvas(windowWidth, windowHeight)
}
function draw() {
	background('blue')
	noStroke()
	fill('green')
	ellipse(mouseX, mouseY, 40, 40)
}