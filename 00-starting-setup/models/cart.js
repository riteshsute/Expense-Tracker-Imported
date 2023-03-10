const { json } = require('body-parser');
const fs = require('fs');
const path = require('path');
const { stringify } = require('querystring');
const { consumers } = require('stream');


const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );

module.exports = class cart {
    static addProduct(id, productPrice) {
        // fetching previous cart
        fs.readFile(p, (err, fileContent) => {
            let cart = {products: [], totalPrice: 0 }
            if (!err) {
                cart= JSON.parse(fileContent);
            }
        // analyzing the cart = finding existing product
            const existingProductIndex = cart.products.findIndex(prod => prod.id === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;
            // adding new product/ increasing quantity
            if (existingProduct) {
                updatedProduct = { ...existingProduct };
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[existingProductIndex] = updatedProduct;
            } else {
                updatedProduct = { id: id, qty: 1 };
                cart.products = [...cart.products, updatedProduct]
            }
            cart.totalPrice = cart.totalPrice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            })
        })
    }
}
