// some method

// check atleast it found one even number in array

const numbers = [1, 5, 7, 2];

const result = numbers.some((number) => number % 2 === 0)
// console.log(result);


const userCart = [
    { productId: 1, productName: "Moblile", price: 10000 },
    { productId: 2, productName: "laptop", price: 25000 },
    { productId: 3, productName: "led", price: 15000 },
    { productId: 4, productName: "macbook", price: 150000 },
]
// check if anyone product price more than 1 lakh

const ans = userCart.some((item) => item.price > 100000);
console.log(ans)