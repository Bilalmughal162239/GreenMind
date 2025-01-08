import React, { useState } from 'react'

import { Row, Col, Typography, Form, Input, Button } from 'antd'
import { auth } from '../../../Config/firsbase'
import { sendPasswordResetEmail  } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const { Title } = Typography
const initialState = { email: "" }
const ForgetPassword = () => {
  const [state, setState] = useState(initialState)
  const navigate=useNavigate()
  const [isProcessing, setIsProcessing] = useState(false)
  const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))
  const handleSubmit = e => {
    e.preventDefault()

    let { email } = state
    setIsProcessing(true)

    sendPasswordResetEmail(auth, email, { url: 'http://localhost:3000/auth/login' })
      .then(() => {
          window.notify("Password Sent To Your Email Successfully", "success")
          navigate('/auth/login');
      })
      .catch((error) => {
        window.notify("Some thing went wrong while login  a user", "error")
        console.error(error)
      })
      .finally(()=>{
        setIsProcessing(false)
      });
  }
  return (
    <main className='ForgetPassword p-3 p-lg-4'>
      <div className="card p-3 p-lg-4">
        <Title className='text-center text-primary mb-5'>Forget Password</Title>
        <Form layout='vertical'>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Email" required>
                <Input size='large' type='email' placeholder='Enter Your Email' name='email' onChange={handleChange} />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Button type='primary' size='large' block htmlType='submit' loading={isProcessing} onClick={handleSubmit}>Send Password</Button>
            </Col>
          </Row>
        </Form>
      </div>
    </main>
  )
}

export default ForgetPassword