import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { LogonContainer } from '@/Containers'
import { createStackNavigator } from '@react-navigation/stack'

const Tab = createStackNavigator()

// @refresh reset
const MainNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={LogonContainer}
        options={{
          headerShown: false,
          title: 'Login',
          headerStyle: { backgroundColor: '#1c1b1b' },
          headerTintColor: 'white',
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
