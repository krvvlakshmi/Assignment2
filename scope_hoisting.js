
/////scope
function display(name,course,year)
{
   let print=`${name} have taken the course ${course} in ${year}`;
   console.log(print);
   is_complete=true;
   if(is_complete==true)
   {
    let name ="mailo";
    const course="javascript";
    let print=`${name} have taken the course ${course} in ${year}`;
    console.log(print);
   }
   
}
const firstname="minnu";
const year=2024;
let course="html" ;
display(firstname,course,year);

/////////hoisting and its consequences
//variable 

console.log(student_name);
var student_name="minnu";

console.log(age);
let age=19; //error:cannot access age before initialization

console.log(rollno);
const rollno=12123; //error:cannot access age before initialization  

//functions

console.log(sqrt(3));
 function sqrt(n)
{
   return n*n;
}
console.log(cube(4));
 function cube(n)
{
   return n**3;
}

console.log(greet())
function greet(){
   return "hello";
}

var z=30;
function func()
{
   console.log(z);  //undefine
   var z=10;
}
func(); 
