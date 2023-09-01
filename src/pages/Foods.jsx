import React from 'react'


const Foods = () => {
  return (
    <>
<div>
  <h2 className='m-4'>Inspiration for your first order</h2>
  </div>  

     <div className="row" style={{textAlign:"center"}}>
  <div className="col-lg-2">
    <img src="images/f1.png" alt="items" width={140} height={140} style={{borderRadius:"360%"}}/>
    <h3 >Pizza</h3>
  </div>
  <div className="col-lg-2" >
  <img src="images/f2.png" alt="items" width={140} height={140} style={{borderRadius:"360%"}}/>
    <h3 >Cake</h3>
  </div>
  <div className="col-lg-2" >
  <img src="images/f3.png" alt="items" width={140} height={140} style={{borderRadius:"360%"}}/>
    <h3 >Biryani</h3>
  </div>
  <div className="col-lg-2" >
  <img src="images/f4.png" alt="items" width={140} height={140} style={{borderRadius:"360%"}}/>
    <h3 >Burger</h3>
  </div>
  <div className="col-lg-2" >
  <img src="images/f6.png" alt="items" width={140} height={140} style={{borderRadius:"360%"}}/>
    <h3 >Thali</h3>
  </div>
  <div className="col-lg-2">
  <img src="images/f7.png" alt="items" width={140} height={140} style={{borderRadius:"360%"}}/>
    <h3 >Paneer</h3>
  </div>
</div>
    </>
  )
}

export default Foods
