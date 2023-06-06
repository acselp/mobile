import React, { ScrollView, Text, TouchableOpacity } from "react-native";
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
import { useContext, useEffect, useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import LoadingOverlay from "../components/LoadingOverlay";
import { AuthContext } from "../context/AuthContext";

const AddCounterScreen = ({navigation}) => {

  const [barCode, setBarcode] = useState("");
  const [email, setEmail] = useState("");
  const [errorBarcode, setErrorBarcode] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [success, setSuccess] = useState(false);
  const [camera, setCamera] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [locationId, setLocationId] = useState(null);
  const [counter, setCounters] = useState([]);

  let authContext = useContext(AuthContext);

  const handleCamera = () => {

  }

  const handleSubmitBtn = async () => {
    setErrorEmail(false);
    setSuccess(false);
    setErrorBarcode(false);
    setIsLoading(false);

    console.log(authContext.userToken);

    axios.get(`${BASE_URL}/counter`,
      {
        headers: {"Authorization" : authContext.userToken}
      })
      .then((res) => {
        console.log(res);
        setCounters(res)
        setIsLoading(false);
      })
      .catch(e => {
        console.log(e.response.data);
        setIsLoading(false);
      })

  }




  return (
    <>
      {/*lLoading-------------------------*/}
      {isLoading ? <LoadingOverlay/> : ""}
      {/*lLoading-------------------------*/}

      <ScrollView padding={20} style={{backgroundColor: "#fff"}}>

			  <Text style={{color: "black", fontSize: 25, fontWeight: "bold", paddingBottom: 5}}>
          Adaugă contor
        </Text>

        <Box alignItems="center">
          <Box w="100%">
            <FormControl isRequired>
              <Stack>
                <FormControl.Label>Barcode</FormControl.Label>
                  <Box display={"flex"} flexDirection={"row"}>
                    <Input flex={1} keyboardType={"numeric"} width={"auto"} onChangeText={val => {setBarcode(val)}} type="text" placeholder="Barcode" />
                    <IconButton onPress={handleCamera} icon={<Ionicons name="barcode-outline" size={22} color={"#000"} /> } />
                  </Box>

              </Stack>
            </FormControl>

            <FormControl isRequired isInvalid={errorEmail}>
              <Stack>
                <FormControl.Label>Consumator</FormControl.Label>

                <Input onChangeText={val => {setEmail(val)}} type="email" placeholder="Email" />

                <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
                  Nu a fost gasit un utilizator cu asa email
                </FormControl.ErrorMessage>
              </Stack>
            </FormControl>
          </Box>
        </Box>

        <Box width={"full"} marginTop={"20px"}>
          <Button width={"full"} onPress={handleSubmitBtn}>Adauga</Button>
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
    </>

		);
}

export default AddCounterScreen;
