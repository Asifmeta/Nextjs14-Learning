import React from "react";
import Link from "next/link";
import products from "@/lib/data";
const HomePage = () => {
    return (
        <div>
            <h1>This is my HomePage</h1>
            <h2>Please click below link for exploring other pages</h2>
            <h3>
               <Link href={"/about"}>About</Link> 
            </h3>
            <h3>
               <Link href={"/contact-us"}>Contact Us</Link> 
            </h3>
            <h3>
                {products.map(product=>
                <div key={product.id}>
                    <Link href={`shop/${product.category.toLocaleLowerCase()}`}> {product.category}</Link>   
                </div>
                )}
            </h3>
        </div>
    )
}

export default HomePage