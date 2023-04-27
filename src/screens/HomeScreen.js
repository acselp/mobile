import React, { StyleSheet, View, ScrollView, Text } from 'react-native';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis } from 'victory-native';
import WaterItem from '../components/WaterItem';
import CustomButton from '../components/CustomButton';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StackActions } from '@react-navigation/native';


const HomeScreen = ({navigation}) => {
	
  const chartTheme = {
    axis: {
      style: {
        tickLabels: {
          fill: '#ddd',
          fontFamily: 'Roboto-Medium',
          
        },
        ticks: {size: 15, stroke: 'transparent'},
        axis: {stroke: "#adadad"},
        grid: {stroke: "transparent"},



      },
    },
  };


  const historyBtnHandler = () => {
    navigation.navigate('WaterHistory');
  }

		return (
      
      <ScrollView style={{backgroundColor: "#fff"}}>
			<Text style={{color: "black", padding: 20, fontSize: 25, fontWeight: "bold", paddingBottom: 5}}>
          Servicii de asigurare cu apa
        </Text>
      </ScrollView>
		);
}

export default HomeScreen;