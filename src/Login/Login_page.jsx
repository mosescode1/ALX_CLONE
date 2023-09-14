import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.scss'

export const LoginPage = (props) =>{
    // the properties of the state is the same with the form input name
    const [fillForm, setForm] = useState({
        user_email: '',
        user_password: '',
    });
    const [ischecked, setCheck] = useState(false);
    const navigate = useNavigate();
    //control the form input from react
    const handleForm = (e) =>{
        setForm((prev) =>({
            ...prev, [e.target.name]:e.target.value
        }));
    }
    //control the checkbox
    const handleCheck =()=>{
        setCheck((prev) => !prev);
    }
    //Login and move to dashboard
    const nowLogin = () => {
        // I still will need to valaidate details with database details
        navigate('/dashboard')
    };
    
    return (
        <div className="container">
            <div className="header">
                <div className="alx-bg"></div>
                <form name="login-form" onSubmit={nowLogin} autoComplete="on">
                    <label for="f_email">Email</label><br/>
                    <input type="email" id="f_email" name="user_email" autoFocus="autofocus" value={fillForm.user_email} required onChange={handleForm}/><br/>
                    <label for="f_password">Password</label><br/>
                    <input type="password" id="f_password" name="user_password" autoComplete="off" value={fillForm.user_password} required onChange={handleForm}/><br/>
                    <input type="checkbox" id="remember" name="remember_me" value={ischecked ? "yes" : "no"} checked={ischecked} onChange={handleCheck}/>
                    <label for="remember">Remember me</label><br/>
                    <input type="submit" value="Log in" className="submit"/>
                </form>
                <div><a href="">Forgot your password?</a></div>
            </div>
        </div>
    )
}