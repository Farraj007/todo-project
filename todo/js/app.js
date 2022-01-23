"use strict";


alert("Welcome to ToDo Website ");

alert("Are you Sure you want to Enter the website", "Please Answer with yes or no from now-on")
let questions= ["Are you sure you want to enter the website?" , "Do you Love Coding?" , "Are you Ready ?"] 
let answersArray = [] 
 for(let i=0; i<3 ; i++){
   
  answersArray[i]= prompt (questions[i]) 
  if (answersArray[i] != "yes" || answersArray[i] != "no"){
    console.log("InValid")
    alert("InValid Entry")
    answersArray[i]= prompt (questions[i])
  }
}
console.log(answersArray)

alert(" Please Follow the Instructions To Access the WebSite");
console.log("x");

var Name = 0;

while (!Name) {
  Name = prompt("Type Your Name");
  console.log(+Name)
  if (!isNaN(Name)) {
    console.log("User Entered a number");
    Name=0
  }
}
console.log(Name);
console.log("The User Name is:"+Name);

let age=prompt("How Old are you")
while (isNaN(age) || age < 18){
    console.log("The user entered a string ")
    if (isNaN(age)){
    alert("Please Enter A number")}
    else if (age<=18){
    alert("You are not allowed to Enter")
}
age=prompt("Please Enter Your Age")
} 
var gender=prompt("What is Your Gender","male or female")
while (gender !="male" && gender!="female"){
    console.log("User gender is")
    gender=prompt("Choose your gender","male or female")
}
if (gender=="male"){
    alert("Welcome to ToDo Mr "+Name )}
    else if (gender =="female") {
        alert("Welcome to ToDo Mrs "+Name )
    } 
        









