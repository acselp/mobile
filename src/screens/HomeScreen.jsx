import React, { StyleSheet, View, ScrollView, Text } from 'react-native';
import {
  Alert,
  Box,
  Button,
  Center,
  FormControl,
  IconButton,
  Input,
  Stack,
  VStack,
  WarningOutlineIcon,
} from "native-base";
import axios from "axios";
import { BASE_URL } from "../config/config";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "react-native-vector-icons/Ionicons";
import LoadingOverlay from "../components/LoadingOverlay";
import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { Camera } from 'react-native-vision-camera';
import { useCameraDevices } from 'react-native-vision-camera';
import { BarcodeFormat } from 'vision-camera-code-scanner';
import { useScanBarcodes } from 'vision-camera-code-scanner';
import RNHoleView from 'react-native-hole-view';

export default HomeScreen = ({navigation}) => {

  const [value, setValue] = useState(0);
  const [errorBarcode, setErrorBarcode] = useState(false);
  const [errorValue, setErrorValue] = useState(false);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [isScanned, setIsScanned] = useState(false);
  const [barcode, setBarcode] = useState('');
  const [frameProcessor, barcodes] = useScanBarcodes([BarcodeFormat.ALL_FORMATS], { checkInverted: true });

  

  const handleCamera = () => {
    setIsCameraActive(!isCameraActive);
  }


useEffect(() => {
  toggleActiveState();
  return () => {
    if (barcodes && barcodes.length > 0) {
      setBarcode(barcodes[0].displayValue);
      setIsScanned(true);
      setIsCameraActive(false);
    }
  };
}, [barcodes]);

const toggleActiveState = async () => {
  if (barcodes && barcodes.length > 0 && isScanned === false) {
    setIsScanned(true);
    // setBarcode('');
    barcodes.forEach(async (scannedBarcode) => {
      if (scannedBarcode.rawValue !== '') {
        setBarcode(scannedBarcode.rawValue);
        Alert.alert(barcode);
      }
    });
  }
};

  const devices = useCameraDevices('wide-angle-camera')
  const device = devices.back


  const handleCounterBtn = async () => {
    setErrorValue(false);
    setSuccess(false);
    setErrorBarcode(false);
    setIsLoading(true);

    let userToken;
    await AsyncStorage.getItem('userToken')
      .then((res) => {userToken = res})
    console.log(userToken);

    axios.put(`${BASE_URL}/counter/update-value`, {
      barCode: barCode,
      value: +value
    },
      {
        headers: {"Authorization" : `Bearer ` + userToken}
  })
      .then(() => {
        setSuccess(true);
        setIsLoading(false);
      })
      .catch(e => {
        console.log(e.response.data);
        if(e.response.data.code === "counter_not_found") {
          setErrorBarcode(true);
          setIsLoading(false);
        }

        if(e.response.data.code === "invalid_counter_value") {
          setErrorValue(true);
          setIsLoading(false);
        }
      })
  }

  const requestCameraPermission = async () => {
    const status = await Camera.requestCameraPermission();
    setHasPermission(status === 'authorized');
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);
  




  if (device == null) return <ActivityIndicator color={"black"} />;


  return (
    <>
      {/*lLoading-------------------------*/}
      {isLoading ? <LoadingOverlay/> : ""}
      {/*lLoading-------------------------*/}
      {isCameraActive ? <><Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        frameProcessor={frameProcessor}
        frameProcessorFps={1}
      />
  
      </>
      :
     
      <ScrollView padding={20} style={{backgroundColor: "#fff"}}>

<Text style={{color: "black", fontSize: 25, fontWeight: "bold", paddingBottom: 5}}>
  Scanare contor
</Text>

<Box alignItems="center">
  <Box w="100%">
    <FormControl isRequired isInvalid={errorBarcode}>
      <Stack>
        <FormControl.Label>Barcode</FormControl.Label>
          <Box display={"flex"} flexDirection={"row"}>
            <Input flex={1} keyboardType={"numeric"} width={"auto"} value={barcode} onChangeText={val => {setBarcode(val)}} type="text" placeholder="barcode" />
            <IconButton onPress={handleCamera} icon={<Ionicons name="barcode-outline" size={22} color={"#000"} /> } />
          </Box>
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Nu a fost gasit un contor cu asa BarCode
        </FormControl.ErrorMessage>
      </Stack>
    </FormControl>
    <FormControl isRequired isInvalid={errorValue}>
      <Stack>
        <FormControl.Label>Value</FormControl.Label>
        <Input keyboardType={"numeric"} onChangeText={val => {setValue(val)}} type="text" placeholder="value" />
        <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
          Ati introdus o valoare mai mica decat cea de pe contor
        </FormControl.ErrorMessage>
      </Stack>
    </FormControl>
  </Box>
</Box>

<Box width={"full"} marginTop={"20px"}>
  <Button width={"full"} onPress={handleCounterBtn}>Salvează</Button>
</Box>

{success ?
<Center mt={50}>
  <Alert w="100%" status="success">
    <VStack space={1} flexShrink={1} w="100%" alignItems="center">
      <Alert.Icon size="md" />
      <Text fontSize="md" fontWeight="medium" _dark={{
        color: "coolGray.800"
      }}>
        Datele au fost salvate cu succes
      </Text>
    </VStack>
  </Alert>
</Center>
: ""}

</ScrollView>
}
    </>

		);
}

