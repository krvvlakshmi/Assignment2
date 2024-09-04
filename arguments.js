//////regular function
const about1=function(name2,age){
    console.log(arguments);
    return `name is ${name2} and age is ${age}`
}
details2=about1("minnu",13);
console.log(details2);
details3=about1("mailo",15,"student");
console.log(details3);



//////arrow function
const about2=(name3,age1)=>{
    console.log(arguments);
    return `name is ${name3} and age is ${age1}`///gives error
}
details4=about2("minnu",13);
console.log(details4);
details5=about2("mailo",15,"student");
console.log(details5);