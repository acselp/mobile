import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import ProfileItem from '../components/ProfileItem';


const ProfileScreen = () => {



  return (
      <View style={{padding: 20, backgroundColor: "#fff"}}>
        
        <ProfileItem grayBg={true} icon="person" label="Nume Prenume:" value="Moraru Vasile" />
        <ProfileItem icon="alternate-email" label="Email:" value="email.test@gmail.com"/>
        <ProfileItem grayBg={true} icon="tag" label="Nr. cont:" value="57"/>
        <ProfileItem icon="location-on" label="Adresa/Sector:" value="3"/>
        <ProfileItem grayBg={true} icon="qr-code" label="Nr. Contor:" value="45782954"/>
        <ProfileItem icon="groups" label="Nr. persoane:" value="6"/>
        
      </View>
  )
}

export default ProfileScreen
