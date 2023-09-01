import React from 'react'

const BengCard = () => {

axios.get('http://localhost:3000/api/food')
.then((response)=>{
    console.log((response.data))
})
.catch((error)=>{
    console.log(error)
})
  return (
    <>
      
    </>
  )
}

export default BengCard
