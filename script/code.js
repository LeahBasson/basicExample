// Unary Example
        // let firstName = prompt ("Enter your first name: ");
        // let lastName = prompt ("Enter your last name: ");
        // let hours = +prompt ("Enter your hours: ");
        // let rate = +prompt("Enter your rate: ");
        // let salary = +(hours) + +(rate);

        // console.log(`
        // first name: ${firstName}
        // last name: ${lastName}
        // salary: R${salary}`
        // );

// ParseFloat Exmaple
        // let firstName = prompt ("Enter your first name: ");
        // let lastName = prompt ("Enter your last name: ");
        // let hours = parseFloat (prompt ("Enter your hours: "));
        // let rate = parseFloat (prompt("Enter your rate: "));
        // let salary =  hours + rate;

        // console.log(`
        // first name: ${firstName}
        // last name: ${lastName}
        // salary: R${salary}`
        // );
        
// Eval Example
        // let firstName = prompt ("Enter your first name: ");
        // let lastName = prompt ("Enter your last name: ");
        // let hours = prompt ("Enter your hours: ");
        // let rate = prompt("Enter your rate: ");
        // let salary =  eval(` ${hours} * ${rate} `);

        //  console.log(`
        // first name: ${firstName}
        // last name: ${lastName}
        // salary: R${salary}`
        // );

// let numb1= '7'
// console.log(numb1)
// console.log(typeof numb1)

// let result = "Joel" + (9 + 2)
// console.log(result);
// console.log(typeof result);

// document.getElementById("output").
// innerText = "Hello there"

// function result() {
//     let numb1 = document.querySelector('[numb1]').value 
//     let operator = document.querySelector('[operator]').value 
//     let numb2 = document.querySelector('[numb2]').value
//     // Output reference
//     let output = document.querySelector('[output]')
//     output.textContent = eval(`${numb1} ${operator} ${numb2}`) 
// }

// Array for friends details
// let friends = [ 
//         {
//                 firstName: 'Teddy',
//                 lastName: 'Lukasa'
//         },
//         {
//                 firstName: 'Perrot',
//                 lastName: 'Kengela'
//         }             
// ]

// friends.push({
//         firstName: 'Delo',
//         lastName: 'Marc'
// }
// )
// console.log(friends)
// console.table(friends)

// let salary = 7000;
// let bonus = 500;

// if (salary > 5000){
//         console.log(`Your salary is R${salary + bonus}`);
// }

// console.log( salary > 5000 ?`Your salary is R${salary + bonus}`: `Your salary is R${salary}`);

// If statement
// let performance = false;
// let salary = 7000;
// let bonus = 500;
// if (salary > 5000) {
//     console.log(`Your salary is R${salary + bonus}`);
// } else {
//     console.log(`Your salary is R${salary}`);
// }
// if and else if statement
// if (performance) {
//     console.log(`Your salary is R${salary + bonus}`);
// } else if (salary > 15000) {
//     console.log(`Your salary is R${salary + bonus}`);
// } else {
//     console.log(`Your salary is R${salary}`);
// }
// nested if statement
// if (performance) {
//     if (salary > 5000) {
//         console.log(`Your salary is R${salary + bonus}`);
//     } else {
//         console.log(`Your salary is R${salary}`);
//     }
// } else {
//     console.log('You didn\'t perform well');
// }
// Switch statement
// switch (salary) {
//     case 5000:
//         console.log(`Salary is R${salary}`);
//         break
//     case 7000:
//         console.log(`Salary is R${salary}`);
//         break
//     default:
//         console.log(`This ${salary} was not included in one of the case`);
//     break
// }

// let marks = 10;
// switch (true) {
//     case (marks == 100):
//         console.log("Your grade is A");
//         break
//     case (marks >= 90):
//         console.log("Your grade is B");
//         break
//     case (marks >= 80):
//         console.log("Your grade is C");
//         break
//     case (marks >= 75):
//         console.log("Your grade is D");
//         break
//     case (marks >= 70):
//         console.log("Your grade is E");
//         break
//     case(marks >= 50):
//         console.log("Passed");
//         break
//     case (marks <= 50):
//         console.log("Failed");
//         break
// }


// function addition(){
//     let num1 = 4;
//     let num2 = 6;
//     // let result = num1 + num2;
//     // console.log(`${result}`);
//     console.log(num1+num2);
// }

// addition();

// function with two arguments
// function addition(numb1 , numb2){
//     console.log(numb1 + numb2)
// }

// addition(7,7)

// displays NaN
// function addition(numb1,  numb2){
//     console.log(numb1 + numb2)
// }

// addition(7)

// no 2
// function addition(numb1,  numb2 = 2){
//     console.log(numb1 + numb2)
// }

// addition(7)

// function sumOfValues(...args){
//     console.log(args.reduce(addition));
// }

// sumOfValues( 1 ,  2, 3, 4,2,3,2)

// function addition(curr, nextV){
//         return curr+nextV   
// }

// How to loop through an array & calculate all the numbers only.
// function addition(...numbers ){
//     let digit= [];
//     numbers.forEach((value) => {
//         if(!isNan (value)){
//             digit.push(value)
//         }  
// })

// console.log(digit);
// console.log(digit.reduce((c, n) => c + n));

// }

// addition('Sipho', 1, 'Jamin', 2 , 3 , 'Leah' , 4 , 5 )

// let numbers = [9,3,11,4,7,12];
// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i])
// }

// let cars = 1;
// while(cars < numbers.length){
//     console.log(numbers[cars]);
//     cars++
// }

// numbers.forEach((value) => {
//     console.log(value);
// })

// let names = {
//     name1: "Leah",
//     name2: "Jamin",
//     name3: "Tamia"
// }

// for(let name in names){
//     console.log(names[name]);
// }

let data = [9, 'Peter', 'Sipho', 3, 4, 11, 'Sarah', 'Sisi'];

data.forEach((value) => {
        console.log(value)
})

