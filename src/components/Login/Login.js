import React, { useEffect, useState } from "react";
import {useSelector,useDispatch} from 'react-redux';
import { Button, Container, Form } from "react-bootstrap";
import { loginUser } from "../../redux/actions/userAction";

const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const dispatch=useDispatch();
  useEffect(()=>{
   if(localStorage.getItem('currentUser')){
     window.location.href="/"
   }
  },[])
  const loginHandler=()=>{
    const user={email,password}
    dispatch(loginUser(user))
  }
  return (
    <>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="Enter email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
            type="password"
             placeholder="Password"
             value={password}
            onChange={(e)=>setPassword(e.target.value)}
              />
          </Form.Group>
          <Button 
          variant="primary" 
          onClick={loginHandler}
          >
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default Login;
