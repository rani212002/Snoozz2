import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import '../assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Form, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';


const Register = () => {

    const [data, setData] = useState({
        fname:"",
        lname:"",
        email: "",
        phone: "",
        password: "",
        confirm_password:""
    })

    const [errors, setErrors] = useState({
        fname:false,
        lname:false,
        email: false,
        phone: false,
        password: false,
        confirm_password:false
    })

    const [success, setSuccess] = useState("")
    const [error, setError] = useState("")

	const register = async () => {
		JSON.parse(JSON.stringify(data), (key, value) => {
			if (key) {
				console.log(key)
			}
		});

		setErrors({fname: 'newCount',lname: 'newCount',});
		axios({
	      	url: "http://localhost:9000/crud/addUser",
	      	method: "POST",
	     //  	headers: {
	     //    	// Add any auth token here
	     //    	authorization: "your token comes here",
	    	// },
	      	data: data,
	    }).then((res) => {
      		if (res.data.status && res.data.status == 'success') {
				setError("")
				setSuccess(res.data.message)
			} else if ((res.data.status && res.data.status == 'error') || !res.data.status) {
				setSuccess("")
				setError("Something went wrong!")
			}
      	}).catch((err) => {
      		setSuccess("")
			setError("Something went wrong!")
      	});
	}

	const closeMessage=(e) => {
		if (e == 1) {
			setError("")
			setSuccess("")
		}
	}

	const handleChange=({currentTarget:input}) => {
        setData({...data,[input.name]:input.value})
        if (input.value == '') {
	        setErrors({...errors,[input.name]:input.placeholder+' is required!'})
        } else {
	        setErrors({...errors,[input.name]:false})
        }
    }

  	return (
	    <Container>
		    <div className="main-form pt-5">
			    <Card className="form-card">
			      	<Card.Body>
			        	<Card.Title className="mb-3">Register</Card.Title>
					    <Form>
					    	{success != '' &&
					    		<div className="alert alert-success alert-dismissible fade show">
								    <strong>Success!</strong> {success}
								    <button type="button" className="btn-close" onClick={() => closeMessage(1)} ></button>
								</div>
							}

					    	{error != '' &&
					    		<div className="alert alert-danger alert-dismissible fade show">
								    <strong>Error!</strong> {error}
								    <button type="button" className="btn-close" onClick={() => closeMessage(1)} ></button>
								</div>
							}
					        	
						    <Row>
						        <Col>
						          	<Form.Control className="input" type="text" name="fname" onChange={handleChange} placeholder="First name" />
						          	{errors && <span className="text-danger">{errors.fname}</span>}
						        </Col>
						        <Col>
						          	<Form.Control className="input" type="text" name="lname" onChange={handleChange} placeholder="Last name" />
						          	{errors && <span className="text-danger">{errors.lname}</span>}
						        </Col>
						    </Row>
						    <Row>
						        <Col>
						          	<Form.Control className="input" type="email" name="email" onChange={handleChange} placeholder="Email" />
						          	{errors && <span className="text-danger">{errors.email}</span>}
						        </Col>
						        <Col>
						          	<Form.Control className="input" type="number" name="phone" onChange={handleChange} placeholder="Phone" />
						          	{errors && <span className="text-danger">{errors.phone}</span>}
						        </Col>
						    </Row>
						    <Row>
						        <Col>
						          	<Form.Control className="input" type="password" name="password" onChange={handleChange} placeholder="Password" />
						          	{errors && <span className="text-danger">{errors.password}</span>}
						        </Col>
						        <Col>
						          	<Form.Control className="input" type="password" name="confirm_password" onChange={handleChange} placeholder="Confirm Password" />
						          	{errors && <span className="text-danger">{errors.confirm_password}</span>}
						        </Col>
						    </Row>
					      	<Button variant="primary" onClick={register}>Submit</Button>
					    </Form>
			      	</Card.Body>
			    </Card>
		    </div>
	    </Container>
  	);
}

export default Register;
