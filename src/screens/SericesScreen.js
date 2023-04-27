import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Ionicons from 'react-native-vector-icons/Ionicons';

const ServicesScreen = () => {

  let [data, setData] = React.useState([
    { key: 1, label: "Apa", icon: "water-outline"},
    { key: 2, label: "Gaz", icon: "water-outline"},
    { key: 3, label: "Salubrizare", icon: "trash"}
  ])



  return (
    <View style={{flex:1,justifyContent:'center', backgroundColor: "white"}}>
      <FlatList 
        data={data}
        renderItem={({item}) => 
          <View style={{paddingHorizontal: 20, paddingVertical: 10}}>
            <TouchableOpacity onPress={() => {}} style={{flexDirection: "row", backgroundColor: "#f0f0f0", borderRadius: 5}}>
              <Ionicons name={item.icon} size={20}/>
              <Text style={{paddingHorizontal: 20, paddingVertical: 15, fontWeight: "bold"}}>
                {item.label}
              </Text>
            </TouchableOpacity>
          </View>  
        }
      />
    </View>
  )
}

export default ServicesScreen
