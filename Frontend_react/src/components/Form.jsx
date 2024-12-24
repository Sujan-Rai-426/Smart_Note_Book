

// For forms like registration or login, we can use the following code:



import React from 'react'
import { useNavigate } from 'react-router-dom';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import { useState } from 'react';
import api from '../api';
import '../styles/Form.css';
import Loading_Indicator from './Loading_Indicator';

function Form({route, method }) {

    // state for username and password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // check whether the user is logged in or not
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    // set the name of the form
    const name = method === 'login'? 'Login': 'Register';

    // Button link to register or login 
    const visit_link = method === 'login' ? <p>Create new account? <a href="/register">Register</a></p> : <p>Already have an account? <a href="/login">Login</a></p>;



    // handle submit function
    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault(); // prevent the default action of the form

        // check if the method is login or register
        try {
            const response = await api.post(route, {username, password});
            if (method === 'login') {
                localStorage.setItem(ACCESS_TOKEN, response.data.access); // set the access token in the local storage
                localStorage.setItem(REFRESH_TOKEN, response.data.refresh); // set the refresh token in the local storage
                navigate('/'); // redirect to the home page
            } 
            else {
                alert('Registered successfully');
                navigate('/login'); // redirect to the login page after registration
            }
        } 

        catch (error) {         
            alert(error);
        } 

        finally {
            setLoading(false);
        }
    }

    return (
        

        <form onSubmit={handleSubmit} className='form-container' action="">
            <h1 className='text-center'> {name} </h1>
            <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username' type="text" className='form-input'/>
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' type="password" className='form-input'/>
            
            {/* Loading indicator */}
            {loading && <Loading_Indicator />}
            <br />

            <button className='btn btn-primary'> {name} </button>
            <br />

            <p>{visit_link}</p>
        </form>

    )
}

export default Form
