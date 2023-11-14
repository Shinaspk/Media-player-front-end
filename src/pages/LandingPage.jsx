import React from 'react'
import {Row,Col} from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigateByUrl=useNavigate()//navigation by hoook(an alternate method for Link method)
  return (
    <div>
        <Row className='mt-5 mb-5 d-flex justify-content-evenly align-items-center w-100'> 
         <Col ></Col>
         <Col lg={5}>
            <h3> Welcome to<span className='text-warning'> Media Player</span></h3>
         <p style={{textAlign:"justify"}} className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora nesciunt molestias quisquam! Ullam laudantium molestiae numquam ad at cum quas magnam deleniti hic rerum, porro eius iste autem, quaerat repellendus.</p>
        <button onClick={()=>navigateByUrl('/home')} className='btn btn-warning mt-5'>Get Started <i class="fa-solid fa-arrow-right"></i></button>
         </Col>
         <Col></Col>
         <Col lg={5}>
            <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" />
         </Col>
        </Row>

        <div className='container d-flex justify-content-center align-items-center flex-column w-100'>
            <h1>Features</h1>

          <div className='mt-5 mb-5 d-flex justify-content-between align-items-center w-100'>
                <Card className='' style={{ width:' 19rem' }}>
          <Card.Img className='p-4' style={{ width:"300px",height:"300px"}} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
          <Card.Body>
            <Card.Title>Magnified vedio</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
           
          </Card.Body>
        </Card>
    
        <Card style={{ width: '19rem' }}>
          <Card.Img  className='p-4' style={{width:"300px",height:"300px"}} variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
          <Card.Body>
            <Card.Title>Catogerized vedio</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
           
          </Card.Body>
        </Card>
    
        <Card style={{ width: '19rem' }}>
          <Card.Img  className='p-4' style={{width:"300px",height:"300px"}} variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
          <Card.Body>
            <Card.Title>Watch history</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
           
          </Card.Body>
        </Card>
          </div>
        </div>

    <div className='container border border-2 border-secondary rounded w-100 mt-5 mb-5 justify-content-between d-flex align-item-center p-5  '>
        <Row>
            <Col lg={5}>
                <h3 className='text-warning'>Simple fast and 
                Powerful</h3>
                <h6 className='mb-3'><span className='fw-bolder fs-5'>Play everything</span>:Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde minima laborum cumque explicabo veniam suscipit amet dignissimos soluta nisi vero in, esse, asperiores, impedit molestiae. Dolore, ad repudiandae! Harum, nostrum?</h6>

                <h6 className='mb-3'><span className='fw-bolder fs-5'>Play everything</span>:Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde minima laborum cumque explicabo veniam suscipit amet dignissimos soluta nisi vero in, esse, asperiores, impedit molestiae. Dolore, ad repudiandae! Harum, nostrum?</h6>

                <h6 className='mb-3'><span className='fw-bolder fs-5'>Play everything</span>:Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde minima laborum cumque explicabo veniam suscipit amet dignissimos soluta nisi vero in, esse, asperiores, impedit molestiae. Dolore, ad repudiandae! Harum, nostrum?</h6>
            </Col>
            <Col></Col>
            <Col lg={6}>
            <iframe width="100%" height="400" src="https://www.youtube.com/embed/326UBY4B-ZU" title="Ordinary Person (From &quot;Leo&quot;)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Col>
        </Row>
        </div>    
    </div>
  )
}

export default LandingPage