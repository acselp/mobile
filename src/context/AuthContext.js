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

    const login = (email, password) => {
        setIsLoading(true);

        axios.post(`${BASE_URL}/authentication/login`, {
            'email': email,
            'password': password
        })
        .then(res => {
            let userInfo = res.data;
            
            setUserInfo(userInfo);
            setUserToken(userInfo.token);

            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            AsyncStorage.setItem('userToken', userInfo.token);
        })
        .catch(e => {
            console.error(e);
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
        <AuthContext.Provider value={{login, logout, isLoading, userToken}}>
            {children}
        </AuthContext.Provider>
    )
}