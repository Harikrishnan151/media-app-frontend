import React, { useEffect, useState } from 'react'
import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { getVideoHistory } from '../services/allAPI';
import { Link } from 'react-router-dom';
function Watchhistory() {
 
  const [history,setHistory]=useState([])
  const handleHistory=async()=>{
    ///make an api call to get watch video history
    const {data}=await getVideoHistory()
    console.log(data);
    setHistory(data)
  }
  console.log(history);
  useEffect(()=>{
    handleHistory()
  },[])
  return (
    <div className='container m-5'>
      <div className='d-flex '>
      <h3 className='text-center'>Watch History</h3>
      <Link to='/home'>
      <button  style={{marginLeft:'700px'}} className='btn'>Back</button></Link>
      </div>
          <MDBTable hover>
      <MDBTableHead>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>Caption</th>
          <th style={{paddingLeft:'200px'}} scope='col'>URL</th>
          <th scope='col'>Timestamp</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {
          history?history.map((item)=>(
            <tr>
         <th  scope='row'>{item.id}</th>
          <td >{item.caption}</td>
          <td ><a href={item.embedLink}></a>{item.embedLink}</td>
          <td >{item.timestamp}</td>
            </tr>


  )   ):"No History Found"
        }


      </MDBTableBody>
    </MDBTable>


      
    </div>
  )
}

export default Watchhistory