import React from 'react';
import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View, 
} from 'react-native';
import app from '../../firebaseConfig';
import CustomButton from '../components/CustomButton';
import 'firebase/compat/database'
import CustomLine from '../components/CustomLine';
import Dialog from 'react-native-dialog';



function OrderScreen({route,  navigation: {navigate}}) {
  const { id, nr, items, status, customer_name } = route.params;  
  const [visibility, setVisibility] = useState(false)
  const [location, setLocation] = useState('00-00')
  const reference = app.database()  


  const Confirm = () => {

    return(
      <Dialog.Container visible ={visibility}>
      <Dialog.Title>Confirm</Dialog.Title>
      <Dialog.Description>
      Enter order location
      </Dialog.Description>
      <Dialog.Input
      onChangeText={setLocation}
      value ={location}
      />
      <Dialog.Button label="Cancel" onPress={()=>{setVisibility(false)}}/>
      <Dialog.Button label="Ok" onPress={() =>{
        
          reference.ref('orders/'+ id).update({
            status: "Ready for delivery",
            collected_at: getCurrentTime(),
            location: location,
          })
          .then(() => {
            navigate('Orders')
          })
        
        
      }} />
    </Dialog.Container>
  );     
    
}
const ReadyButton = () => {
  if(status == "New"){
    return(<CustomButton title="Ready for delivery" event = {() => setVisibility(true)}/>)}
}
  const getCurrentTime = () => {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getUTCMonth();
    let date = today.getUTCDate();
    let hours = (today.getHours() < 10 ? '0' : '') + today.getHours();
    let minutes = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
    let seconds = (today.getSeconds() < 10 ? '0' : '') + today.getSeconds();
    return year + "-" + month + "-" + date + " " + hours + ':' + minutes + ':' + seconds;
  }

  return (
    <SafeAreaView style={styles.container}>
      
      <View testID='details'>
        <CustomLine label="Order nr:  " text = {nr}/>
        <CustomLine label="Items:  " text = {items}/>
        <CustomLine label="Customer name:  " text ={customer_name}/>
      </View>
      <ReadyButton/>
      <Confirm/>
    </SafeAreaView>
  );
}
export default OrderScreen

const styles  = StyleSheet.create(
  {
    container: {
      flex: 1,
      paddingBottom: 40,
      paddingTop: 30,
      backgroundColor: 'aliceblue',
      alignItems: 'flex-start'
    },
      
  }
)