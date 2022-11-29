import React from 'react'
import { View, Text } from 'react-native'
import { useState, useEffect } from 'react';

function WaterItem(props) {

    let [bgColor, setBgColor] = useState('white');

    

    useEffect(() => {
      if(props.grayBg) {
        setBgColor("#f0f0f0");
      }
    }, [bgColor])

    return (
        <View style={{flexDirection: "row", backgroundColor: bgColor}}>
          <View style={{display: "flex", justifyContent: "space-between", width: "100%",flexDirection: "row", padding:20}}>
            <Text style={{color:"#000", fontFamily:"Roboto-Bold", fontSize: 20}}>
              {props.label}
            </Text>
            <View style={{flexDirection: "row"}}>
              <Text style={{fontFamily:"Roboto-Regular", color: "#000", marginLeft:7, fontSize: 20}}>
                {props.value} <Text style={{fontWeight: "bold"}}>{props.tarif && "lei/"}m</Text>
              </Text>
              <Text style={{lineHeight: 18, fontWeight: "bold", color: "black"}}>3</Text>
            </View>
          </View> 
        </View>
    );
}

export default WaterItem;