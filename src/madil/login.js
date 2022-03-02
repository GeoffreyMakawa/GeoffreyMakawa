import { useState, useEffect } from "react";
import { Form,Button,InputGroup,Col,Row} from 'react-bootstrap';
import {useHistory} from "react-router-dom";
export default 
    function Login(){
const initialValues = {  email: "", pwd: "" };
const [formValues, setFormValues] = useState(initialValues);
const [inputErrors, setinputErrors] = useState({});
const [user, setUser]=useState([]);
const [isSubmit, setIsSubmit] = useState(false);
let history = useHistory();
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  setinputErrors(validate(formValues));
  setIsSubmit(true);
};

useEffect(() => {
  console.log(inputErrors);
  if (Object.keys(inputErrors).length === 0 && isSubmit) {
      
    fetch("https://malawidigitallibrary.herokuapp.com/api/user/"+formValues.email)
    .then(res=>res.json())
    .then((result)=>{
        setFormValues(result);
        if(result.pwd === formValues.pwd){
            localStorage.setItem('admininfo', JSON.stringify(result))
            history.push("/dashboard")
        }
        
        
    })

    
    
  }
}, [inputErrors]);
const validate = (values) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  
  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!regex.test(values.email)) {
    errors.email = "This is not a valid email format!";
  }
  if (!values.pwd) {
    errors.pwd = "password is required";
  } else if (values.pwd.length < 7) {
    errors.pwd = "password must be more than 7 characters";
  } else if (values.pwd.length > 20) {
    errors.pwd = "password cannot exceed more than 20 characters";
  }
  
  return errors;
 
  
};
      
        return (
                <div className='auth'>
                    <div className='auth-cont'>
                        <p>Admin start your session</p>
                        {Object.keys(inputErrors).length === 0 && isSubmit ? (
                            <div className="error">Wrong login info<br />
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
                                
                                <Form.Control
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    value={formValues.email}
                                    onChange={handleChange}
                                />
                               
                                </InputGroup>
                                <p className="error">
                                {inputErrors.email}
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
                                  <p className="error"> {inputErrors.pwd}</p>
                            </Form.Group>
                            
                           
                            </Row>
                         
                            <Button type="submit"   className="submit-btn">Register</Button>
                        </Form>
                        )}
                    </div>
                    {localStorage.clear()}
                </div>
               
        );
        
}
