import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import RecipesHomeScreen from '@/Containers/Receipts/Home'

const Tab = createStackNavigator()

const RecipesNavigator = () => {
  return (
    <Tab.Navigator>
      {/*Telas de Receitas*/}
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

export default RecipesNavigator
