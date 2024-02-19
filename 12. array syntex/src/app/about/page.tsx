"use client"
const products = [
  { id: 1, category: 'Electronics', description: 'Smartphone' },
  { id: 2, category: 'Clothing', description: 'T-shirt' },
  { id: 3, category: 'Books', description: 'Novel' },
];
// typescript////////////////////////////////////////////////////////
let productDetails = products
                    .filter(product=> product.category.toLowerCase() === "books")
                    .map(product => `${product.category} has ${product.description}`);
console.log(productDetails);
// react component /////////////////////////////////////////////////////
import React from 'react'

const AboutReact = () => {
  return (
    <div>
      {products 
      .filter(product=> product.category.toLowerCase() === "books")
      .map(product =>
        <div key={product.id} >
          {product.category} has {product.description}
        </div>
      )}
    </div>
  )
}

export default AboutReact
