// object destructuring

const band = {
    bandName : "led zeplein",
    famousSong : "stairway to heaven",
    year : "1890",
    famousSong2 : "kashmir",
}

// let {bandName, famousSong } = band;
let { bandName, famousSong, ...restItems } = band; 
console.log(bandName, famousSong, restItems);