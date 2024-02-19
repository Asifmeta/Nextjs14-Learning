import React from "react";
import products from "@/lib/data";
const Category = ({ params }: { params: { cate: string } }) => {
    const filterProuct = products.filter(product=>params.cate===product.category.toLowerCase())
    return (
        <div> 
            {filterProuct.map(product=>
            <div key={product.id}>
                <h1 >{product.category} in shop page havein description {product.description}</h1>
            </div>
            )}
        </div>
    )
}

export default Category