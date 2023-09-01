import React from 'react'
import Link from 'next/link'

const Error = () => {
  return (
    <div>
      <h1 style={{display:"flex",justifyContent:"center",alignItems:"center",color:"red"}}>404 ERROR PAGE</h1>
      <h1 style={{display:"flex",justifyContent:"center",alignItems:"center",color:"red"}}><Link href="/"><button>Redirect to homepage</button></Link></h1> 
    </div>
  )
}

export default Error
