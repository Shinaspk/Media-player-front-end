import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { addToCategory, deletecategoryVideos, getAVideo, getAllCategory, updateCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { logDOM } from '@testing-library/react';
import { Row ,Col} from 'react-bootstrap';
import VedioCard from './VedioCard';




function Category() {
  const [allcatogery, setAllcategory] = useState({})

  const [categoryName, setCategoryName] = useState({})
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleadd = async () => {

    if (categoryName) {
      let body = {
        categoryName,
        allVideo: []
      }

      //make api call
      const response = await addToCategory(body)
      console.log(response)
      if (response.status >= 200 && response.status < 300) {
        toast.success("category added succesfully")
        //to make the satate null after successfulm addition
        setCategoryName("")
        handleClose()

      } else {
        toast.warning("something went wrong.Please try again later")
      }

    }
    else {
      toast.error("please complete the form")

    }
  }

  const getallcategory = async () => {
    const { data } = await getAllCategory()
    console.log(data);
    setAllcategory(data)
  }
  console.log(allcatogery);

  //drragover event listner
  const dragover = (e) => {
    //this will prevent reload so that the we send from videoard'jsx wont be lost   }
    e.preventDefault()
    console.log('inside drag over');
  }
  const videoDrop = async (e, categoryID) => {
    console.log(`droped inside category ${categoryID}`);
    //to get the video tht is from  viddeocard component
    const videoid = e.dataTransfer.getData('videoID')
    console.log(videoid);

    const { data } = await getAVideo(videoid)
    console.log(data);

    //to find the particular category with the speicified id
    let selectedCategory = allcatogery?.find(item => (item.id === categoryID))
    console.log(selectedCategory);
    selectedCategory.allVideo.push(data)
    console.log(selectedCategory);

    await updateCategory(categoryID, selectedCategory)
    getallcategory()

  }
  
  

  useEffect(() => { getallcategory() }, [])
  return (
    <div>

      <div className='d-grid ms-3'>
        <button onClick={handleShow} className='btn btn-warning'>Add new category</button>
      </div>

      {allcatogery?.length > 0 ?
        allcatogery.map((item) => (
          <div className='border border-secondary m-5  rounded p-1'>
            <div className="d-flex justify-content-between align-item-center" droppable onDragOver={(e) => dragover(e)} onDrop={(e) => videoDrop(e, item?.id)}  >
              <h6>{item.categoryName}</h6>
              <Button className='ms-5' variant="danger"><i class="fa-solid fa-trash fs-2x"></i></Button>
            </div>

            <Row>
              <Col sm={12}>{
                item.allVideo?.length > 0?
                item.allVideo.map(card=>(<VedioCard displayVideo={card}/>)):
                <p>Nothing to display</p>
      
              }
              </Col>
            </Row>
          </div>)) :
        <p>nothing to display</p>
      }
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new category</Modal.Title>
        </Modal.Header>


        <Modal.Body>

          <Form className='border border-secondary  rounded p-3' action="">
            <Form.Group className="mb-3" controlId="formBasicEmail">



            </Form.Group>

            <Form.Group className="mb-3" controlId="ormBasicEmail">

              <Form.Control type="text" onChange={(e) => setCategoryName(e.target.value)} placeholder="Enter category name" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleadd}>Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </div>
  )
}

export default Category;