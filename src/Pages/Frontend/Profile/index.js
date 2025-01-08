import React, { useState } from 'react'
import { Button, Col, Form, Input, Row, Typography } from 'antd'
import { useAuthContext } from '../../../context/Auth'
import { doc, setDoc } from 'firebase/firestore'
import { firestore } from '../../../Config/firsbase'

const { Title } = Typography
const Profile = () => {
      const [isProcessing, setIsProcessing] = useState(false)
    const {user} = useAuthContext()
    const handleUpdateProfile =async(user)=>{
        // console.log('user', user)
        try {
            await setDoc(doc(firestore, "users", user.uid), user);
            window.notify("User Profile Update Successfully", 'success')
          } catch (e) {
            console.error("Error adding document: ", e);
            window.notify("Error Createing Update Profile", 'error')
          } finally {
            setIsProcessing(false)
          }
    }
    return (
        <main className="Register py-xs-2 py-lg-4">
            <div className="card py-xs-2 py-sm-3 py-lg-3 px-xs-3 px-sm-3 px-lg-4 my-3">
                <Title level={1} className='text-center text-info '>User Profile</Title>
                <Form layout='vertical' className='mb-0'>
                    <Row>
                        <Col span={24}>
                            <Form.Item className='mb-2' label='First Name' required>
                                <Input type='text' name='firstName' className='py-2' value={user.firstName} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item className='mb-2' label='Last Name'>
                                <Input type='text' name='lastName'  className='py-2' value={user.lastName} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item className='mb-2' label='Email' required>
                                <Input type='text' name='email'  className='py-2' value={user.email} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item className='mb-2' label='Password' required>
                                <Input.Password name='password'  className='py-2' value={user.password} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item className='' label='Confirm Password' required>
                                <Input.Password name='confirmPassword'  className='py-2' value={user.confirmPassword} />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Button type='primary' size='large' block htmlType='submit' loading={isProcessing} onClick={()=>{handleUpdateProfile(user)}} >Update Profile</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </main>
    )
}

export default Profile