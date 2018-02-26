// BOILERPLATE
// let myClass = /*составьте массив здесь*/
// let classLength = /*определите длину массива*/
// let myFriend = /*выберите из массива ученика, кто ваш друг при помощи индекса*/


// function setup() {
// 	createCanvas(windowWidth, windowHeight)
// 	background('black')
// 	fill('white')
// 	textAlign(CENTER)
// 	text('Мой класс состоит из ' + classLength + ' человек', width/2, height/2)
// 	text('Мой друг -- ' + myFriend, width/2, height/2+20)

// }
// function draw() {
	
// }

let myClass = ['Ваня', 'Петя', 'Митя']
let classLength = myClass.length
let myFriend = myClass[1]


function setup() {
	createCanvas(windowWidth, windowHeight)
	background('black')
	fill('white')
	textAlign(CENTER)
	text('Мой класс состоит из ' + classLength + ' человек', width/2, height/2)
	text('Мой друг — ' + myFriend, width/2, height/2+20)

}
function draw() {
	
}
