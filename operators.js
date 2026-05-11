// 1. Arithmetic Operators
let a = 10;
let b = 5;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

// Increment & Decrement
a++;
b--;

console.log("Incremented a:", a);
console.log("Decremented b:", b);


// 2. Assignment Operators
let x = 10;

x += 5;
console.log("x += 5:", x);

x -= 2;
console.log("x -= 2:", x);

x *= 3;
console.log("x *= 3:", x);

x /= 2;
console.log("x /= 2:", x);

x %= 4;
console.log("x %= 4:", x);


// 3. Comparison Operators
let num1 = 10;
let num2 = "10";

console.log(num1 == num2);   // true
console.log(num1 === num2);  // false
console.log(num1 != num2);   // false
console.log(num1 !== num2);  // true
console.log(num1 > 5);       // true
console.log(num1 < 20);      // true
console.log(num1 >= 10);     // true
console.log(num1 <= 5);      // false


// 4. Logical Operators
let isLoggedIn = true;
let isAdmin = false;

console.log(isLoggedIn && isAdmin);
console.log(isLoggedIn || isAdmin);
console.log(!isLoggedIn);


// 5. String Operators
let firstName = "Saleena";
let lastName = "Saini";

console.log(firstName + " " + lastName);


// 6. Ternary Operator
let age = 18;

let result = age >= 18 ? "Adult" : "Minor";
console.log(result);


// 7. Type Operators
console.log(typeof age);

let arr = [1, 2, 3];
console.log(arr instanceof Array);


// 8. Bitwise Operators
let p = 5; // 0101
let q = 1; // 0001

console.log(p & q);
console.log(p | q);
console.log(p ^ q);
console.log(~p);
console.log(p << 1);
console.log(p >> 1);



