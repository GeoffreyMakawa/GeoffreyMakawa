import React from 'react'
import { Carousel} from 'react-bootstrap';
export default function Slidebar() {
  return (
      <div className="Slidebar">
            <Carousel variant="dark">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="./image/home/library.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="./image/home/library2.jpg"
            alt="Second slide"
            />
            <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="./image/home/library.jpg"
            alt="Third slide"
            />
            <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
</div>
  )
}
