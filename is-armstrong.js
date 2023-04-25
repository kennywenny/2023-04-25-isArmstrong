// Write a function that takes a positive integer and returns true if the integer is an armstrong number, 
// else return false. To find out if a number is an armstrong number, 
// take each individual digit and raise it to the power of the length of the entire number and add the digits. 
// If the sum equals the original number, the number is an armstrong number"

// TODO: Complete the function below:

var isArmstrong = function(num) {
  const originalNum = num
  const length = num.toString().length
  const digits = [0]
  while(num > 0) {
    digits.push(num % 10)
    num = Math.floor(num/10)
  }
  console.log(digits)
  const raisedToTheCorrectPower = digits.map(it => it ** length)
  console.log(raisedToTheCorrectPower)
  const sum = raisedToTheCorrectPower.reduce((a, b) => a + b)
  console.log(sum)
  return sum === originalNum
};

// 1634
console.log(isArmstrong(0))
