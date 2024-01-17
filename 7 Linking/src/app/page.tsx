import React from "react";
import Link from "next/link";
const HomePage = () => {
    return (
        <div>
            <h1>This is my HomePage</h1>
            <h2>Please click below link for exploring other pages</h2>
            <h3>
               <Link href={"/about"}>About</Link> 
            </h3><br />
            <h3>
               <Link href={"/contact-us"}>Contact Us</Link> 
            </h3><br />
            <h3>
                <Link href={"/shop/clothes"}>Clothes</Link>
            </h3><br />
            <h3>
                <Link href={"/shop/watches"}>Wathes </Link>
            </h3><br />
            <h3>
                <Link href={"/shop/toys"}>Toys</Link>
            </h3><br />
        </div>
    )
}

export default HomePage