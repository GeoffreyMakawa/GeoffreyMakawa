import React from 'react'
import { Card,Button} from 'react-bootstrap';
export default function Main() {
  return (
      
    <div className='main-cont'>
    <div className='title' ><h3>Our Books</h3></div>
    <div className='service-cont'>

   <Card className="main-card">
    <Card.Img variant="top" src="image/home/library.jpg" />
   <Card.Body>
      <Card.Title className="card-title">Parcel collection services </Card.Title>
      <Card.Text>
      Our dedicated team are always ready to go and collect your parcels from your
       supplier as soon as proof of payment of such parcels has been made available to us
      </Card.Text>
  </Card.Body>
  </Card>
  {/* ----------- */}

  <Card className="main-card">
    <Card.Img variant="top" src="image/home/library.jpg" />
   <Card.Body>
      <Card.Title className="card-title">Wrapping Solutions</Card.Title>
      <Card.Text>
      No parcels in our care shall be transported to the destination of 
      our customers choice unwrapped or poorly wrapped whether fragile or non breakable
      </Card.Text>
      
  </Card.Body>
  </Card>
  {/* ----------- */}

  <Card className="main-card">
    <Card.Img variant="top" src="image/home/library.jpg" />
   <Card.Body>
      <Card.Title className="card-title">Transport</Card.Title>
      <Card.Text>
      With a wide range of trucks and busses on our radar leaving Johannesburg with goods 
      </Card.Text>
      
  </Card.Body>
  </Card>
  {/* ----------- */}
  <Card className="main-card">
    <Card.Img variant="top" src="image/home/library.jpg" />
   <Card.Body>
      <Card.Title className="card-title">Delivery Services</Card.Title>
      <Card.Text>
      We take pride in letting our customers concentrate on other engagements or commitments while we bring parcels to their office,home or shop as it gives us the peace of mind knowing that the sensitivity and quality of the parcels or delicacy will not be 
      compromised by unskilled labourers when offloading the parcels at the destination point
      </Card.Text>
      
  </Card.Body>
  </Card>
  {/* ----------- */}

  </div>
</div>
  )
}
