import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import ProfileItem from '../components/ProfileItem';


const ProfileScreen = () => {



  return (
      <View style={{padding: 20, backgroundColor: "#fff"}}>
        
        <ProfileItem grayBg={true} icon="person" label="Nume Prenume:" value="Plesca Virgiliu" />
        <ProfileItem icon="alternate-email" label="Email:" value="email.test@gmail.com"/>
        <ProfileItem grayBg={true} icon="tag" label="Role:" value="Admin"/>
        <ProfileItem icon="location-on" label="Adresa/Sector:" value="3"/>
        
      </View>
  )
}

export default ProfileScreen
