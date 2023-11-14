import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideos } from '../services/allAPI';

function VedioCard({ displayVideo, setDeleteVideoStatus }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);

    const { Caption, embedLink } = displayVideo
    const today = new Date
    // console.log(today);


    let timeStamp = new Intl.DateTimeFormat('en-US', {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",

    }).format(today)
    //console.log(timeStamp);
    let videoDetails = {
      Caption,
      embedLink,
      timeStamp,

    }

    await addToHistory(videoDetails)
    //console.log(videoDetails);

  }

  const removeVideo = async (id) => {
    const response = await deleteVideos(id)
    console.log(response);
    setDeleteVideoStatus(true)

  }
  const dragstated = (e, id) => {
    console.log(`card number ${id} started dragging`);
    //for data transfer
    e.dataTransfer.setData("videoID", id)
  }
  return (
    <div>

      <Card style={{ height: '300px', width: '100%' }} className='mb-4' draggable onDragStart={(e) => dragstated(e, displayVideo?.id)}>
        <Card.Img onClick={handleShow} height={'250px'} variant="top" src={displayVideo.url} />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-item-center'>
            <h6>{displayVideo.caption}</h6>
            <Button onClick={() => removeVideo(displayVideo?.id)} variant="danger"><i class="fa-solid fa-trash fs-2x"></i></Button>
            

          </Card.Title>



        </Card.Body>
      </Card>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton >
          <Modal.Title>{displayVideo.Caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="250" src={`${displayVideo.embedLink}?autoplay=1`} title={displayVideo.Caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>

      </Modal>
    </div>



  )



}

export default VedioCard
