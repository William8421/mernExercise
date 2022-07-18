import React, {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { signInUser } from '../fetcher/index.js';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import UserData from './UserData.jsx';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [values, setValues] = useState({  email: "", password: "" })
  const [success, setSuccess] = useState(false)


  const handleChange = (e) => {
      const inputValue = e.target.value
      const inputName = e.target.name

      setValues((val) => ({ ...val, [inputName]: inputValue }))
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      signInUser(values).then(()=>setSuccess(true))

  }
  const navigate = useNavigate()
  useEffect(() => {
    const URL = 'http://localhost:9002';
    fetch(`${URL}/user/signin`, {
      method: "POST",
      body: JSON.stringify({email: "a@a.com", password: "a"}),
      headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('myToken')}`
      }
  })
  .then(response => response.json())
  .then(data => navigate(''))
  }, [])

  return (
    <>
  <Form className="w-25 p-3 m-auto" inline>
    <FormGroup floating>
      <Input
      onChange={handleChange}
        id="exampleEmail"
        name="email"
        placeholder="Email"
        type="email"
      />
      <Label for="exampleEmail">
        Email
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
      onChange={handleChange}
        id="Password"
        name="password"
        placeholder="Password"
        type="password"
      />
      <Label for="Password">
        Password
      </Label>
    </FormGroup>
    {' '}
    <Button color='primary' 
    onClick={handleSubmit}
    >
      Sign In
    </Button>
  </Form>
  {success ? <UserData values={values} /> : ""}
</>
  )
}
