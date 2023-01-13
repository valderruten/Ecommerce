import React from "react";
import { useForm } from "react-hook-form";
import "./styles/loginForm.css";
import axios from "axios";
import { useEffect } from 'react'
import { useState } from 'react'


const LoginForm = () => {
    const [isLogged, setIsLogged] = useState(false)
     const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    const URL = "https://e-commerce-api.academlo.tech/api/v1/users/login";
    axios
      .post(URL, data)
      .then((res) => {
        console.log(res.data.data);
        localStorage.setItem("token", res.data.data.token);
        setIsLogged(true);
        navigate("/");
      })
      .catch((err) => console.log(err));

    reset({
      email: "",
      password: "",
    });
  };
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
      <main className='login'>
         <h1>User Logged</h1>
         <button className="btn__logout" onClick={handleLogout}>Logout</button>
         </main>
    
      )
    }

  return (
    <div className="login">
      <form onSubmit={handleSubmit(submit)} className="login__form">
        <ul className="login__credential">
          <li>
            <span>
              <b>Email: </b>    valderruten1@gmail.com  
            </span>
          </li>
          <li>
            <span>
              <b>Password:</b>   pass2022
            </span>
          </li>
        </ul>
        <h2 className="login__title">
          Login here
        </h2>
        <ul className="login__list">
          <li className="login__item">
            <label className="login__label" htmlFor="email">
              Email
            </label>
            
          </li>
          <input
              {...register("email")}
              className="login__input"
              type="email"
              id="email"
            />
          <li className="login__item">
            <label className="login__label" htmlFor="password">
              Password
            </label>
            
          </li>
          <input
            {...register("password")}
            className="login__input"
            type="password"
            id="password"
          />
        </ul>
        <button className="login__btn">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
