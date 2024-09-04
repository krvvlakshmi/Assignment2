////////for loop
const numbers= [2,4,6,8,10,12,14,16,18,20]
for(let i=0;i<numbers.length;i++)
    console.log(numbers[i]);

/////////while loop
const str=['minnu','mailo','remo','snoopy','rocky'];
let i=0
while(i <str.length)
{
    console.log(str[i]);
    i++;
}

///////sum of elements in an array
const arr = [1,3,6,8,9,5,7];
var sum=0;
for(i=0;i<arr.length;i++)
    sum=sum+arr[i];
console.log(`sum = ${sum}`);


//////finding first even number
const a=[5,8,7,4,9,10];
let j=0;
while(j < a.length)
{
    if(a[j]%2==0)
    {
        console.log(`first even number is ${a[j]}`);
        break;
    }
    j++;
}

///////cheching password
const password = "Lucky123";
while(true)
{
    let psw=prompt("enter password");
    if(psw==password)
    {
        console.log("password is correct :)");
        break;
    }
    else
    console.log("password is incorrect:( ,try again!");
}


///////printing consonants
const alphabet=['p','o','w','z','a','i','t'];
for(let k=0;k<alphabet.length;k++)
{
    if(alphabet[k]=='a'||alphabet[k]=='e'||alphabet[k]=='i'||alphabet[k]=='o'||alphabet[k]=='u')
    {
        continue;
    }
    else
    console.log(alphabet[k]);
}
