// find method

const myArray = ["hello", "dog", "lion", "cat"];

// function isLength3(string) {
//     return string.length === 3;
// }
// it returs the first occurence value
// const ans = myArray.find(isLength3);
const ans = myArray.find((string) => {
    return string.length === 3;
})
// console.log(ans);


// ex
const users = [
    { userId: 1, userName: "Tony" },
    { userId: 2, userName: "thor" },
    { userId: 3, userName: "steve" },
    { userId: 4, userName: "peter" },
    { userId: 5, userName: "strange" },
]

const name = users.find((user) => {
    return user.userId === 4;
})
console.log(name)