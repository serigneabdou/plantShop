import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen'
import DetailScreen from '../screens/DetailScreen'
import COLORS from '../constants/Colors'

const Stack = createStackNavigator()

const AppNavigation = () => {
  return (
   <NavigationContainer>
   <StatusBar barStyle="dark-content" backgroundColor={COLORS.light} />
    <Stack.Navigator  screenOptions={{header: () => null}}>
        <Stack.Screen name='home' component={HomeScreen}/>
        <Stack.Screen name='Detail' component={DetailScreen}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigation