import React, { Suspense, useEffect, useState } from 'react'


const error = () => {
    const [error, seterror] = useState(null)
    useEffect(()=>{

    },[])
  return (
    <div>error</div>
  )
}
const lazy = React.lazy(()=>{import("./abc")});
<Suspense fallback = Loading...

export default error