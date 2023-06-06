import React from 'react'
import { View, Text } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useState, useEffect } from 'react';


function ProfileItem(props) {

  let [bgColor, setBgColor] = useState('white');

  useEffect(() => {
    if(props.grayBg) {
      setBgColor("#e0e0e0");
    }
  }, [bgColor])

    return (
        <View style={{flexDirection: "row", backgroundColor: bgColor}}>
          <View style={{padding:7, paddingTop: 11}}>
            <MaterialIcons name={props.icon} size={22} color={"#000"} />
          </View>
          <View style={{display: "flex", justifyContent: "space-between", width: "85%", marginBottom: 5 ,flexDirection: "row", padding:7}}>
            <Text style={{color:"#000", fontFamily:"Roboto-Bold", fontSize: 20}}>
              {props.label}
            </Text>
            <Text style={{fontFamily:"Roboto-Regular", color: "#000", marginLeft:7, fontSize: 20}}>
              {props.value}
            </Text>
          </View>
        </View>
    );
}

export default ProfileItem;