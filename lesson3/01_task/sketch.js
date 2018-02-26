/* BOILERPLATE

function setup() {
	createCanvas(1000, 1000)
	background('lightblue')
	fill('white')
	noStroke()
	ellipse(500,500,200,200)
	ellipse(500,400,150,150)
	ellipse(500,300,100,100)
	fill('black')
	ellipse(480, 290, 20, 20)
	ellipse(520, 290, 20, 20)
	fill('orange')
	triangle(500, 305, 400, 310, 500, 315)
	strokeWeight(5)
	stroke('black')
	line(480, 325, 520,325)
	noStroke()
	fill('silver')
	quad(460, 270, 480, 220, 520, 220, 540, 270)
}
function draw() {
        	
}
*/

// создайте вашу переменную здесь
function setup() {
	createCanvas(1000, 1000)
	background('lightblue')
	let centerX = width/2
	let centerY = height/2
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
function draw() {
        	
}