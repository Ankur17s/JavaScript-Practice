// reduce method

const array = [1, 2, 3, 4, 5];

const totalSum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
}, 0)
console.log(totalSum)
// accumulator    currentValue    return 
//  0                 1             1
//  1                 2             3
//  3                 3             6
//  6                 4             10
//  10                5             15


const userCart = [
    { productId: 1, productName: "Moblile", price: 10000 },
    { productId: 2, productName: "laptop", price: 25000 },
    { productId: 3, productName: "led", price: 15000 },
]

const total = userCart.reduce((totalPrice, currentPrice) => {
    return totalPrice + currentPrice.price;
}, 0)
console.log(total);

// totalPrice       currentPrice        return
//   0                {}                 10000
//   10000            25000              35000
//   35000            15000              50000