import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { uploadAllVedios } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setUploadVideoStatus}) {
  const [video, setvideo] = useState({
    id: "",
    Caption: "",
    url: "",
    embedLink: ""
  })
  //console.log(video);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const emmbedvedio = (e) => {
    const { value } = e.target

    // console.log(value);
    //console.log(value.slice(-11));-
    const link = `https://www.youtube.com/embed/${value.slice(-11)}`
    setvideo({ ...video, embedLink: link })
  }

  const handleUpload = async () => {
    const { id, Caption, url, embedLink } = video
    if (!id || !Caption || !url || !embedLink) {
      toast.warning("plesae fill the form completely")

    }
    else {
      const response = await uploadAllVedios(video)
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        toast.success(`${response.data.Caption} is successfully uploaded`)
         //making the state value none
         setvideo({
          id: "",
    Caption: "",
    url: "",
    embedLink: ""
         })
        
        //to change the value of UploadVideoStatus
         setUploadVideoStatus(response.data)
        
        //to close the modal
        handleClose()
       
      }
      else {
        console.log(response);
        toast.error("something went wrong.Try again later")
      }
    }
  }
  return (
    <div>
      <div className='d-flex align-item-center'>
        <h5>Upload New video</h5>
        <button onClick={handleShow} className='btn'><i class="fa-solid fa-cloud-arrow-up fs-5"></i></button>
      </div>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title><i class="fa-solid fa-film text-warning"></i> Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> Please fill the following details</p>
          <form className='border border-secondary  rounded p-3' action="">
            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Control onChange={(e) => setvideo({ ...video, id: e.target.value })} type="text" placeholder="Enter vedio id" />

            </Form.Group>

            <Form.Group className="mb-3" controlId="ormBasicEmail">

              <Form.Control onChange={(e) => setvideo({ ...video, Caption: e.target.value })} type="text" placeholder="Enter vedio caption" />
            console.log(Caption);
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Control onChange={(e) => setvideo({ ...video, url: e.target.value })} type="text" placeholder="Enter vedio image url" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Control onChange={emmbedvedio} type="text" placeholder="Enter youtube vedio link" />

            </Form.Group>
          </form>      
          
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="warning">Upload</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme='colored' autoClose={2000} />
    </div>
  )
}

export default Add