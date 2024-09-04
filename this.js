//////function hoisting
var order = 10;
if(order) send_delivery_details();
function send_delivery_details()
{
   console.log("your order will deliver soon... ");
}

///////this keyword with regular,arrow function and object
//regular function
const attendance=
{
    students:['minnu','mailo','browny'],
    mark_Present:function(stud)
    {
        console.log(`marking present to ${stud} among ${this.students}`);
    }
};
attendance.mark_Present('mailo');


//arrow function
const attendance1=
{
    students1:["minnu","mailo","browny"],
    markPresent1:(stud)=>
    {
        console.log(`marking present to ${stud} among ${this.students}`);
    }
};
attendance1.markPresent1('browny');

//object
const employee=
{
    name:"johny",
    age:37,
    profession:"professor",
    experience:15,
    details:function()
    {
      console.log(`hii this is ${this.name} ,i'm ${this.age} year old working as a ${this.profession} having experience of ${this.experience} years`);
    }
}
employee.details();
