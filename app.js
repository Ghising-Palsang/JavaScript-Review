
// =========== Event Handling ===============

const bdy = document.querySelector("body");
const hloTitle = document.querySelector(".article-DOM-title");
const placeHolder = document.querySelector(".article-form-placeholder");
const form = document.querySelector(".article-form");
const ul = document.getElementById("list");

// hloTitle.addEventListener("mousemove",()=>{
//     hloTitle.style.color = "red";
// })

hloTitle.addEventListener("mousemove",()=>{
    hloTitle.style.color = "forestgreen";
})

placeHolder.addEventListener("change",()=>{
    placeHolder.style.fontSize = "20px";
    placeHolder.style.backgroundColor = "forestgreen";
})

form.addEventListener("submit",()=>{
    placeHolder.style.backgroundColor = "red";
})

//==========Note : tagName = elName shown in uppercase in console.

ul.addEventListener("click",(event)=>{
    if(event.target.tagName.toLowerCase() === "li"){
        console.log(`You clicked on :${event.target.textContent}`);
        
    }
})








































// =========== DOM ===============
// let bdy = document.querySelector("body");
// let adt = document.querySelector(".article-DOM-title")
// let btn = document.createElement("button");
// const newDiv = document.createElement("div");
// const newImg = document.createElement("img");


// bdy.style.backgroundColor = "lightblue";


// adt.innerHTML = "Hello Sekai";
// console.log(adt.tagName);
// console.log(bdy.tagName);
// console.log(adt.textContent);
// // console.log(bdy.textContent);

// btn.innerText = "Hello";
// btn.style.backgroundColor = "coral";

// document.body.prepend(btn);

// newDiv.textContent = "This is a container";
// document.body.appendChild(newDiv);

// newImg.style.backgroundColor = "red";
// bdy.appendChild(newImg);
// newImg.src= "imgae.jpeg";

// //==============Steps for creating
// //===============Create then append/prepend/after/before
// //=============to remove=> el.remove();

// //Q2
// let para = document.querySelector(".article-DOM-body");
// // para.setAttribute("class","newClass");
// para.classList.add("newClass");








































// =========== Function ===============

// function sum(a , b){
//     return a + b;
// }

// console.log(sum(2,3));

// function myFunction(){
//     console.log("Hello World");
    
// }

// myFunction(); // calling function

//========================Arrow function
//================Substraction arrow function
// const substract = (a,b,c) =>{
//     return a - b * c;
// }

// console.log(substract(5,1,2));


//Exponential arrow function
// const exponential = (x,y) => {
//     return x ** y;
// }
// console.log(exponential(5,2));


//=================Practice Question 
//Function that finds number of vowels in a string


// let string = "";
// let noOfVowels = 0;
// function countVowel(string){
//     for(let i = 0; i < string.length; i++){
//         if (string[i] === "a"|| string[i] === "e"|| string[i] === "i"|| string[i] === "o"|| string[i] === "u"|| string[i] === "A"|| string[i] === "E"||string[i] === "I"||string[i] === "O"||string[i] === "U") {
//             noOfVowels++;
//         }
//     }
//     return noOfVowels;
// }

// console.log(countVowel("tHewHitEBuilDingBlOckofCell"));


//================For Each Method
//Higher Order function => Passes another function as an argument
//Call back function

// let arr = ["kathmandu", "lalitpur","bhaktapur","pokhara"];

// arr.forEach((val , idx , arr)=>{
//     console.log(val, idx, arr);
    
// })


//===============Practice question
//Square of each value using the forEach loop.

// let num = [1, 2, 3, 4, 5];

// let calcSquare =(val)=>{    //Its another way to use forEach
//     console.log(val*val);
    
// }

// num.forEach(calcSquare);

//===============Map method

// const calcTripled = (val)=>{
//     return (val ** 3);
    
// }

// const tripledNums = num.map(calcTripled);
// console.log(tripledNums);


// let calcFrice = (val) =>{
//     return val **4;
// }

// const numFriced = num.map(calcFrice);
// console.log(numFriced);


//========Filter Method
//Creates an new array of elements that give true for a condition/filter

// let newArr = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filteredVal = newArr.filter((val)=>{
//     return val%2 !== 0;  //for odd number
// })

// console.log(filteredVal);//true value are stored in New Array




//===============Reduce Method
//==Performs some operations & reduce the array into a single valu and returns that single value.


// i.e. Sum of an array, avg or an array

