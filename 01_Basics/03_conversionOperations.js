let score = "33abc"
console.log(typeof score);
console.log(typeof(score));

let valueinnumber  = Number(score)
console.log(typeof valueinnumber);
console.log(valueinnumber)

/*
"33" => 33
"33abc" => NaN(not a number)
true => 1; false => 0
*/

let isloggedin = 0

let booleanIsloggedin = Boolean(isloggedin)
console.log(booleanIsloggedin)

/*
1 => true
0 => false
"Viraj" => true
*/

let digit = 33
let stringdigit = String(digit)
console.log(stringdigit)
console.log(typeof stringdigit)
