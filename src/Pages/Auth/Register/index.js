import React, { useState } from 'react'
import { Button, Col, Form, Input, Row, Typography } from 'antd'
import { auth, firestore } from '../../../Config/firsbase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc } from 'firebase/firestore'
const { Title } = Typography
const initialState = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" }
const Register = () => {
  const [state, setState] = useState(initialState)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()
    let { firstName, lastName, password, email, confirmPassword } = state
    firstName = firstName.trim()
    lastName = lastName.trim()
    const fullName = (firstName + "" + lastName).trim()
    if (firstName.length < 3) { return window.notify("Please Enter Your First Name Correctly", "error") }
    if (lastName.length < 3) { return window.notify("Please Enter Your Last Name Correctly", "error") }
    if (password.length < 6) { return window.notify("Your Password Atlest 6 character containe", "error") }
    if (password !== confirmPassword) { return window.notify("Your Passwrod does not match", "error") }
    const userData = { uid: "", fullName, firstName, lastName, password, email, confirmPassword }
    setIsProcessing(true)
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log('user', user)
        createDoument({ ...userData, uid: user.uid })
        window.notify("User Register Successfully", 'success')
      })
      .catch((error) => {
        console.error(error)
        setIsProcessing(false)
        window.notify("SomeThing went wrong while create user", 'info')
      });
  }
  const createDoument = async (userData) => {
    const user = { ...userData }
    // console.log('userData', userData)
    try {
      // const docRef = await addDoc(collection(firestore, "users"), userData);
      // console.log("Document written with ID: ", docRef.id);
      await setDoc(doc(firestore, "users", user.uid), user);
      window.notify("User Profile Create Successfully", 'success')
    } catch (e) {
      console.error("Error adding document: ", e);
      window.notify("Error Createing User Profile", 'error')
    } finally {
      setIsProcessing(false)
    }
  }
  return (
    <main className="Register py-xs-2 py-lg-4">
      <div className="card py-xs-2 py-sm-3 py-lg-3 px-xs-3 px-sm-3 px-lg-4">
        <Title level={1} className='text-center text-info '>Register</Title>
        <Form layout='vertical' className='mb-0'>
          <Row>
            <Col span={24}>
              <Form.Item className='mb-2' label='First Name' required>
                <Input type='text' name='firstName' placeholder='Enter Your First Name' className='py-2' onChange={handleChange} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item className='mb-2' label='Last Name'>
                <Input type='text' name='lastName' placeholder='Enter Your Last Name' className='py-2' onChange={handleChange} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item className='mb-2' label='Email' required>
                <Input type='text' name='email' placeholder='Enter Your Email' className='py-2' onChange={handleChange} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item className='mb-2' label='Password' required>
                <Input.Password name='password' placeholder='Enter Your password' className='py-2' onChange={handleChange} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item className='' label='Confirm Password' required>
                <Input.Password name='confirmPassword' placeholder='Enter Your password again' className='py-2' onChange={handleChange} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Button type='primary' size='large' block htmlType='submit' loading={isProcessing} onClick={handleSubmit}>Register</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </main>
  )
}

export default Register