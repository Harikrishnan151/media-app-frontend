import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBBtn } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Add from '../Components/Add';
import { Link } from 'react-router-dom';
import View from '../Components/View';
import Category from '../Components/Category';
function Home() {
   //ceate a state for state lifting (in parent component)
  const [uploadesVideoServerResponse,setUploadesVideoServerResponse]=useState({})

  return (
    <div>
    <Row className='container'>
       <Col>
       <Add setUploadesVideoServerResponse={setUploadesVideoServerResponse}/>
       </Col>
        <Col className='text-center' xl={4}>
          <Link style={{textDecoration:'none'}} to={'/wathch-history'}>
        <h4 className='m-5'>Watch History</h4>
        </Link>
        </Col>
    </Row>
    <Row>
      <Col className='m-5'>
      <h3 className='text-center'>View All Videos</h3>
      <View uploadesVideoServerResponse={uploadesVideoServerResponse} />
      </Col>
      <Col className='m-5'>
      <h3 className='text-center'>Category</h3>
      <Category/>
      </Col>
    </Row>
</div>

  )
}

export default Home