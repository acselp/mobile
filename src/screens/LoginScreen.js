import React, { useState } from 'react';

import {
  SafeAreaView,
  View,
  Text
} from 'react-native';
import { useContext } from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';
import { AuthContext } from '../context/AuthContext';

const LoginScreen = ({navigation}) => {

  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');

  const {login} = useContext(AuthContext);

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500', 
            color: '#1f3f70',
            marginBottom: 30,
            textAlign: "center"
          }}>
          Login
        </Text>

        <InputField
          label={'Email ID'}
          value={email}
          onChangeText={text => setEmail(text)}
          icon={
            <MaterialIcons
            name="alternate-email"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          keyboardType="email-address"
        />

        <InputField
          onChangeText={text => setPassword(text)}
          label={'Password'}
          icon={
            <Ionicons
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          inputType="password"
          fieldButtonLabel={"Forgot?"}
          fieldButtonFunction={() => {}}
        />
        
        <CustomButton label={"Login"} onPress={() => {login(email, password)}} />

      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
