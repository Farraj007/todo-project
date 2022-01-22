"use strict";

alert("Welcome to ToDo Website ");

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
    gender=prompt("Choose your gender","male of female")
}
if (gender=="male"){
    alert("Welcome to ToDo Mr "+Name )}
    else if (gender =="female") {
        alert("Welcome to ToDo Mrs "+Name )
    } 
        









