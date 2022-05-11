import React, { useState } from "react";
import "../styles/App.css";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm"


const Register = () => {

    let navigate = useNavigate();

    const [registerValues, setRegisterValues] = useState({
      name:'',
      userName: '',
      email: '',
      picture: '',
      password: '',
      confirmPassword: '',
    })
  
    const handleChange = (e) => {
      setRegisterValues({ ...registerValues, [e.target.name]: e.target.value })
    }
  
    const handleSubmit = async (e) => {
      e.preventDefault()
    //   await RegisterUser({
    //     firstName: registerValues.firstName,
    //     lastName: registerValues.lastName,
    //     userName: registerValues.userName,
    //     about: registerValues.about,
    //     picture: registerValues.picture,
    //     email: registerValues.email,
    //     password: registerValues.password
    //   })
    //   setRegisterValues({
    //     firstName: '',
    //     lastName: '',
    //     userName: '',
    //     about: '',
    //     picture: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: '',
    //   })
      navigate('/new-user')
    }

    return (
        <div>
             <h2 className="login-register">Register</h2>
      <form className="form" 
    //   onSubmit={handleSubmit}
      >
        <input
          className="formInput"
          type="text"
        //   onChange={handleChange}
          name="firstName"
          placeholder="first name"
          value={registerValues.firstName}
          required
        />
        <input
          className="formInput"
          type="text"
        //   onChange={handleChange}
          name="lastName"
          placeholder="last name"
          value={registerValues.lastName}
          required
        />
        <input
          className="formInput"
          type="username"
        //   onChange={handleChange}
          name="userName"
          placeholder="username"
          value={registerValues.userName}
          required
        />
        <input
          className="formInput"
          type="text"
        //   onChange={handleChange}
          name="picture"
          placeholder="picture"
          value={registerValues.picture}
          required
        />
        <input
          className="about-you formInput"
          type="text"
        //   onChange={handleChange}
          name="about"
          placeholder="about you!"
          value={registerValues.about}
          required
        />
        <input
          className="formInput"
          type="email"
        //   onChange={handleChange}
          name="email"
          placeholder="your email"
          value={registerValues.email}
          required
        />
        <input
          className="formInput"
          type="password"
        //   onChange={handleChange}
          name="password"
          placeholder="password"
          value={registerValues.password}
          required
        />
        <input
          className="formInput"
          type="password"
        //   onChange={handleChange}
          name="confirmPassword"
          placeholder="confirm password"
          value={registerValues.confirmPassword}
          required
        />
        <button 
          className="button"
        //   disabled={
        //     !registerValues.email ||
        //     (!registerValues.password &&
        //     registerValues.confirmPassword === registerValues.password)
        //   }
          >Submit
        </button>
      </form>
      <LoginForm />
        </div>
    )
}

export default Register