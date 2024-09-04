//////Introduction to arrays

const fruits=["Apple","Banana","watermelon","pomegranate","orange"];
for(let i=0;i<fruits.length;i++)
    console.log(fruits[i]);
console.log(`third element is ${fruits[3]}`);
console.log(`length = ${fruits.length}`);

///////add and remove methods
//push()
fruits.push("kiwi","grapes");
console.log(`After push operation :\n ${fruits}`);

//pop()
fruits.pop();
console.log(`After pop operation : \n${fruits}`);

//unshif()
fruits.unshift("jackfruit","guava");
console.log(`After unshift operation : \n${fruits}`);

//shift()
fruits.shift();
console.log(`After shift operation : \n${fruits}`);