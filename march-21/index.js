// function printFibo(n){
//     var a = 0
//     var b = 1
   
//     console.log(a  + " outside of loop")
//     console.log(b + " outside of loop")
//     var count = 2
//     for(var i =1 ;true;i++){
//             var c = a+b
//             console.log(c  +" inside of loop")
//             count=count+1
//             a=b
//             b=c
//             if(i <=n-2){
//                 console.log("hi")
//                 continue
//             }else if (i > n-2){
//                 console.log("hello")
//                 break
//             }
//     }
// }
// printFibo(7)



// arrow functions



// const printNumbers = (n) =>{
//     for(var i=1;i<n;i++){
//         console.log(i)
//     }
// }
// printNumbers(6)

// const doJob = ()=>{
//     console.log(2+3)
// }

// doJob()


// return 


//  write a code to that will print up to any numbers in betwwen 1 to 10


function generateRandomNumber (){
    var num = Math.floor(Math.random()*10+1)
    return num
}




var num = generateRandomNumber() 

for (var i = 1 ; i<= num ; i++){
    console.log(i)
}

// function , arrow funtion , continue , break , return , round() --> nearest int , floor ()--> prev int 

//  ceil --> next int