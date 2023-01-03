let value = Math.floor(Math.random() * 100);
console.log(value)
let chance = 0
while (chance < 100) {
  let a = 0
  if (chance == 0) { a = prompt("enter the number") }
  else
    a = prompt("enter the number again")
  a = Number.parseInt(a)
  if (a == value) {
    chance++
    break;
  }
  else if (a < value) {
    alert("number entered is smaller than value")
    chance++
  }
  else {

    alert("number entered is larger than value")
    chance++
  }



}
let score = 100 - chance
console.log(score)