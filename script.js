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
// var firstDigit = number;
// var lastDigit = number;
// while (firstDigit >= 10) {
//     firstDigit = Math.floor(firstDigit / 10);
// }
// console.log("First digit: " + firstDigit);
// while (lastDigit >= 10) {
//     lastDigit = lastDigit % 10;
// }
// console.log("Last digit: " + lastDigit);

// assigement 12
// var number = 2345678992;
// var firstDigit = number;
// var lastDigit = number;
// while (firstDigit >= 10) {
//     firstDigit = Math.floor(firstDigit / 10);
// }
// console.log("First digit: " + firstDigit);
// while (lastDigit >= 10) {
//     lastDigit = lastDigit % 10;
// }
// console.log("Last digit: " + lastDigit);
// var sum = firstDigit + lastDigit;
// console.log("Sum of first and last digit: " + sum);





//assigement 16
// var number =12345;
// var resverdnum =parseInt(number.toString().split('').reverse().join(''));
//  console.log(resverdnum);

// assigement 17
// var word = "lol";
// var reverseWord = "";
// for (var i = word.length - 1; i >= 0; i--) {
//     reverseWord += word[i];
// }
// if (
//     word.toLowerCase() === reverseWord.toLowerCase()
// ) {
//     console.log("The word is a palindrome.");
// } else {
//     console.log("The word is not a palindrome.");
// }

  
    


                       

// assigement 19
// var number = 1;
// var digit;
// while (number > 0) {
// digit = number % 10;
// number = Math.floor(number / 10);
// if(digit == 0){
//     console.log("zero");
// }
// else if(digit == 1){
//     console.log("one");
// }
// else if(digit == 2){
//     console.log("two");
// }
// else if(digit == 3){
//     console.log("three");
// }
// else if(digit == 4){
//     console.log("four");
// }
// else if(digit == 5){
//     console.log("five");
// }
// else if(digit == 6){
//     console.log("six");
// }
// else if(digit == 7){
//     console.log("seven");
// }
// else if(digit == 8){
//     console.log("eight");
// }
// else if(digit == 9){
//     console.log("nine");
// } else {
//     console.log("Invalid digit");
// }}