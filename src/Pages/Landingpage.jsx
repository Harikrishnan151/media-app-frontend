import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link, useNavigate} from 'react-router-dom'

function LandingPage() {

  const navigate=useNavigate()

  return (
    <div>
      {/* first row */}
      <Row className='m-5 p-3'>
        <Col>
              {/* content */}
              <h3>Welcome to <span className='text-primary'>Media Player</span> </h3>
              <p style={{textAlign:'justify'}}>Media-App is a free and open source cross-platform multimedia player and framework that plays most multimedia files as well as DVDs, Audio CDs, VCDs, and various streaming protocols.
               Media-App is completely free with no ads, spyware, or user tracking. It plays a wide range of file formats, making it a great movie player for people playing very old or unusual formats.</p>
              <button onClick={()=>navigate('/home')} className='btn btn-primary my-4'>Get Started</button>
           
        </Col> 
         <Col style={{marginLeft:'50px'}}>
              {/* image */}
              <img style={{width:'600px'}} src="https://cutewallpaper.org/21/equalizer-gif/Programming-JavaScript-Equalizer-A-webdeasy.de.gif" alt="" />
         </Col>
      </Row>

      {/* 2nd row */}
      <Row className='m-5' >
        <h2 className='text-center text-primary my-5'>Features</h2>
        <Col style={{marginLeft:'80px'}}>
        <Card style={{ width: '18rem' }}>
          <Link className="text-decoration-none " to='/home'>
      <Card.Img variant="top" style={{width:'100%',height:'250px'}} src="https://media.tenor.com/11u8gg1tMs4AAAAC/music-rock.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Manage all your videos
        </Card.Text>
      </Card.Body>
      </Link>
        </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
          <Link className="text-decoration-none " to='/home'>
      <Card.Img variant="top" style={{width:'100%',height:'250px'}} src="https://media0.giphy.com/media/26tn7BL2UDTMVWovu/giphy-downsized.gif" />
      <Card.Body>
        <Card.Title>Categories Videos</Card.Title>
        <Card.Text>
          Get your complete categories
        </Card.Text>
      </Card.Body>
      </Link>
    </Card>
        </Col>
        <Col>
        <Card style={{ width: '18rem' }}>
        <Link className="text-decoration-none " to={'/wathch-history'}>
      <Card.Img variant="top" style={{width:'100%',height:'250px'}} src="https://cdn.dribbble.com/users/154088/screenshots/770283/attachments/76374/music_player02.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Get your complete watch history
        </Card.Text>
      </Card.Body>
      </Link>
    </Card>
        </Col>
      </Row>

      {/* 3rd row */}
      <Row className='border border-1 border-primary p-5 m-5'>
       <Col>
            <h3 className='text-primary my-5'>Simple, Fast and Powerful</h3>
            <h5>Play Everything</h5>
            <p>The Autoplay feature on Media-App makes it easier to decide what to watch next. When Autoplay is on, another related video will automatically play after a video ends.</p>
            <h5>Categorise Videos</h5>
            <p>
            videos can be arranged using  video categories. It goes without saying that you will get greater results if you apply your video to the correct category. 
            </p>
            <h5>Managing History</h5>
            <p>makes it easy to find videos you recently watched, and, when it's turned on, allows us to give relevant video recommendations. You can control your watch history by deleting or turning off your history. Any videos that you watch while history is turned off won't show up in your history.</p>

       </Col> 
       <Col>
       <iframe width="560" height="500" src="https://www.youtube.com/embed/zuVV9Y55gvc?si=8R90rrQLG7ALiEO9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       </Col>
      </Row>
    </div>
  )
}

export default LandingPage
