import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getAllVideos } from '../services/allAPI'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function View(uploadesVideoServerResponse) {

  const [allVideos,setAllVideos]=useState()

  const [deletVideoStatus,setDeleteVideoStatus]=useState(false)

  const getVideos=async()=>{
    //make api call
    const {data} =await getAllVideos()
    console.log(data);
    setAllVideos(data)
  }
  console.log(allVideos);
  useEffect(()=>{
    getVideos()
    setDeleteVideoStatus(false)
  },[uploadesVideoServerResponse,deletVideoStatus])
  return (
    <>
        <Row>
          {
            allVideos?.length>0?allVideos.map((item)=>(
              <Col sm={12} md={6} lg={4} xl={6}>
              <Videocard displayData={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
              </Col>
            )):"Nothing to display"
          }
        </Row>
    
    </>
    
  )
}

export default View