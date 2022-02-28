import { useState, useEffect } from "react";
import { Form,Button,InputGroup,Col,Row} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
export default  function SignUp() {
const initialValues = { fullName: "", email: "", pwd: "" , location: "", type: "", phoneNumber: "" };
const [formValues, setFormValues] = useState(initialValues);
const [formErrors, setFormErrors] = useState({});
const [isSubmit, setIsSubmit] = useState(false);

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  setFormErrors(validate(formValues));
  setIsSubmit(true);
};

useEffect(() => {
  console.log(formErrors);
  if (Object.keys(formErrors).length === 0 && isSubmit) {
    console.log("hello")
    fetch("https://malawidigitallibrary.herokuapp.com/api/user/addNewUser",
    {method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(formValues)
    
    }

    ).then(()=>{
    console.log(formValues);
    })
  }
}, [formErrors]);
const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!values.fullName) {
    errors.fullName = "full Name is required!";
  }
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }
  if (!values.location) {
    errors.location = "location is required";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "phoneNumber is required";
  }

  if (!values.type) {
    errors.type = "type is required";
  }


  if (!values.pwd) {
    errors.pwd = "password is required";
  } else if (values.pwd.length < 7) {
    errors.pwd = "password must be more than 7 characters";
  } else if (values.pwd.length > 20) {
    errors.pwd = "password cannot exceed more than 20 characters";
  }
  
  return errors;
  if(Object.keys(formErrors).length === 0 && isSubmit){
      
  }
  
};
      
        return (
                <div className='auth'>
                    <div className='auth-cont'>
                        <div className='userIcon'>
                        </div>
                        <p>Register new admin</p>
                        {Object.keys(formErrors).length === 0 && isSubmit ? (
                            <div className="success">Signed in successfully <br />
                            <a href="/" className="Register">
                                Login
                            </a></div>
                            
                          ) :(
                        <Form onSubmit={handleSubmit} >
                        <div className="ui divider"></div>
                            <Row className="mb-3">
                            
                            <Form.Group as={Col} md="4" controlId="validationCustomfullName" className='input-cont'>
                                <Form.Label className="input-text">Enter Email below</Form.Label>
                                <InputGroup hasValidation>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                <Form.Control
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    value={formValues.email}
                                    onChange={handleChange}
                                />
                               
                                </InputGroup>
                                <p className="error">
                                {formErrors.email}
                                </p>
                            </Form.Group>
                            </Row>
                            <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03" className='input-cont'>
                                <Form.Label className="input-text">Full Name</Form.Label>
                                <Form.Control type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formValues.fullName}
                                onChange={handleChange} />
                                <p className="error">
                                {formErrors.fullName}
                                </p>
                            </Form.Group>
                            
                            
                            </Row>


                            <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03" className='input-cont'>
                                <Form.Label className="input-text">location</Form.Label>
                                <Form.Control type="text"
                                name="location"
                                placeholder="location"
                                value={formValues.location}
                                onChange={handleChange} />
                                <p className="error">
                                {formErrors.location}
                                </p>
                            </Form.Group>
                            </Row>

                            <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03" className='input-cont'>
                                <Form.Label className="input-text">phoneNumber</Form.Label>
                                <Form.Control type="text"
                                name="phoneNumber"
                                placeholder="phoneNumber"
                                value={formValues.phoneNumber}
                                onChange={handleChange} />
                                <p className="error">
                                {formErrors.phoneNumber}
                                </p>
                            </Form.Group>
                            </Row>

                            <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03" className='input-cont'>
                                <Form.Label className="input-text">Account Type  admin/user</Form.Label>
                                <Form.Control type="text"
                                name="type"
                                placeholder="type"
                                value={formValues.type}
                                onChange={handleChange} />
                                <p className="error">
                                {formErrors.type}
                                </p>
                            </Form.Group>
                            </Row>

                            <Row className="mb-3">
                            <Form.Group as={Col} md="6" controlId="validationCustom03" className='input-cont'>
                                <Form.Label className="input-text">Password</Form.Label>
                                <Form.Control 
                                type="pwd"
                                        name="pwd"
                                        placeholder="Password"
                                        value={formValues.pwd}
                                        onChange={handleChange} />
                                  <p className="error"> {formErrors.pwd}</p>
                            </Form.Group>
                            
                           
                            </Row>
                           
                            <Button type="submit"   className="submit-btn">Register</Button>
                        </Form>
                        )}
                    </div>

                </div>
        );
    
}