//Summing the array
// let array = [1, 2, 3, 4, 5, 6];

// const output = array.reduce((prev, curr)=>{
//     return prev + curr;
// })

// console.log(output);

//Finding the largest number

// let array2 = [2, 6, 9, 3, 1, 7];

// const maxNum = array2.reduce((prev, curr)=>{
//     return prev > curr? prev : curr;
// })

// console.log(maxNum);



//===============Practice Question

// ======Filter out the marks of students scored 90+

// let marks = [79, 92, 80, 97, 46, 90, 99];

// const highMark = marks.filter((val)=>{
//     return val > 90;
// })

// console.log(highMark);

//=====Take a number n as input from user. Create an array of numbers from 1 to n.
//Reduce to cal sum of all numbers in the array
//Reduce to cal product of all numbers in the array

// let user = prompt("Enter a Number");
// let storage = [];

// for (let i =1; i<=user;i++){
//     storage[i-1] = i;
    
// };
// console.log(storage);































































































// =========== Array ===============

// let goals= ["finance","people","knowledge"];

// console.log(arr1);

// console.log(arr1[0]);

//for loop

// for(let i=0; i<goals.length;i++){
//     console.log(goals[i]);
// }


//for of loop
// for(let goal of goals){
//     console.log(goal);
// }

//Practice Question

//Find average of the array.
// let marks = [85, 97, 44, 37, 76, 60]

// let sum = 0;

// for (let mark of marks) {
//     sum = sum + mark;
// }

// let avg = sum / marks.length;
// console.log(`The average mark of the class is ${avg}`);



//Discount 10% off of the given prices

// let prices = [250, 645, 300, 900, 50];

// for (let i=0; i<prices.length; i++){
//     let offer = prices[i] / 10;
//     prices[i] = prices[i] - offer;
// }

// console.log(prices);


//iterating over an array

// let fruits = ["apple", "mango", "pineapple","strawberry"];

// for (let fruit of fruits){
//     console.log(fruit);
// }


// for (let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
    
// }

//Searching for an item in array

// let groceries = ["Egg", "Chicken", "Oil", "Salt", "Bread"];
// let searchItem = "Salt";
// let found = "false";

// for (let i=0;i<groceries.length; i++){
//     if (groceries[i] === searchItem){
//         found = true;
//         break;
//     }
// }

// console.log(found? "Found":"Not Found");



//Looping through an object

// let hobbies = {
//     n4 : "japanese",
//     singing : "guitar",
//     coding : "Income",
//     knowledge : " Finance, Communication",
// };

// for (let hobby in hobbies){
//     console.log(hobby ,"=",hobbies[hobby]);
//     console.log(`${hobby}:${hobbies[hobby]}`);
    
// }


//Generate a multiplication table for a number

// let num = 5;


// for (let i = 1; i<=10;i++){
//    console.log(num * i);
   
// }


//Iterating over multi dimensional array

// let matrix = [
//     [1 ,2 ,3],
//     [4 ,5 ,6],
//     [9 ,0 ,8],
// ];

// for (let row of matrix){
//     for (let col of row){
//         console.log(col);
        
//     }
// }

// for (let i=0; i<matrix.length;i++){
//     for (let j=0; j<matrix[i].length; j++){
//         console.log(matrix[i][j]);
        
//     }
// }



//Countdown Timer
// let countdown = 10;

// while(countdown > 0){
//     console.log(countdown);
//     countdown--;
    
// }


//Filtering even numbers

// let bangos = [1, 2, 3, 4, 5, 6, 7, 8];
// let evenNumber = [];

// for(let bango of bangos){
//     if(bango%2 === 0){
//         evenNumber.push(bango);
//     }
// }
// console.log(evenNumber);

//Validating Input (Prompt the user until they enter a valid response)

// let password;

// do{
//     password = prompt("Enter Your password (must be at least 6 characters)")
// }while(password.length < 6);

// console.log("Password Accepted"); 



//Array Methods

// let animes = ["Serei Gensouki","Frierin","Your Name","Naruto"];
// let movies = ["Spiderman", "Pursuit of happiness" , "Forest Gump"];

// console.log(animes.push("Bleach"));
// console.log(animes.unshift("One Piece"));
// console.log(animes);
// console.log(animes.shift());
// console.log(animes.pop());

// console.log(animes.toString());
// console.log(animes);



// console.log(animes.slice(2 ,5));
// console.log(animes.concat(movies));

// let newAnime = animes.concat(movies);

