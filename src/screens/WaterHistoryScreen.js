import React from 'react'
import { View, Text } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useState, useEffect } from 'react';


function WaterHistoryScreen() {

  let [bgColor, setBgColor] = useState('white');

  
    return (
        <View>
          <Text>
            Water screen  history
          </Text>
        </View>
    );
}

export default WaterHistoryScreen;