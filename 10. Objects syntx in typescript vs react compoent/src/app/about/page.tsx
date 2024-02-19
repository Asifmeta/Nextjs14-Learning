"use client"
import React from "react";
let company : {name:string, year:number} = {name:"Best Choice Tablets", year:2020}

console.log (company);
console.log (`${company.name} established in ${company.year}`)

const About = ()=>{
    return(
        <div> 
           {/* <h1>{company} // imposible way</h1> */}
           <h2>{`${company.name} established in ${company.year}`}</h2>
           <h2>{company.name} is established in {company.year}</h2>
        </div>
    )
}
export default About