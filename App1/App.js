import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderScreen from './src/screens/OrderScreen';
import WaitingOrdersScreen from './src/screens/WaitingOrdersScreen';
import HomeScreen from './src/screens/HomeScreen';
import OrdersScreen from './src/screens/OrdersScreen';
import Styles from './Styles'
import WaitingOrderScreen from './src/screens/WaitingOrderScreen';

const Stack = createNativeStackNavigator();

function Navigation(){
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={HomeScreen}>
        <Stack.Screen name='Home' component={HomeScreen} options = {{headerStyle: Styles.header, title: 'Home'}}/>
          <Stack.Screen name='Orders' component={OrdersScreen} options = {{headerStyle: Styles.header, title: 'All orders'}}/>
          <Stack.Screen name = "Waiting orders" component={WaitingOrdersScreen} options = {{headerStyle: Styles.header, title: 'Waiting orders'}}/>
          <Stack.Screen name = "Waiting order" component={WaitingOrderScreen} options = {{headerStyle: Styles.header, title: 'Order details'}}/>   
          <Stack.Screen name = "Order" component={OrderScreen} options = {{headerStyle: Styles.header, title: 'Order details'}}/>   
        </Stack.Navigator>
    </NavigationContainer>
    
  );
}

function App(){
  return(
    <Navigation/>
    
  )
}

export default App;