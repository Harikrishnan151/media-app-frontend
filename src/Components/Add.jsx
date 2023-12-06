import React, { useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBBtn } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MDBInput } from 'mdb-react-ui-kit';
import { uploadVideo } from '../services/allAPI';

function Add({setUploadesVideoServerResponse}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //to hold the video details
  const [video,SetVideo]=useState({
    id:"",
    caption:"",
    url:"",
    embedLink:""
  })
  console.log(video);

  const getEmbedLink=(e)=>{
    const {value}=e.target
   
    if(value){
      console.log(value.slice(-31));
      const link=`https://www.youtube.com/embed/${value.slice(-31)}`
      SetVideo({...video,embedLink:link})
    }else{
      SetVideo({...video,embedLink:""})
    }
  }
      const handleAdd=async()=>{
        const{id,caption,url,embedLink}=video
        if(!id||!caption||!url||!embedLink){
          alert("Please enter valid details")
        }else{
          //make an api call to add videos to db.json file
              const response=await uploadVideo(video)
              console.log(response);
              if(response.status>=200 && response.status<=300){
                setUploadesVideoServerResponse(response.data)
                alert(`${response.data.caption} Added succssfully`)
                handleClose()
              }else{
                alert('Please enter valid Id')
              }

        }
      }


  return (
    <div>
      <Row>
      <Col xl={6} className='text-center d-flex justify-content-center m-5' >
            <h4>Upload Video</h4>
            <MDBBtn  onClick={handleShow} className='btn  mx-4'><i class="fa-solid fa-plus"></i></MDBBtn>
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Video</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <MDBInput onChange={(e)=>SetVideo({...video,id:e.target.value})} label='Video id' id='formControlLg' type='text' size='lg'  />
      <br />
      <MDBInput onChange={(e)=>SetVideo({...video,caption:e.target.value})} label='Video Caption' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={(e)=>SetVideo({...video,url:e.target.value})} label='Video Image URL' id='formControlLg' type='text' size='lg' />
      <br />
      <MDBInput onChange={getEmbedLink} label='Youtube Video Link' id='formControlLg' type='text' size='lg' />
      <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAdd} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
        </Col>

      </Row>
    </div>
  )
}

export default Add