/* BOILERPLATE

// создайте вашу переменную здесь

function setup() {
  // ваш setup код

}

function draw() {
  // ваш draw код

}
*/

// создайте вашу переменную здесь
let myNumber = 0
function setup() {
  // ваш setup код
  console.log(myNumber)

}

function draw() {
  // ваш draw код
  myNumber = myNumber + 4
  console.log(myNumber)
}