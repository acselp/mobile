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

            {props.tarif &&
            <View style={{flexDirection: "row"}}>
              <Text style={{fontFamily:"Roboto-Regular", color: "#000", marginLeft:7, fontSize: 20}}>
                {props.value} <Text style={{fontWeight: "bold"}}>{props.tarif && "lei/"}m</Text>
              </Text>
              <Text style={{lineHeight: 18, fontWeight: "bold", color: "black"}}>3</Text>
            </View>
            }

            {!props.tarif && 
             !props.trash &&
             !props.pers &&
            <View style={{flexDirection: "row"}}>
              <Text style={{fontFamily:"Roboto-Regular", color: "#000", marginLeft:7, fontSize: 20}}>
                {props.value} <Text style={{fontWeight: "bold"}}>{props.tarif && "lei/"}m</Text>
              </Text>
              <Text style={{lineHeight: 18, fontWeight: "bold", color: "black"}}>3</Text>
            </View>
            }

            {props.pers &&
             !props.tarif &&
             !props.trash &&
            <View style={{flexDirection: "row"}}>
              <Text style={{fontFamily:"Roboto-Regular", color: "#000", marginLeft:7, fontSize: 20}}>
                {props.value}
              </Text>
            </View>
            }

            {props.trash &&
              <View style={{flexDirection: "row"}}>
                <Text style={{fontFamily:"Roboto-Regular", color: "#000", marginLeft:7, fontSize: 20}}>
                  {props.value} <Text style={{fontWeight: "bold"}}>lei/lună 1 persoană</Text>
                </Text>
              </View>
            } 
          </View> 
        </View>
    );
}

export default WaterItem;