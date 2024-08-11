const accountID = 2133
let accountEmail = "virajshinde4545@gmail.com"
var accountPassword = "123456"
accountCity = "Ahmednagar"
let accountState

//account = 9 //notallowed

accountEmail = "ab@bc.com"
accountPassword = "58"
accountCity = "Nagar"
/*
Prefer not to use var because of issue in
block scope and functional scope
*/

console.log(accountID);
console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);