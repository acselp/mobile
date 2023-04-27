import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {createContext, useEffect} from "react";
import { useState } from "react";
import axios from "axios";
import {BASE_URL} from "../config/config";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);

    const login = (email, password) => {
        setIsLoading(true);

        axios.post(`${BASE_URL}/authentication/login`, {
            'email': email,
            'password': password
        })
        .then(res => {
            console.log(res)
        })
        .catch(e => {
            console.error(e);
        })


        AsyncStorage.setItem('userToken', 'fsdfasdf');
        setIsLoading(false);
    }

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        AsyncStorage.removeItem('userToken');
        setIsLoading(false);
    }

    const isLoggedId = async() => {
        try {
            setIsLoading(true);
            let userToken = await AsyncStorage.getItem('userToken');
            setUserToken(userToken);
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
        <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    )
}