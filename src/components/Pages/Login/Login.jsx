import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submit = (e)=>{
        e.preventDefault()
        axios.post('https://civet-top-actively.ngrok-free.app/api/login',{
            
            email:mail,
            password,
        })
        .then(res =>navigate("/"))
        .catch(()=>console.log("Email Or Password Is Incorrect"));
        }
  return (
    <section className="signin" id="signin">
        <span className="circle circle1"></span>
        <span className="circle circle2"></span>
        <form onSubmit={(e)=>submit(e)}>
            <div className="container">
                <h2 className="title2">sign in</h2>
                <p className="quote">sign in to stay connected</p>
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example1">E-mail</label>
                <input type="email" id="form2Example1" className="form-control" required onChange={(e)=>setMail(e.target.value)}/>
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form2Example2">Password</label>
                <input type="password" id="form2Example2" className="form-control"required onChange={(e)=>setPassword(e.target.value)}/>
            </div>

            <div className="row mb-4">
                <div className="col d-flex justify-content-center">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="form2Example31" defaultChecked />
                    <label className="form-check-label" htmlFor="form2Example31 ">Remember me </label>
                    </div>
                </div>
            </div>

            <input type="submit" className="btn btn-primary btn-block mb-4 button" value="Sign in" />

            <div className="col">
                <a href="#!" id="forget">Forgot password?</a>
            </div>

            <div className="text-center">
                <p  id="new">Don't have an account? <Link to="/signup" style={{fontWeight:"500",textDecoration:"underline"}}>sign up</Link></p>
            </div>
        </form>
    </section>
  )
}

export default Login