import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {createContext, useEffect} from "react";
import { useState } from "react";
import axios from "axios";
import {BASE_URL} from "../config/config";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [authError, setAuthError] = useState(null);
    const [authUser, setAuthUser] = useState(null);

    const login = (email, password) => {
        setIsLoading(true);

        axios.post(`${BASE_URL}/authentication/login`, {
            'email': email,
            'password': password
        })
        .then(async (res) => {
            let userInfo = res.data;

            setUserInfo(userInfo);
            setUserToken(userInfo.token);

            await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            await AsyncStorage.setItem('userToken', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwiZXhwIjoxNjg2Mjg1NTk1LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMDAiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUwMDAifQ.oROrDZYnJzkc1JC2UyEEdzWcTbLPwPp74twQVu0wEk4");
        })
        .catch(e => {
            if(e.response.data.code === "email_password_not_found") {
                setAuthError(e.response.data.code)
            }
        })

        setIsLoading(false);
    }

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        AsyncStorage.removeItem('userInfo');
        setIsLoading(false);
    }

    const isLoggedId = async() => {
        try {
            setIsLoading(true);
            let userInfo = await AsyncStorage.getItem('userInfo');
            let userToken = await AsyncStorage.getItem('userToken');
            userInfo = JSON.parse(userInfo);

            if( userInfo ) {
                setUserToken(userToken);
                setUserInfo(userInfo);
            }

            setIsLoading(false);
        }
        catch(e) {
            console.log(`isLogged in error ${e}`);
        }
    }

    useEffect(() => {
        isLoggedId();
    }, [])

    return (
        <AuthContext.Provider value={{login, logout, isLoading, userToken, authError}}>
            {children}
        </AuthContext.Provider>
    )
}
