///object : object is mutable in nature
          //these are stored by reference
          //ex:Arrays,Objects

let ricky={
   firstname1:"ricky",
   st_year:"2nd",
   age:19,
   marks:[20,19,18,20,17,16],
   display:function()
   {
    console.log(`this is ${this.firstname1} of age ${this.age} years ,studying ${this.st_year} year got marks ${this.marks} in each subject respectively`);
   }
};
ricky.display();
ricky.st_year="3rd";
ricky.display();


///primitives : primitives are immutable in nature
            //these are stored by values
            //ex:Number,String,Boolean,null,undefine

let firstname2="vicky";
let Name=firstname2;
console.log(firstname2);
console.log(Name);
Name="vishal";
console.log(firstname2);
console.log(Name);