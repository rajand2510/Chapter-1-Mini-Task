
const products = [
    { name: "Laptop", price: 18 },
    { name: "Phone", price: 56 },
    { name: "Tablet", price: 22 },
    { name: "Monitor", price: 80 },
    { name: "Keyboard", price: 30 }
];

const filteredProducts = products.filter(product => product.price > 50)
console.log("Products with price less than 50:", filteredProducts.map(product => product.price));

