// import React from "react";

// const ContactUs = ()=>{
//     return(
//         <div>
//             <h1>This is contact us page</h1>
//         </div>
//     )
// }

// export default ContactUs
// "use client"
// import React from "react";
// const tsFunction = (companyName: string, year: number): string => {
//     return (`${companyName} is established in ${year}`);
// }
// console.log (tsFunction("Best Choice Tablets", 2020));
// console.log (tsFunction("Apple", 2000));
// =============================================================================
// const TsxFunction = ({name, year}:{name: string, year: string}):JSX.Element => {
//     return (
//         <div>
//             <h1>{name} is established in {year}</h1>
//         </div>
//     );
// }


// const ContactUs = ()=>{
//     return(
//         <div>
//             <TsxFunction name="dddd" year="333"/>

//         </div>
//     )
// }

// export default ContactUs

import React from "react";




const TsxFunction = (pro:{name:string, year:number}) => {
    console.log(pro)
    return (
        <div>
            <h1>{pro.name} is established in {pro.year}</h1>
        </div>
    );
}

const ContactUs: React.FC = () => {
    return (
        <div>
            <TsxFunction name="dddd" year= {2024} /> 
        </div>
    );
}

export default ContactUs;

