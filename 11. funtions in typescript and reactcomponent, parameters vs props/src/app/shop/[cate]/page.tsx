import React from "react";

const Category = ({params}:{params:{cate:string}})=>{
  console.log (params)
  console.log (params.cate)
    return(
        <div>
            <h1>{params.cate} in shop page</h1>
        </div>
    )
}

export default Category