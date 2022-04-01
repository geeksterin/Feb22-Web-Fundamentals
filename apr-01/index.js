// var , let and const


// var a =2
// let b=3
// const c=5


// console.log(a)
// console.log(b)
// console.log(c)


//  var 

// var a = 10

// console.log(a)
// var a = 20
// console.log(a)
// a=30
// console.log(a)

// let a = 12

// // console.log(a)

// // a=21

// // console.log(a)


// let a =22



// var a = 11

// let b = 22


// var a =12
// a=23


// b=34
// let b = 44


//  var can be redeclared as well as re assign , let can only be re assigned but not re declared



// const a = 12

// const a = 22


// hoisting

// console.log(doJob)

// function doJob(){

// }

// console.log(a)

// var a = 22


// console.log(a)

// console.log(a)

// let a = 22

// console.log(doJob)

// function doJob(){

// }

// console.log(a)

// var a = 20


// console.log(a)
// const a = 12

// console.log(doJob)

// var doJob =()=>{

// }



// closure

// function TestingClosure(){
//     let value = 0
//     return function(){
//         value+=1
//         console.log(value)
//     }

// }
// console.log(TestingClosure()())
// console.log(TestingClosure()())
// console.log(TestingClosure()())

// const Tester = TestingClosure()

// Tester()
// Tester()
// Tester()
// Tester()



// var a = 12

// function doJob(){
//     console.log(a)
// }

// doJob()

//  closure state that a function will always about the variable 
// enviornment of the execution context in which it is created

// "use strict"


// const school ={
//     name:"RJSIS",
//     printName: function(){
//         console.log(this.name)
//     }
// }
// school.printName()

// call , apply and bind
// const person ={
//     printName:function(){
//         return this.name
//     }
// }

// const person1 ={
//     name:"sudhanshu kumar"
// }

// const person2={
//     name:"ankur verma"
// }
// person.printName.call(person1,23,"5'8")
// person.printName.apply(person1,[23,"5'8"])
// person.printName.bind(person1)
// console.log(result())


// const person ={
//     name:"sonam kumari",
//     printName:function(){
//         return this.name
//     }
// }

// const person1={
//     name:"sudnahsu kumar"
// }

// // console.log(person.printName())


// const result = person.printName.bind(person1)
// console.log(result())


// var , let and const , closure , call , apply and bind