import React from 'react'
import { LogonContainer } from '@/Containers'
import { createStackNavigator } from '@react-navigation/stack'
import RecipesHomeScreen from '@/Containers/Receipts/Home'

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
      <Tab.Screen
        name="RecipesHomeScreen"
        component={RecipesHomeScreen}
        options={{
          headerShown: false,
          title: 'WorkIn | Home',
          headerStyle: { backgroundColor: '#1c1b1b' },
          headerTintColor: 'white',
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
