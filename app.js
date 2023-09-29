
var name, gender,preName,type,nameOfDrink;

setTimeout(()=>{
    name = window.prompt("Enter Your Name : ");
    gender = window.prompt("Enter Your Gender : ");
    
console.log(name)
if(gender == "male"){
alert("Welcome mr." + name)
preName = "mr";
}
else if (gender == "female") {
    alert("Welcome mrs." + name)
    preName = "mr";
}
else {
    alert("Welcome");
}},3000);

  
setTimeout(()=>{
type = window.prompt("type of your drink : ");
nameOfDrink = window.prompt("name of your drink : ");
alert("order getting prepared");
console.log( preName + "."+name +" order "+ nameOfDrink + "has been prepared");},12000);

