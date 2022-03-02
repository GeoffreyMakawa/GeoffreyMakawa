
import React , {useEffect,useState} from 'react';
import { Card} from 'react-bootstrap';
export default function Main() {
  const [book, setBook]=useState([])
  useEffect(() => {
    fetch("https://malawidigitallibrary.herokuapp.com/api/book/getBooks")
    .then(res=>res.json())
    .then((result)=>{
      setBook(result);
    })
  
  }, [])
  console.log(book)
  return (
      
    <div className='main-cont'>
    <div className='title' ><h3>Our Books</h3></div>
    <div className='service-cont'>
    {book.map(book=>(
      
          <Card className="main-card" key={book.id}>
          <Card.Img variant="top" src="image/home/library.jpg" />
        <Card.Body>
            <Card.Title className="card-title">Title: {book.tittle} by auther: {book.auther} and edition: {book.edition} </Card.Title>
            
            <Card.Text>
            {book.description} jhjhjhjhjhjh
            </Card.Text>
        </Card.Body>
        </Card>
    
      ))}
     
  {/* ----------- */}

  </div>
</div>
  )
}
