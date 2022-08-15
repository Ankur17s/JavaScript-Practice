// splice method
// start, delete, insert

// slice is used for delete and insert in array

const myArray = ["item1", "item2", "item3"];

// delete 
// myArray.splice(1, 1);
// const deletedItem = myArray.splice(1, 1);
// console.log(deletedItem);
// we can also store our deleted item in array


// insert
// myArray.splice(1, 0, "inserted")


// inset and delete
myArray.splice(1, 2, "apple", "mango")

console.log(myArray);