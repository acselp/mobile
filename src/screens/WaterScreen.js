import React, { StyleSheet, View, ScrollView, Text } from 'react-native';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryAxis } from 'victory-native';
import WaterItem from '../components/WaterItem';
import CustomButton from '../components/CustomButton';
import Ionicons from 'react-native-vector-icons/Ionicons';


const WaterScreen = () => {
	
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

		return (
      <ScrollView >
			<View style={{backgroundColor: "#333440", margin: 15, borderRadius: 10}}>
        
				<VictoryChart
        theme={chartTheme}
          style={{background: {fill: '#333440'}}}
        >
          <VictoryGroup offset={20} style={{ data: { width: 20, borderRadius: 100 } }}>
            <VictoryBar
              data={[
                { x: 1, y: 25 },
                { x: 2, y: 30 },
                { x: 3, y: 31 },
                { x: 4, y: 4 },
                { x: 5, y: 7 },
                { x: 6, y: 5 },
              ]}
              style={{ data: { fill: '#157ad7' }, labels: { fill: '#ddd' } }}
              labels={({ datum }) => datum.y}
              animate={{
                duration: 2000,
                onLoad: {duration: 1000},
              }}
              cornerRadius={10}
            />
            <VictoryAxis
              tickValues={['Jun', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}   
            />
            </VictoryGroup>
        </VictoryChart>

			</View>
        <View>
            <View>
              <View style={{padding: 20, marginBottom: -30, justifyContent: "space-between", flexDirection: "row"}}>
                <View>
                  <Text>
                    Luna curentă
                  </Text>
                  <View style={{flexDirection: "row", justifyContent: 'center'}}>
                    <Text style={{fontFamily:"Roboto-Regular", color: "#000", marginLeft: 7, fontSize: 20, fontWeight: "bold"}}>
                      15m
                    </Text>
                    <Text style={{lineHeight: 18, fontWeight: "bold", color: "black"}}>3</Text>
                  </View>
                </View>


                <View>
                  <Ionicons style={{marginTop: -10, marginBottom: 10}} name="water" size={70} color={"#2389da"} />
                </View>


                <View>
                  <Text>
                    Total pe an
                  </Text>
                  <View style={{flexDirection: "row", justifyContent: 'center'}}>
                    <Text style={{fontFamily:"Roboto-Regular", color: "#000", marginLeft: 7, fontSize: 20, fontWeight: "bold"}}>
                      122m
                    </Text>
                    <Text style={{lineHeight: 18, fontWeight: "bold", color: "black"}}>3</Text>
                  </View>
                </View>
              </View>
            </View>
          <WaterItem grayBg={true} label="Curenta" value="245 " />
          <WaterItem label="Precedenta" value="233 " />
          <WaterItem grayBg={true} label="Tarif" tarif={true} value="17" />


          

          <View style={{padding: 15, paddingTop: 20}}>
            <CustomButton label="Istoria tranzactiilor" />
          </View>
            
        </View>
        
      </ScrollView>
		);
}

export default WaterScreen;