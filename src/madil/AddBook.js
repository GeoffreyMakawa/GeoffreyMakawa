import { useState, useEffect } from "react";
import { Form,Button,Col,Row} from 'react-bootstrap';
export default  function SignUp() {
const initialValues = { tittle: "", email: "", description: "" , edition: "", auther: "", phoneNumber: "" };
const [inputValues, setinputValues] = useState(initialValues);
const [inputErrors, setinputErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);

const handleChange = (e) => {
  const { name, value } = e.target;
  setinputValues({ ...inputValues, [name]: value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  setinputErrors(validate(inputValues));
  setIsSubmit(true);
};

useEffect(() => {
  console.log(inputErrors);
  if (Object.keys(inputErrors).length === 0 && isSubmit) {
    console.log("hello")
    fetch("https://malawidigitallibrary.herokuapp.com/api/book/addBooks",
    {method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(inputValues)
    
    }

    ).then(()=>{
    })
  }
}, [inputErrors]);
const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.tittle) {
    errors.tittle = "tittle is required!";
  }
 
  if (!values.edition) {
    errors.edition = "edition is required";
  }

  

  if (!values.auther) {
    errors.auther = "auther is required";
  }


  if (!values.description) {
    errors.description = "description is required";
  } else if (values.description.length < 7) {
    errors.description = "description must be more than 7 characters";
  } else if (values.description.length > 3000) {
    errors.description = "description cannot exceed more than 3000 characters";
  }
  
  return errors;
 
  
};
      
        return (
                <div className='auth'>
                    <div className='auth-cont'>
                        <div className='userIcon'>
                        </div>
                        <p>Register new User</p>
                        {Object.keys(inputErrors).length === 0 && isSubmit ? (
                            <div className="success">Add new book successfully <br />
                            </div>
                            
                          ) :(
                        <Form onSubmit={handleSubmit} >
                        <div className="ui divider"></div>
                            
                            <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03" className='input-cont'>
                                <Form.Label className="input-text">tittle</Form.Label>
                                <Form.Control type="text"
                                name="tittle"
                                placeholder="tittle"
                                value={inputValues.tittle}
                                onChange={handleChange} />
                                <p className="error">
                                {inputErrors.tittle}
                                </p>
                            </Form.Group>
                            
                            
                            </Row>


                            
                            <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03" className='input-cont'>
                                <Form.Label className="input-text">edition</Form.Label>
                                <Form.Control type="text"
                                name="edition"
                                placeholder="edition"
                                value={inputValues.edition}
                                onChange={handleChange} />
                                <p className="error">
                                {inputErrors.edition}
                                </p>
                            </Form.Group>
                            </Row>
                           

                            <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03" className='input-cont'>
                                <Form.Label className="input-text">auther</Form.Label>
                                <Form.Control type="password"
                                name="auther"
                                placeholder="auther"
                                value={inputValues.auther}
                                onChange={handleChange} />
                                <p className="error">
                                {inputErrors.auther}
                                </p>
                            </Form.Group>
                            </Row>

                            <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03" className='input-cont'>
                                <Form.Label className="input-text">description</Form.Label>
                                <Form.Control 
                                type="text"
                                        name="description"
                                        placeholder="description"
                                        value={inputValues.description}
                                        onChange={handleChange} />
                                  <p className="error"> {inputErrors.description}</p>
                            </Form.Group>
                            
                           
                            </Row>
                           
                            <Button type="submit"   className="submit-btn">Register</Button>
                        </Form>
                        )}
                    </div>

                </div>
        );
    
}
