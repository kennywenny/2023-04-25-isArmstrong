// Write a function that takes a positive integer and returns true if the integer is an armstrong number, 
// else return false. To find out if a number is an armstrong number, 
// take each individual digit and raise it to the power of the length of the entire number and add the digits. 
// If the sum equals the original number, the number is an armstrong number"

// TODO: Complete the function below:

var isArmstrong = function(num) {
  const originalNum = num
  const digits = []
  while(num > 0) {
    digits.push(num % 10)
    num = Math.floor(num/10)
  }
  const raisedToPower3 = digits.map(it => it ** 3)
  const sum = raisedToPower3.reduce((a, b) => a + b)
  return sum === originalNum
};

// 153 -> 1^3 + 5 ^ 3 + 3 ^ 3 == 153
console.log(isArmstrong(153))
