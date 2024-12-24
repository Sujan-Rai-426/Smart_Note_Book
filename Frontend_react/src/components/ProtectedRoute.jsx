


//  We need to have the access token in the local storage to access the protected route file.


import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
// import * as jwt_decode from 'jwt-decode';
import { jwtDecode } from "jwt-decode"
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import api from '../api';





function ProtectedRoute({children}) {


    const [isAuthorized, setIsAuthorized] = useState(null);


    // set authorized to false if we get catch error in below authorize
    useEffect(() => {
        authorize().catch(() => {setIsAuthorized(false)});
    }, []);


    // refresh token function
    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);

        // if (!refreshToken) {
        //     setIsAuthorized(false);
        //     return;
        // }

        // try -> send request to backend with refresh token to get new access token,  catch -> error
        try {
            const response = await api.post('/api/token/refresh/', {
                refresh: refreshToken,
            });
            // if we get the new access token successfully (i.e status 200) --> setAuthorized to true , othretwise setAuthorized to false
            if (response.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, response.data.access);
                setIsAuthorized(true);
            } else {
                // console.log(error);
                setIsAuthorized(false);
            }

        } catch (error) {
            console.log(error);
            setIsAuthorized(false);
        }
    }


    // check if we need to refresh access token or we are already authorized
    const authorize = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);

        // if no token
        if(!token){
            setIsAuthorized(false);
            return;
        }
        const decoded = jwtDecode(token);
        const tokenExpire = decoded.exp;
        const currentTime = Date.now() / 1000; // divide by 1000 get current time in date in second instead of milisecond

        // if token is expired
        if(tokenExpire < currentTime){
            await refreshToken();
            // setIsAuthorized(true);
        }
        else {
            setIsAuthorized(true);
        }
    }

    if(isAuthorized === null){
        return <div>Loading...</div>
    }
    else if(isAuthorized){
        return children;
    }
    else {
        return <Navigate to='/login' />
    }
}

export default ProtectedRoute