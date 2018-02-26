// BOILERPLATE

// let x = 500
// let y = 250

// function setup() {
//   createCanvas(1000, 500)
// }

// function draw() {
//   background('green')
//   field()
//   fill('yellow')
//   if(/* событие нажатия на клавиатуру ){
//     if(keyCode == /*клавиша вверх*/) {
//       y = y-1
//     }
//     else if(keyCode == /*клавиша вниз*/) {
//        y = y+1
//     }
//     else if(keyCode == /*клавиша влево*/) {
//       x = x-1
//     }
//     else if(keyCode == /*клавиша вправо*/) {
//        x = x+1
//     }

//   }
//   if((x больше или равен 35 И y меньше или равен 35) ИЛИ 
//     (x больше или равен ширина-35 И y меньше или равен 35) ИЛИ 
//     (x больше или равен ширина-35 И y больше или равен высота-35) ИЛИ 
//     (x меньше или равен 35 И y больше или равен высота-35) ИЛИ 
//     (x равен ширина/2 И y меньше или равен 35) ИЛИ 
//     (x равен ширина/2 И y больше или равен высота-35)) {
//     x=500
//     y=250

//   } else if(x<=35) {
//     x=35
//   }
//   else if(x>=width-35) {
//     x=width-35
//   }
//   else if(y<=35) {
//     y=35
//   }
//   else if(y>=height-35) {
//     y=height-35
//   }
//   else if(x>30 && y>30 && x<width-30 && y<height-30) {
//   }
//   ellipse(x, y, 30,30)
// }

// function field() {
//   noStroke()
//   fill('orange')
//   rect(0,0, width, 20)
//   rect(0,0, 20, height)
//   rect(0,height-20, width, 20)
//   rect(width-20,0, 20, height)
//   fill('black')
//   ellipse(30,30,30,30)
//   ellipse(30,height-30,30,30)
//   ellipse(width-30,30,30,30)
//   ellipse(width-30,height-30,30,30)
//   ellipse(width/2,30,30,30)
//   ellipse(width/2,height-30,30,30)
// }



let x = 500
let y = 250

function setup() {
  // put setup code here
  createCanvas(1000, 500)
}

function draw() {
  background('green')
  field()
  fill('yellow')
  if(keyIsPressed){
    if(keyCode == UP_ARROW) {
       y = y-1
    }
    else if(keyCode == DOWN_ARROW) {
       y = y+1
    }
    else if(keyCode == LEFT_ARROW) {
      x = x-1
    }
    else if(keyCode == RIGHT_ARROW) {
      x = x+1
    }

  }
  if((x<=35 && y<=35) || 
    (x>=width-35 && y<=35) || 
    (x>=width-35 && y>=height-35) || 
    (x<=35 && y>=height-35) || 
    (x==width/2 && y<=35) || 
    (x==width/2 && y>=height-35)) {
    x=500
    y=250

  } else if(x<=35) {
    x=35
  }
  else if(x>=width-35) {
    x=width-35
  }
  else if(y<=35) {
    y=35
  }
  else if(y>=height-35) {
    y=height-35
  }
  else if(x>30 && y>30 && x<width-30 && y<height-30) {
  }
  ellipse(x, y, 30,30)
}

function field() {
  noStroke()
  fill('orange')
  rect(0,0, width, 20)
  rect(0,0, 20, height)
  rect(0,height-20, width, 20)
  rect(width-20,0, 20, height)
  fill('black')
  ellipse(30,30,30,30)
  ellipse(30,height-30,30,30)
  ellipse(width-30,30,30,30)
  ellipse(width-30,height-30,30,30)
  ellipse(width/2,30,30,30)
  ellipse(width/2,height-30,30,30)
}

