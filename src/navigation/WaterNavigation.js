import WaterScreen from "../screens/WaterScreen";
import WaterHistoryScreen from "../screens/WaterHistoryScreen";
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const WaterNavigation = () => {

    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Water" component={WaterScreen} />
            <Stack.Screen name="WaterHistory" component={WaterHistoryScreen} />
        </Stack.Navigator>
    );
}

export default WaterNavigation;
