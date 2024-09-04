///////Introduction to object

const minnu_obj= {

    name1 : "Minnu",
    age : 25,
    city : "vishakhapatnam",
    friends  :["mailo","rocky"]
};

console.log(minnu_obj);
console.log(minnu_obj.name1);   //using dot notation
console.log(minnu_obj['name1']);  //using square brackets

///adding properties

minnu_obj.occupation = "Doctor";
console.log(`after adding occupation property:`);
console.log(minnu_obj);

minnu_obj['Hobbies'] = ['playing badminton','listening to music','travelling to historic places'];
console.log(`after adding hobbies property:`);
console.log(minnu_obj);





////////car object
const car_obj ={
    cname :"Audi",
    colour : "Glacier White",
    model : "A4 Premium",
    year : 2021,
    drive : function()
    {
       console.log(`i'm driving an ${this.cname} car of ${this.model} model whose colour is ${this.colour} that had launched in ${this.year} year`);
    }
};
console.log(car_obj.drive());




///////calculator
const calculator = {
    Add : function(a,b)
    {
        console.log(`Addition is ${a+b}`);
    },
    Sub : function(a,b)
    {
        console.log(`Subtraction is ${a-b}`);
    },
    Multiply : function(a,b)
    {
        console.log(`Multiplication is ${a*b}`);
    },
    Divide : function(a,b)
    {
        console.log(`Division is ${a/b}`);
    },
    Remainder : function(a,b)
    {
        console.log(`Remainder is ${a%b}`);
    },
    exponent : function(a,b)
    {
        console.log(`${a}^${b} is ${a**b}`);
    }
};
calculator.Add(10,30);
calculator.Sub(110,50);
calculator.Multiply(9,8);
calculator.Divide(56,7);
calculator.Remainder(69,6);
calculator.exponent(4,3);

