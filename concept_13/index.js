// array of 5 numbers
// Write a function to check whether the number in the array is even or odd
// Return an array of even or odd
// arr = [2,4,3,6,7]
// result = ['even', 'even', 'odd'..]

let arr = [2,4,3,6,7];


function checkEven (arr) {
    let result = []
    for(var i = 0; i<=arr.length; i++) {
        if (arr[i] % 2 == 0) {
            result.push("even")
        }
        else {
            result.push("odd")
        }
    }
    return result
}

let responseFromFunction = checkEven(arr)
console.log(responseFromFunction)
