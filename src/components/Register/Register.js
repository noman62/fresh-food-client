import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import {useDispatch,useSelector} from "react-redux";
import { registerUser } from "../../redux/actions/userAction";
import Error from "../Error/Error";
import Loader from "../Loader/Loader";
import Success from "../Success/Success";
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
 const registerState=useSelector(state=>state.registerReducer)
 const {error,success,loading}=registerState
  const dispatch=useDispatch();
  
  const handleRegister = () => {
    if (password != confirmPassword) {
      alert("password do not match");
    } else {
      const user = { name, email, password, confirmPassword };
      dispatch(registerUser(user));
    }
  };
  return (
    <>
      <Container>
        {loading && <Loader/>}
        {success &&<Success success="User Register Successfully"/>}
        {error && <Error error="Something went to wrong"/>}
        <Form>
        <h1>Registration</h1>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary"  onClick={handleRegister}>
            Register
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Register;
