// spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// const newArray = [...arr1, ...arr2, 10, 20];
// const newArray = [..."12345"] // string is iterable but not number
// console.log(newArray);

// spread operator in objects
const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

const obj2 = {
    key1 : "unique key",
    key3 : "value3",
    key4 : "value4"
}
// // there is no more than one key in one object
const newArray = { ...obj1, ...obj2 }
const newObject = { ...obj1, ...obj2, key50: "value100"}//we can also add new key here
console.log(newObject);
// console.log(newArray);

// const object = { ...["item1", "item2"]};
// console.log(object);