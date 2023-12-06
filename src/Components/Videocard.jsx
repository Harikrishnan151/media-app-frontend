import React, { useState } from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { deleteAVideo, watchVideoHistory } from '../services/allAPI';



function Videocard({ displayData, setDeleteVideoStatus }) {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    //make an Api call to get video watch history
    const { caption, embedLink } = displayData

    //date and time 
    let today = new Date()
    console.log(today);
    const timestamp = new Intl.DateTimeFormat('en-us', {
      year: 'numeric', month: '2-digit',
      day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'
    }).format(today)
    console.log(timestamp);

    let videoDetails = {
      caption,
      embedLink,
      timestamp
    }
    await watchVideoHistory(videoDetails)
  }

  //deleting a video
  const deleteVideo = async (id) => {
    //make api call for delete
    const response = await deleteAVideo(id)
    console.log(response);
    alert("Video deleted")
    setDeleteVideoStatus(true)
  }

  // const dragStarted=(e,id)=>{
  //   console.log("Drag Started"+id,e);
  //   e.dataTransfer.setData("video"+id)
  // }
  const dragStarted=(e,id)=>{
    console.log("Drag started"+id,e);
    e.dataTransfer.setData("VideoId",id)//Data transfer
   }



  return (
    <div >

      <MDBCard draggable onDragStart={(e)=>dragStarted(e,displayData?.id)} className='m-3' style={{ width: '270px', height: '270px' }}>
        <MDBCardImage onClick={handleShow} style={{ width: '100%', height: '200px' }} src={displayData.url} position='top' alt='...' />
        <MDBCardBody className='d-flex '>
          <MDBCardTitle><h6>{displayData.caption}</h6></MDBCardTitle>
          <MDBCardText>

          </MDBCardText>
          <button onClick={() => deleteVideo(displayData.id)} className='btn ms-5' href='#' style={{ color: 'red' }} >Delete</button>
        </MDBCardBody>


        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{displayData.caption}</Modal.Title>
          </Modal.Header>
          <Modal.Body >

            <iframe width="460" height="315" src={displayData.embedLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>

          </Modal.Footer>
        </Modal>

      </MDBCard>

    </div>
  )
}

export default Videocard