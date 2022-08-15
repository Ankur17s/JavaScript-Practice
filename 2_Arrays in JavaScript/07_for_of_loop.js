// for of loop in array

const fruits = ["apple", "mango", "grapes", "banana"];

for(let fruit of fruits){
    console.log(fruit);
}

const fruit2 = [];
for(let fruit of fruits){
    fruit2.push(fruit.toUpperCase());
}
console.log(fruit2);