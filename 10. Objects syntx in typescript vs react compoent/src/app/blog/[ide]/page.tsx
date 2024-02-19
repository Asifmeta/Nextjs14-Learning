import React from 'react'

const ParamsPage = ({params}:any) => {
  console.log(params)
  return (
    <div>this is {params.ide}</div>
  )
}

export default ParamsPage