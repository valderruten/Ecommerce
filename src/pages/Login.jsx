import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate= useNavigate()
  const [isLogged, setIsLogged] = useState(false)

  const {handleSubmit, register, reset} = useForm()

  const submit = data => {
    const URL = 'https://e-commerce-api.academlo.tech/api/v1/users/login'
    axios.post(URL, data)
      .then(res =>{ 
        console.log(res.data.data)
      localStorage.setItem('token',res.data.data.token)
      setIsLogged(true)
      navigate('/')
  })
      .catch(err => console.log(err))
   
      reset({
        email:"",
        password:""
      })
  }

useEffect(() => {
  const condition= localStorage.getItem('token') ? true : false 

setIsLogged(condition)
}, [])

const handleLogout=()=> {
  localStorage.removeItem('token')
  setIsLogged(false)
}

if(isLogged){
  return(
  <div>
     <h1>User Logged</h1>
     <button onClick={handleLogout}>Logout</button>
     </div>

  )
}
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" id='email' {...register("email")} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id='password' {...register("password")} />
        </div>
        <button>Login</button>
      </form>
    </div>
  )
}

export default Login
