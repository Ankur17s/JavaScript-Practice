// Nested Destructuring

const users = [
    {userId: 1, firstName: "Ankur", gender: "male"},
    {userId: 2, firstName: "Piyush", gender: "male"},
    {userId: 3, firstName: "Kapil", gender: "male"},
]

const [user1, user2, user3] = users;
console.log(user1);//this will destructured whole object in array

// for destructuing in object values
const [{firstName}, , {gender}] = users;
console.log(firstName);
console.log(gender);


const [{firstName: user1Name, userId}, {gender: user2Gender}] = users;
console.log(userId);
console.log(user1Name, user2Gender);