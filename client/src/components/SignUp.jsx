import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, FormGroup, Input, Label, Button} from 'reactstrap';
import {signUpUser} from '../fetcher/index.js'

export default function Register() {
  const [values, setValues] = useState({username: '', email: '', password: '', confirmPassword: ''});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');



  const handleChange = (e) => {
        const inputValue = e.target.value
        const inputName = e.target.name

        setValues((val) => ({ ...val, [inputName]: inputValue }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    signUpUser(values).then((data)=> 
    {if(data.token) {
      setSuccess(true)
      setError(false)
      localStorage.setItem('myToken', data.token)
    }
    else {
      setError(data.message) 
      setSuccess(false)
    }
  })
}

  return (
    <>
  <Form className="w-25 p-3 m-auto" inline>
    <FormGroup floating>
      <Input
      value={values.username}
      onChange={handleChange}
        id="username"
        name="username"
        placeholder="User Name"
        type='text'
      />
      <Label for="userName">
        User Name
      </Label>
    </FormGroup>
    {' '}
    <FormGroup floating>
      <Input
      value={values.email}
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
      value={values.password}
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
    <FormGroup floating>
      <Input
      value={values.confirmPassword}
      onChange={handleChange}
        id="confirmPassword"
        name="confirmPassword"
        placeholder="confirm Password"
        type="password"
      />
      <Label for="confirmPassword">
        Confirm Password
      </Label>
    </FormGroup>
    {' '}
    <Button color='primary' 
    onClick={handleSubmit}
    >
      Sign Up
    </Button>
  </Form>
  {success ? <p>you signed up successfully!</p> : error ? error : null}
</>
  )
}
