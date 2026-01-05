// Create a factorical calculator that takes a number from the user and calculate the fatorical of that number 

// A num variable that will select a random number between 1 through 20.
let num = Math.floor(Math.random() * 21);

// A function that take a number and return the factorial of that number  
function factorialCalculator(num) {
  // The result variable is used to whole the result of the factorial number choosen.
 let result = 1; 
 // A for loop that check to see if the i is less than the number choosen at random. 
  for (let i = 1; i <= num; i++) {
    // Then if it i is mutiply by current result and store as the new result. 
    result = result * i
  }
return result;

}

console.log(factorialCalculator(num))
const factorial = factorialCalculator(num)
let resultMsg = `Factorial of ${num} is ${factorial}`;
console.log(resultMsg)
