// String test :
var car = 'Subaru';
//Test 1 :  Equality comparision (True) 
console.log("Is car == 'Subaru'? I predict True.");
console.log(car == 'Subaru'); //(True) [case-insensitive ]
//Test 2 : Strict Equality comparision (False) 
console.log("Is car === 'Toyota'? I predict False.");
console.log(car === 'Toyota'); //(False) 
//Test 3 : Inequality comparision (True) 
console.log("Is car != 'subaru'? I predict True.");
console.log(car != 'subaru'); //(True)
//Test 4 : inequality comparision (False) 
console.log("Is car !== 'Subaru'? I predict False.[ case-sensitive]");
console.log(car !== 'Subaru'); //(False) [ case-sensitive]
//     --- Lowercase   function Test ---
//Test 5 : Lowercase   conversion (True) 
var upperCase = "HELLO";
var lowercase = "hello";
console.log("Is uppercase.toLowerCase == lowercase? I predict True.");
console.log(upperCase.toLowerCase() == lowercase); //(True)
//     --- Numarical  Test ---
var number1 = 5;
var number2 = 8;
//Test 7 :  Equality comparision (False) 
console.log("Is number1 === number1? I predict False.");
console.log(number1 === number1); //(False)
//Test 8 : Inequality comparision (True) 
console.log("Is number1 !== number2 ? I predict True.");
console.log(number1 !== number2); //(True)
//Test 9 : less than  comparision (False) 
console.log("Is number1 > number2? I predict False.");
console.log(number1 > number2); //(False)
//Test 10 : Gerter than  comparision (True) 
console.log("Is number1 < number2? I predict True.");
console.log(number1 < number2); //(True)
//Test 10 : less than or Equal to comparision (True) 
console.log("Is number1 <= number2? I predict True.");
console.log(number1 <= number2); //(True)
//Test 10 : Gerter than or Equal to comparision (False) 
console.log("Is number1 >= number2? I predict False.");
console.log(number1 >= number2); //(False)
//      --- LOGICAL OPERATORS ---
var a = 10;
var b = 15;
var c = 20;
//Test 11 : AND (True) 
console.log("Is a < c  &&  b < c? I predict True.");
console.log(a < c && b < c); //(True)
//Test 12 : OR (False) 
console.log("Is a > b || c < a ? I predict False.");
console.log(a > b || c < a); //(False)
//      --- ARRAY TEST ---
var array = [1, 2, 3, 4, 5];
//Test 13 : In Array (True) 
console.log("Is 3 not number ? I predict True.");
console.log(3 in array); //(True)
//Test 13 : Not in Array (False) 
console.log("Is 6 not number ? I predict False.");
console.log(6 in array); //(False)
