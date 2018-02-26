let x = 100
let y = 280


function setup() {
	createCanvas(windowWidth, windowHeight)
}
function draw() {
	background('lightblue')
	if(keyIsPressed){
		if(keyCode == RIGHT_ARROW){
			x=x+1
		}
		else if(keyCode == LEFT_ARROW){
			x=x-1
		}
		else if(keyCode == DOWN_ARROW){
			y=y+1
		}
		else if(keyCode == UP_ARROW){
			y=y-1
		}
	}

	if(x<=100 && y<=280){
		x=100
		y=280
	}
	else if(x>=width-100 && y<=280){
		x=width-100
		y=280
	}
	else if(x>=width-100 && y>=height-100){
		x=width-100
		y=height-100
	}
	else if(x<=100 && y>=height-100){
		x=100
		y=height-100
	}
	else if(x<=100){
		x=100
	}
	else if(y<=280){
		y=280
	}
	else if(x>=width-100){
		x=width-100
	}
	else if(y>=height-100){
		y=height-100
	}

	snowman(x,y)
	
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