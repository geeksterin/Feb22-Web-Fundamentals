function sum(num1, num2) {
    let sumOfResult = num1 + num2 
    console.log("This is inside the funtion: "+sumOfResult)
    return checkEven(sumOfResult)
}

function checkEven(result) {
    if (result % 2 == 0) {
        console.log("inside function even")
        return ("even")
    } else {
        console.log("inside function odd")
        return("odd")
    }
}

let result2 = sum (5,10)
// let even = checkEven(result2);
console.log(result2)
// Arrow function

// const multiply = (num1, num2) => {
//     return num1 * num2
// }

// let result2 = multiply(3,5)
// console.log(result2)
// create a subtraction and multiply function
// subtract 5 and 2
// multiple 2 and 5
