console.log(2>1)
console.log(2>=1)
console.log(2<1)
console.log(2==1)
console.log(2 != 1)

console.log("2">1) //automatically converted to number
console.log("02">1)

console.log(null>0)
console.log(null == 0)
console.log(null>=0)

console.log(undefined>0)
console.log(undefined == 0)
console.log(undefined>=0)

// ===(strict equality): does not convert the 
// datatype for comparison like ==
console.log("2" === 2)