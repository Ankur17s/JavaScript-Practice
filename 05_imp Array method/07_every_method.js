// every method

const numbers = [2, 4, 6, 8, 10, 12];
// check for even
const ans = numbers.every((number) => number % 2 === 0);

// callback function return true / false

// every function also return true / false

console.log(ans);

const userCart = [
    { productId: 1, productName: "Moblile", price: 10000 },
    { productId: 2, productName: "laptop", price: 25000 },
    { productId: 3, productName: "led", price: 15000 },
]

// check every product < 30,000

const result = userCart.every((value) => {
    return value.price < 30000;
});
console.log(result);