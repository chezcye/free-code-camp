// A String Repeating Function

function repeatStringNumTimes(str, num) {
  let result = "";
// a for loop that set i to 0, and as long as 0 is less than num input  on function call 
  for(let i = 0; i < num; i++) {
    // then add string input on function call to the result variable and repeat until false 
    result += str;
  }
  return result; 
}
