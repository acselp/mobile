import React from 'react'
import { View, Text } from 'react-native'


function WaterItem(props) {


    return (
        <View style={{flexDirection: "row", marginBottom: -30}}>
          <View style={{display: "flex", justifyContent: "space-between", width: "100%", marginBottom: 10 ,flexDirection: "row", padding:20}}>
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