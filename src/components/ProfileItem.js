import React from 'react'
import { View, Text } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


function ProfileItem(props) {


    return (
        <View style={{flexDirection: "row"}}>
          <View style={{padding:7, paddingTop: 11}}>
            <MaterialIcons name={props.icon} size={22} color={"#000"} />
          </View>
          <View style={{display: "flex", justifyContent: "space-between", width: "85%", marginBottom: 10 ,flexDirection: "row", padding:7, borderBottomColor:"#aa18ea", borderBottomWidth:3, borderRadius: 3}}>
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