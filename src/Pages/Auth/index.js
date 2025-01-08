import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import ForgetPassword from './ForgetPassword'
import Profile from '../Frontend/Profile'

const Auth = () => {
    return (
        <Routes>
            <Route path='register' element={<Register/>} />
            <Route path='login' element={<Login/>} />
            <Route path='forgetpassword' element={<ForgetPassword/>} />
            <Route path='profile' element={<Profile/>} />

        </Routes>
    )
}

export default Auth