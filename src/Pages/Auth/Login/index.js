import React, { useState } from 'react'
import { Button, Col, Form, Input, Row, Typography } from 'antd'
import { auth } from '../../../Config/firsbase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link } from 'react-router-dom'
const { Title } = Typography
const initialState = { email: "", password: "" }
const Login = () => {
    const [state, setState] = useState(initialState)
    const [isProcessing, setIsProcessing] = useState(false)

    const handleChange = e => setState(s => ({ ...s, [e.target.name]: e.target.value }))
    const handleSubmit = e => {
        e.preventDefault()
        let { password, email } = state
        if (!password.trim()) { return window.notify("Please Enter Your pasword", 'error') }
        setIsProcessing(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                window.notify("User login Successfully", 'success')
                console.log('user', user)
                setIsProcessing(false)
            })
            .catch((error) => {
                console.error(error)
                setIsProcessing(false)
                window.notify("SomeThing went wrong while login user", 'info')
            })
    }
    return (
        <main className="login py-xs-2 py-lg-4">
            <div className="card py-xs-2 py-sm-3 py-lg-3 px-xs-3 px-sm-3 px-lg-4">
                <Title level={1} className='text-center text-info '>Login</Title>
                <Form layout='vertical' className=''>
                    <Row>
                        <Col span={24}>
                            <Form.Item className='' label='Email' required>
                                <Input type='text' name='email' placeholder='Enter Your Email' className='py-2' onChange={handleChange} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item className='' label='Password' required>
                                <Input.Password name='password' placeholder='Enter Your password' className='py-2' onChange={handleChange} />
                                <Link to='/auth/forgetPassword'>Forget Password</Link>
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <div id='LinkButtons'>
                                <Link to='/auth/register' id='Login_link' size='large'>Register</Link>
                                <Button type='primary' size='large' htmlType='submit' loading={isProcessing} onClick={handleSubmit}>Login</Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </div>
        </main>
    )
}

export default Login