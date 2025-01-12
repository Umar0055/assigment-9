// assigement 1

// var natural = 0;
// while (natural <= 100) {
//     console.log(natural);
//     natural++;
// }

// assigement 2
// var natural = 0;
// while (natural >= -100) {
//     console.log(natural);
//     natural--;
// }

// assigement 4
// var even = "0";
// while (even <=100  ) {
//     if(even %2 ==0)
//     console.log(even);
//     even++;
// }

// assigement 5
// var odd = "0";
// while (odd <=100  ) {
//     if(odd %2 ==1)
//     console.log(odd);
//     odd++;
// }

// assigement 6
// var count = 1;
// var sum = 0;
// while(count <= 100){ 
//         sum = sum + count;
//     count++;
// }
// console.log( sum);

//assigement 7
// var count = 1;
// var sum = 0;
// while(count <= 100){
//     if(count % 2 == 0){
//         sum = sum + count;
//     }
//     count++;
// }
// console.log( sum);

// assigement 8
// var count = 1;
// var sum = 0;
// while(count <= 100){
//     if(count % 2 == 1){
//         sum = sum + count;
//     }
//     count++;
// }
// console.log( sum);

// assigement 9
// var table = 2;
// var count = 1;
// while(count <= 10){
//     console.log(table + " * " + count + " = " + table * count);
//     count++;
// }

// assigement 10
// var number = 2345678992;
// var count = 0;
// while (number > 0) {
//     number = Math.floor(number / 10);
//     count++;
// }
// console.log(count);

// assigement 11
// var number = 2345678992;
// var firstnum = number;
// var lastnum = number;
// while (firstnum >= 10) {
//     firstnum = Math.floor(firstnum / 10);
// }
// console.log("First num is " + firstnum);
// while (lastnum >= 10) {
//     lastnum = lastnum % 10;
// }
// console.log("Last num is " + lastnum);

// assigement 12
// var number = 2345678992;
// var firstnum = number;
// var lastnum = number;
// while (firstnum >= 10) {
//     firstnum = Math.floor(firstnm / 10);
// }
// console.log("First num is " + firstnum);
// while (lastnum >= 10) {
//     lastnum = last % 10;
// }
// console.log("Last num is" + lastnum);
// var sum = firstnum + lastnum;
// console.log("Sum of first and last num is " + sum);


//assigement 16
// var number =12345;
// var resverdnum =parseInt(number.toString().split('').reverse().join(''));
//  console.log(resverdnum);
           

// assigement 19
// var number = 1;
// var num;
// while (number > 0) {
// num = number % 10;
// number = Math.floor(number / 10);
// if(num == 0){
//     console.log("zero");
// }
// else if(num == 1){
//     console.log("one");
// }
// else if(num == 2){
//     console.log("two");
// }
// else if(num == 3){
//     console.log("three");
// }
// else if(num== 4){
//     console.log("four");
// }
// else if(num== 5){
//     console.log("five");
// }
// else if(num== 6){
//     console.log("six");
// }
// else if(num== 7){
//     console.log("seven");
// }
// else if(num == 8){
//     console.log("eight");
// }
// else if(num == 9){
//     console.log("nine");
// } else {
//     console.log("try again ");
// }}

// assigement 26
// function isprime(n){
//     while(n<2){
       
//         return `${n} is not prime`;
        
//     }
//     for(var i=2;i<Math.sqrt(n);i++){
//         if(n%i===0){
//             return `${n} is not prime`;
            
//         }
    
//     }
//     return `${n} is prime`;
// }
// console.log(isprime(4));


// assigement 27
// function isprime(n){
//     while(n<2){
       
//         return false;
        
//     }
//     for(var i=2;i<Math.sqrt(n);i++){
//         if(n%i===0){
//             return false;
            
//         }
    
//     }
//     return true;
// }
// var number =1;
// while(number<100){
//     if(isprime(number)){
// console.log(number);
//     }
//     number++;
// }
// assigement 28

//     var number =1;
//     var sum =0;
//     for(var i=1;i<100;i++){
//         if(isprime(i)){
//              sum =sum +i;
           
//         }
//     }
// console.log(sum);
