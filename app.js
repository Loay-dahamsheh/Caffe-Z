
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