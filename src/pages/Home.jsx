import React, { useState } from 'react'
import Add from '../components/Add'
import Category from '../components/Category'
import View from '../components/View'
import {  Link} from "react-router-dom";


function Home() {
  //create a state to do state-lifting
  const[uploadVideoStatus,setUploadVideoStatus]=useState({})
  return (
    <><div className='container mt-5 mb-5 d-flex justify-content-between align-item-center'>
      <div className='add-vedios'>

        <Add setUploadVideoStatus={setUploadVideoStatus}/>
      </div>
      <Link to={'/watch-history'} style={{textDecoration:"none",color:"white",fontsize:"30px"}}>Watch history</Link>
      </div>
      
      <div className='container-fluid w-100 mt-5 mb-5 d-flex justify-content-between'>
        <div className='All-vedio col-lg-9'>
          <h4 className='mb-5'>All vedios</h4>
         <View uploadVideoStatus={uploadVideoStatus}/>
        </div>
        <div className='category col-lg-3'>
        <Category/>
        </div>
      </div>
      </>
  )
}

export default Home