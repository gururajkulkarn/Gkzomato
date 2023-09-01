import React from 'react'
import '../../styles/Home.module.css'
import Homeloc from './Homeloca'
import Link from 'next/Link'

const Home = () => {
  return (
    <>
        <div>

       <img src="images/bg1.png" alt="Responsive Image" className="img-fluid" />
       </div>
       <div style={{width:"100%",height:"50%", position:"absolute",left:"500px",top:"-100px",display:"flex",alignItems:"center",justifyContent:"center"}}>
  <Link href="/"> <button>Logout</button></Link> </div> 
       <div style={{width:"100%",height:"50%", position:"absolute",top:"100px",display:"flex",alignItems:"center",justifyContent:"center"}}>
     <img src="images/bg2.png" alt="Responsive Image" className="img-fluid" />
       </div>
       <div>
       <h1 style={{display:"flex",alignItems:"center",justifyContent:"center",position:"relative",top:"-280px",color:"white"}}>Find the best restaurants, cafés and bars in India</h1>
       </div>
<div className='location' style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <h1 className='m-auto'>Popular locations in <img src="images/flag.webp" /> India</h1>

</div>

<div className='hotels container'>
    <p>From swanky upscale restaurants to the cosiest hidden gems serving the most incredible food, Zomato covers it all. Explore menus, and millions of restaurant photos and reviews from users just like you, to find your next great meal.
</p>
</div>

<Homeloc/>
    </>
  )
}

export default Home
