import React from 'react'

function page({params}: {params:{post: string}}) {
  return (
    <div>Post Id of {params.post[0]} and {params.post[1]} and {params.post[2]}</div>
  )
}

export default page