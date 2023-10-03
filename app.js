
var name, gender,preName,type,nameOfDrink;


    name = window.prompt("Enter Your Name : ");

console.log(name)
function maleOrFemale(){
while(gender != "male" || gender !="female"){
    gender = window.prompt("Enter Your Gender : ");
if(gender == "male"){
        
alert("Welcome mr." + name);
break;
}

else if (gender == "female") {
    alert("Welcome ms." + name);
break;    
}
}}

// do{gender = window.prompt("Enter Your Gender : ");}

// while(gender != "male" && gender !="female")

// else if(gender != "male" && gender !="female"){
// gender = window.prompt("Enter Your Gender : ");
// }


type = window.prompt("type of your drink hot/cold : ");
nameOfDrink = window.prompt("name of your drink : ");
alert("order getting prepared");
console.log(name +" order "+ nameOfDrink);
maleOrFemale();
var data = [name, gender, type, nameOfDrink];
for(var i=0; i<data.length; i++){
console.log(data[i]);}

let div1 = document.createElement("div");
let para1 = document.createElement("p");
let ul1 = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");

 para1.innerHTML = `Name: ${name}`;
 li1.innerHTML = `Gender: ${gender}`;
 li2.innerHTML = `Drink type: ${type} `;
 li3.innerHTML = `Drink: ${nameOfDrink}`;


div1.appendChild(para1);
div1.appendChild(ul1);
ul1.appendChild(li1);
ul1.appendChild(li2);
ul1.appendChild(li3);

document.body.appendChild(div1);