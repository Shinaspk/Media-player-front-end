import React, { useEffect, useState } from 'react'
import { deleteHistory, getAllHistory, getHistory } from '../services/allAPI'
import Button from 'react-bootstrap/Button';

function WatchHistory() {

  const [History,setHistory]=useState([])

  const getHistory=async()=>{
    const {data}=await getAllHistory()
    setHistory(data)
    //console.log(data);
  }
  //function to delete history
  
  const handleDelete=async(id)=>{
    await deleteHistory(id)
    getHistory()
    }
  useEffect(()=>{
    getHistory()},[]
  )

  return (
    <div >
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
      
      <table class="w-100  table-bordered text-center mt-5 border-primary ">
        <thead>

<tbody>
  </tbody>          
          <tr>
            <th>
              #
            </th>
            <th style={{width:"350px"}}>caption</th>
            <th style={{width:"450px"}}>Url</th>
            <th style={{width:"200px"}}>Time Stamp</th>
            <th style={{width:"450px"}}>Action</th>
          </tr>
        </thead>

<tbody>
  
  {History?.length>0?
History.map((item)=>(
  <tr>
  <td>{item.id}</td>
  <td>{item.Caption}</td>
  <td><a href={item.embedLink}target='_blank'>{item.embedLink}</a></td>
  <td>{item.timeStamp}</td>
  <td><Button onClick={()=>{handleDelete(item?.id)}}  variant="danger"><i class="fa-solid fa-trash fs-2x"></i></Button></td>
  
  </tr>
)):
<tr>
  <td></td>
  <td>
<p>nothingg to display</p>
</td>
</tr>
}

  
  </tbody>
  
  </table>
      </div>
      </div>
      <div className="col-2"></div>
    </div>
  )
}

export default WatchHistory;