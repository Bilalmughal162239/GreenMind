import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth'
import Profile from './Frontend/Profile'
import { Fade } from 'react-awesome-reveal'
import { useAuthContext } from '../context/Auth'

const Index = () => {
  const {isAuth} = useAuthContext()
  return (
    <Fade>
    <Routes>
      <Route path='/*' element={<Frontend />} />
      <Route path='auth/*' element={!isAuth ?<Auth/> : <Navigate to='/'/>} />
      <Route path='profile' element={<Profile/>} />
    </Routes>
    </Fade>
  )
}

export default Index