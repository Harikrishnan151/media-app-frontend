import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { MDBInput } from 'mdb-react-ui-kit';
import Button from 'react-bootstrap/Button';
import { addCategories, deleteAVideo, deleteCategory, getAVideo, getCategory, updateCategory } from '../services/allAPI';
import Videocard from './Videocard';
function Category() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categoryVideos]=useState([])
  const [CategoryName,setCategoryName]=useState('')//to hold category name
  console.log(CategoryName);
   
  const [categoryData,setCategoryData]=useState([])//to hold category data
  console.log(categoryData);
 
  const handleCategory=async()=>{
    if(CategoryName){
       //make an api call
    const reqBody={
      CategoryName,
      categoryVideos
    }
    const response=await addCategories(reqBody)
    console.log(response);
    alert("Category add successfully")
    handleClose()
    setCategoryName("")
    getCategoryVideos()

    }else{
      alert('Provide a category name')
    }
   
  }



  const getCategoryVideos=async()=>{
    //make an api call
    const {data}=await getCategory()
    console.log(data);
    setCategoryData(data)
  }
  console.log(categoryData);

  const handleDelete=async(id)=>{
    //make an api call
    await deleteCategory(id)
    alert('Category deleted')
    getCategoryVideos()
    getCategory()
  
  }
  useEffect(()=>{
    getCategoryVideos()
  },[])



  const dragOver=(e)=>{
    console.log("Drag over");
    e.preventDefault()
  }
  const videoDrop = async (e, CategoryId) => {
    console.log("Video dropped at category Id of " + CategoryId);
    const videoId = e.dataTransfer.getData("videoId")
    console.log("VideocardId:" + videoId);
    //api call for particular video
    const { data } = await getAVideo(videoId)
    console.log(data);
    //get category details
    const selectedCategory = categoryData?.find(item => item.id === CategoryId)
    console.log(selectedCategory);
    //video details push to allVideos
    selectedCategory.categoryVideos.push(data)
    //make an api call to update details
    await updateCategory(CategoryId, selectedCategory)
    getCategoryVideos()
  }




  return (
    <div className='text-center'>
      <button onClick={handleShow} className='btn m-3 '>Add Category</button>

      <div>
        {
          categoryData.length > 0 ? categoryData.map((item) => (
            <div droppable onDragOver={(e) => dragOver(e)} onDrop={(e) => videoDrop(e, item.id)} className='container border border-1 m-4 shadow'>
              <div className="d-flex justify-content-between p-3">
                <h5>{item.CategoryName}</h5>
                <button className='btn'>
                  <i onClick={() => handleDelete(item?.id)} className="fa-solid fa-trash text-danger"></i>
                </button>
              </div>
              <Row>
                {
                  item.categoryVideos?.map((data) => (
                    <Col>
                      <Videocard displayData={data} />
                    </Col>
                  ))
                }
              </Row>
            </div>
          )) : "No Category selected"
        }
      </div>

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
        {/* <MDBInput label='Category id' id='formControlLg' type='text' size='lg'  /> */}
      <br />
      <MDBInput onChange={(e)=>setCategoryName(e.target.value)} label='Category Name' id='formControlLg' type='text' size='lg' />
      <br />
  
      <br />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={(e)=>handleCategory()} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Category