import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = () =>{
    // the properties of the state is the same with the form input name
    const [fillForm, setFillForm] = useState({
        signup_name: '',
        signup_email: '',
        signup_pass: '',
        signup_state: '',
        signup_country: '',
    });
    const navigate = useNavigate();
    //control the form input from react
    const handleFormFill = (e) =>{
        setFillForm((prev) =>({
            ...prev, [e.target.name]:e.target.value
        }));
    }
    //Login and move to dashboard
    const nowSignup = () => {
        // I still will need to valaidate details from form before saving in database
        //Also, i will be making a POST request with user details to db
        navigate('/sign_in')
    };

    return (
        <div className="container">
            <div className="header" id="signup_cont">
                <div className="alx-bg"></div>
                <p>Welcome ! Kindly register using the form below.</p><br/>
                <form name="login-form" onSubmit={nowSignup} autoComplete="on">
                    <label for="up_name">Name</label><br/>
                    <input type="text"  id="up_name" name="signup_name" value={fillForm.signup_name} autoFocus="autofocus" required onChange={handleFormFill}/><br/>
                    <label for="up_email">Email</label><br/>
                    <input type="email" id="up_email" name="signup_email"  value={fillForm.signup_email} required onChange={handleFormFill}/><br/>
                    <label for="up_country">County</label><br/>
                    <input type="text" id="up_country" name="signup_country"  value={fillForm.signup_country} required onChange={handleFormFill}/><br/>
                    <label for="up_state">State</label><br/>
                    <input type="text" id="up_state" name="signup_state"  value={fillForm.signup_state} required onChange={handleFormFill}/><br/>
                    <label for="up_pass">Password</label><br/>
                    <input type="password" id="up_pass" name="signup_pass" autoComplete="off" value={fillForm.signup_pass} required onChange={handleFormFill}/><br/>
                    <input type="submit" value="Sign up" className="submit" id="signup_but"/>
                </form>
            </div>
        </div>
    )
}