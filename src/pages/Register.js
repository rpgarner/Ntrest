import React, { useState } from "react";
import "../styles/App.css";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm"
import { RegisterUser } from "../services/Auth";


const Register = () => {

    let navigate = useNavigate();

    const [registerValues, setRegisterValues] = useState({
      name:'',
      userName: '',
      email: '',
      profile_img: '',
      password: '',
      confirmPassword: '',
    })
  
    const handleChange = (e) => {
      setRegisterValues({ ...registerValues, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
      await RegisterUser({
        name: registerValues.name,
        userName: registerValues.userName,
        profile_img: registerValues.profile_img,
        email: registerValues.email,
        password: registerValues.password
      })
      setRegisterValues({
        name: '',
        userName: '',
        profile_img: '',
        email: '',
        password: '',
        confirmPassword: '',
      })
      navigate('/')
    }

    return (
        <div>
             <h2 className="login-register">Register</h2>
      <form className="form" 
      onSubmit={handleSubmit}
      >
        <input
          className="formInput"
          type="text"
          onChange={handleChange}
          name="name"
          placeholder="name"
          value={registerValues.name}
          required
        />
        <input
          className="formInput"
          type="username"
          onChange={handleChange}
          name="userName"
          placeholder="username"
          value={registerValues.userName}
          required
        />
        <input
          className="formInput"
          type="text"
          onChange={handleChange}
          name="profile_img"
          placeholder="profile_img"
          value={registerValues.profile_img}
          required
        />
        <input
          className="formInput"
          type="email"
          onChange={handleChange}
          name="email"
          placeholder="your email"
          value={registerValues.email}
          required
        />
        <input
          className="formInput"
          type="password"
          onChange={handleChange}
          name="password"
          placeholder="password"
          value={registerValues.password}
          required
        />
        <input
          className="formInput"
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          placeholder="confirm password"
          value={registerValues.confirmPassword}
          required
        />
        <button 
          className="button"
          disabled={
            !registerValues.email ||
            (!registerValues.password &&
            registerValues.confirmPassword === registerValues.password)
          }
          >Submit
        </button>
      </form>
      <LoginForm />
        </div>
    )
}

export default Register