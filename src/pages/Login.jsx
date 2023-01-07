import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import "./styles/login.css"
import LoginForm from './LoginForm'
 const Login = () => {
 
  return (
    <div>
      <main className='login'>
      <LoginForm />
        
      </main>
    </div>
  )
}

export default Login
