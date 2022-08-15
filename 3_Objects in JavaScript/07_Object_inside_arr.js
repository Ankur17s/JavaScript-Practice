// objects inside array
// very useful in real world applications

const users = [
    {userId: 1, firstName: "Ankur", gender: "male"},
    {userId: 2, firstName: "Piyush", gender: "male"},
    {userId: 3, firstName: "Kapil", gender: "male"},
]
console.log(users);

for(let user of users){
    console.log(user); // this return seperate object
}

for(let user of users){
    console.log(user.firstName);//it return value of that key
}