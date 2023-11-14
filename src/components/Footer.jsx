import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:"100%",heigh:"300px"}} className='d-flex align-items-center justify-content-center flex-column' >
        <div className='footer d-flex align-items-center justify-content-evenly w-100 '>
            <div className="website" style={{width:"400px"}}>
                <h4><i class="fa-solid fa-video fa-beat text-warning me-3"></i> Media Player</h4>
            <p>;Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque natus soluta ad doloremque ratione, nulla incidunt quia aspernatur nihil facilis veritatis recusandae atque. Est, inventore nisi. Quibusdam nulla fugiat iure.</p>
            </div>
            <div className="links d-flex flex-column">
                <h3>Links</h3>
                  <Link style={{textDecoration:"none",  color:"white"}} to={'/'}>LandingPage</Link>
                  <Link style={{textDecoration:"none",  color:"white"}} to={'/home'}>Home</Link>
                  <Link style={{textDecoration:"none",  color:"white"}} to={'/Watch-history'}>WatchHistory</Link>
                  

            </div>
            <div className="guides  d-flex flex-column">
                <h3>Guides</h3>
                <Link style={{textDecoration:"none",  color:"white"}} to={'/'}>React</Link>

                <Link style={{textDecoration:"none",  color:"white"}} to={'/home'}>React Bootstrap</Link>
                <Link style={{textDecoration:"none",  color:"white"}} to={'https://react-bootstrap.netlify.app/docs/getting-started/introduction/'}>Bootsrap</Link>
                 
            </div>
            <div className="contact">
                <h3>Contact Us</h3>
                <div className='d-flex '>
                   <input style={{borderRadius:"10px"}} className='me-3 form-control' type="text"placeholder='Enter your mail id' />
                      <button className='p-2  bg-warning' style={{ borderRadius:"10px"}}> Subscribe</button>
                </div>
                <div className='pt-3 d-flex justify-content-evenly align-item-center '>
                   <Link style={{color:"white",textDecoration:"none"}} to={'https://twitter.com/login?lang=en'}><i class="fa-brands fa-twitter fa-2x"></i></Link> 
                   <Link style={{color:"white",textDecoration:"none"}} to={'https://twitter.com/login?lang=en'}><i class="fa-brands fa-instagram fa-2x"></i></Link> 
                   <Link style={{textDecoration:"none", color:"white"}} to={'https://twitter.com/login?lang=en'}><i class="fa-brands fa-linkedin fa-2x "></i></Link> 
                   <Link style={{textDecoration:"none", color:"white"}} to={'https://twitter.com/login?lang=en'}><i class="fa-brands fa-twitter fa-2x"></i></Link> 
                </div>
            </div>

        </div>
        <p>Copyright © 2023 Media Player </p>
    </div>
  )
}

export default Footer