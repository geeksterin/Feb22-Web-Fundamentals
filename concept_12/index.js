

let numArray = [3,4,5,6,'hello'];
console.log(numArray);

// console.log(numArray[3]);

let numbers = []
numbers[0] = 7
numbers[2] = 0
console.log(numbers)
numbers[1] = 7
console.log(numbers);
numbers.push(3)


// Create an object of a student name, age, roll number, subjects
let student = {
    name: "Isha Gupta",
    age: 20,
    rollNumber: 12,
    subjects: ['eng', 'hindi', 'maths']
}

console.log(student.name);
delete student.name
student.marks = 34;
console.log(student);


// I want to print hello if the value of x = 3 
// otherwise x = 4 print world
// print hello world

let x = 1; 

// if (x == 3) {
//     console.log("hello")
// } else {
//     console.log("world")
// }

if (x == 3) {
    console.log("hello")
} else if (x == 4) {
    console.log("world")
} else {
    console.log("hello world")
}

let xy = 5;
let z = xy + 4

let arr = [];
for (let i = 0 ; i<=9; i++) {
    if (i == 3) {
        console.log("hello")
    } else if (i == 4) {
        console.log("world")
    } else {
        console.log("hello world")
    }
}
// i = 0
// arr[0] = 0+3 
// i = 1
// arr[1] = 1+3
// i = 2
// arr[2] = 2+3

// i = 9
// arr[9] = 9+ 3

// i =10


// console.log(arr)

// arr[0]
// arr[1]
// arr[2]