// console.log(newAnime.splice(2, 3,"NewEl")); // staring idx, how many to delete (in counts) // newEl
// console.log(newAnime);

// let str = "New Branch Created";























































//for each loop
let goals=["finance", "mext"];
goals.forEach(()=>{

})
























// =========== String ===============

// let string1 = " This is a world of perseverance";
// let string2 = "And mental resilence"
// let str3 = "apple, orange, mango";

// console.log(string1);

// console.log(string1.length);

// console.log(string1[5]);

// console.log(string1.toUpperCase());

// console.log(string1.toLowerCase());

// console.log(string1.trim());

// console.log(string1.slice(6,8));

// console.log(string1.concat(string2));

// console.log(string1.replace(/\bis\b/g, " oh"));


// console.log(string1.replaceAll(" is", " oh"));

// console.log(string1.indexOf("of"));

// console.log(str3.split(","));















// let a = 2;
// let b = 5;

// function sum(x,y){
//     return x + y;
// }

// console.log("The sum of a and b is",sum(a,b));
// console.log(`The sum of a and b is ${sum(a,b)}`);




























// for loop

// for(let i=1; i<=10; i++){
//     console.log(i);
// }

// for (let a=10; a>=1; a--){
//     console.log(a);
    
// }



//while loop

// let b=1;
// while(b<=1o){
    
// }


















// let i = 1;
// while(i<=10){
//     console.log(i);
//     i++;
// }







// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<=20);


// let namae = "Genji";
// for(let val of "Genji"){
//     console.log(val);
    
// }



// let str = "Pyarr?";
// for (let i=1; i<=10; i++){
//     console.log("Hello Sekai");
// }



// let sum = 0;
// for (let i=1; i<=5;i++){
//     sum = sum + i;  
// }
// console.log(sum);



// let sum2 = 0;
// for(let i =1; i<=9; i++){
//     sum2 = sum2 + i;
// }
// console.log(sum2);


// let movie = {
//     name : "marvel",
//     no : 5,
//     heroes : "Thor",
// };

// for (i in movie){
//     console.log(i,movie[i]);   
// }



// All prime numbers

// let num = 0;

// for(let i=1; i<=100 ; i++){
//    if(i%2 !== 0){
//     console.log(i);
    
//    }
    
// }



// Game 

// let userScore = parseInt(prompt("Guess the correct number"));
// let gameNum = 25;
// while (userScore !== gameNum){
//  console.log("guess again");
//  userScore = parseInt(prompt("Guess the Next number"));
// }
// console.log("Congratulation");












// let a = 4;
// let b = 2;

// console.log(a**b);
// console.log(a+=1);



// let cond1 = a>b;
// let cond2 = a===b;

// console.log(cond1&&cond2);
// console.log(cond1||cond2);
// console.log(!(cond1&&cond2));

// let num = 18;

// if (num%2 === 0){
//     console.log("even");
// }else{
//     console.log("odd");
// }

// let age =22;

// age>=18? console.log("You can vote"): console.log("You cannot vote");

// let score = prompt("Enter Your Mark");
// let grade;

// if (score >= 90 && score<=100){
//     grade = "A";
// }else if(score >=80 && score <=90){
//     grade = "B"
// }else{
//     grade= "C"
// };

// console.log(grade);




// Switch Statement
// let color = "green";

// switch(color){
//     case "red":
//         console.log("ITS RED");
//         break;
//     case "blue":
//         console.log("Aoi");
//         break;
//     case "green":
//         console.log("miDori");
//         break;
//     default:
//         console.log("No Iro");  
        
// }













// let a = 2;
// let b = 4;

// if (a%b){
//     console.log(true);
// }else {
//     console.log(false);
// }

// let mode = "white";
// let color;
// let bgClr = document.querySelector("body");

// if (mode === "dark"){
//    bgClr.style.backgroundColor = "black";
//    bgClr.style.color = "white";
// }else if (mode === "blue"){
//     color = "blue";
// }else{
//     bgClr.style.color = "black";
//     bgClr.style.backgroundColor = "white";
// }

// console.log(color);





















// let a = 1;
// let b = 2;

// console.log(a+b);

// function sum(x,y){
//     return x + y;
// }


// console.log(sum(5,5));


// let y = "Yello";
// console.log(y);

// let student = {
//     name : "Kavtoer",
//     age : 31,
//     skill : "coding",
// };
// console.log(student);

// console.log(student["age"]);




