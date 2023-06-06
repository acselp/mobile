import { NavigationContainer } from "@react-navigation/native"
import AuthStack from "./AuthStack"
import AppStack from "./AppStack"
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"
import { View, ActivityIndicator } from "react-native"

export default function AppNav(){
    const {userToken} = useContext(AuthContext);
    const authContext = useContext(AuthContext);
    if (authContext.isLoading) {
        return (
            <View style={{flex: 1, justifyContent: "center", alignItems: 'center', backgroundColor: "#fff"}}>
                <ActivityIndicator size={'large'} />
            </View>
        )
    }

    return (
        <NavigationContainer>
            { userToken !== null ? <AppStack />: <AuthStack /> }
        </NavigationContainer>
    )
}
