import React from 'react'

function page({params}: {params: {id: number}}) {
  return (
    <div>Customer Id of {params.id} </div>
  )
}

export default page