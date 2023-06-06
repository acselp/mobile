import React, { StyleSheet, View, ScrollView, Text, TouchableOpacity } from "react-native";
import {
  Avatar,
  Box, Heading, HStack, Row, Spacer, VStack,
} from "native-base";
import axios from "axios";
import { BASE_URL } from "../config/config";
import { useEffect, useState } from "react";
import LoadingOverlay from "../components/LoadingOverlay";
import { FlatList } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import _ from "lodash";


const ListCounterScreen = ({navigation}) => {

  const [barCode, setBarcode] = useState("");
  const [value, setValue] = useState(0);
  const [errorBarcode, setErrorBarcode] = useState(false);
  const [errorValue, setErrorValue] = useState(false);
  const [success, setSuccess] = useState(false);
  const [camera, setCamera] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [counterData, setCounterData] = useState([]);

  const handleCamera = () => {

  }

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${BASE_URL}/counter`,
      {
        headers: {"Authorization" : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwiZXhwIjoxNjg0NzgxNTY3LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjUwMDAiLCJhdWQiOiJodHRwOi8vbG9jYWxob3N0OjUwMDAifQ.Jaa3GzApvrvlsdVxsrhFl_Wx2I5w5yP4UlWeyk_cpyE`}
      })
      .then((res) => {
        setCounterData(res.data);
        setIsLoading(false);
      })
  }, [])

  const [ columns, setColumns ] = useState([
    "Id",
    "Barcode",
    "User Fullname",
    "Value"
  ])
  const [ direction, setDirection ] = useState(null)
  const [ selectedColumn, setSelectedColumn ] = useState(null)

  const tableHeader = () => (
    <View style={styles.tableHeader}>
      {
        columns.map((column, index) => {
          {
            return (
              <TouchableOpacity
                key={index}
                style={styles.columnHeader}
                onPress={()=> sortTable(column)}>
                <Text style={styles.columnHeaderTxt}>{column + " "}
                  { selectedColumn === column && <MaterialCommunityIcons
                    name={direction === "desc" ? "arrow-down-drop-circle" : "arrow-up-drop-circle"}
                  />
                  }
                </Text>
              </TouchableOpacity>
            )
          }
        })
      }
    </View>
  )

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop:80
    },
    tableHeader: {
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      backgroundColor: "#37C2D0",
      borderTopEndRadius: 10,
      borderTopStartRadius: 10,
      height: 50
    },
    tableRow: {
      flexDirection: "row",
      height: 40,
      alignItems:"center",
    },
    columnHeader: {
      width: "20%",
      justifyContent: "center",
      alignItems:"center"
    },
    columnHeaderTxt: {
      color: "white",
      fontWeight: "bold",
    },
    columnRowTxt: {
      width:"20%",
      textAlign:"center",
    }
  });

  const sortTable = (column) => {
    const newDirection = direction === "desc" ? "asc" : "desc"
    const sortedData = _.orderBy(counterData, [column],[newDirection])
    setSelectedColumn(column)
    setDirection(newDirection)
    setCounterData(sortedData)
  }

  return (
    <>
      {/*lLoading-------------------------*/}
      {isLoading ? <LoadingOverlay/> : ""}
      {/*lLoading-------------------------*/}

      <Box padding={"10px"}>
        <Heading>
          Vizualizare contor
        </Heading>

        <FlatList
          data={counterData}
          style={{width:"100%"}}
          keyExtractor={(item, index) => index+""}
          ListHeaderComponent={tableHeader}
          stickyHeaderIndices={[0]}
          renderItem={({item, index})=> {
            return (
              <Box display={"flex"} justifyContent={"space-around"} style={{...styles.tableRow, backgroundColor: index % 2 === 1 ? "#F0FBFC" : "white"}}>
                <Text style={styles.columnRowTxt}>{item.id}</Text>
                <Text style={styles.columnRowTxt}>{item.barcode}</Text>
                <Text style={styles.columnRowTxt}>{item.location.user.contact.firstName + " " + item.location.user.contact.lastName}</Text>
                <Text style={styles.columnRowTxt}>{item.value}</Text>
              </Box>
            )
          }}
        />

      </Box>
    </>

		);
}

export default ListCounterScreen;
