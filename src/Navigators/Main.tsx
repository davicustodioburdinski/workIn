import React from 'react'
import { LogonContainer } from '@/Containers'
import { createStackNavigator } from '@react-navigation/stack'
import RecipesHomeScreen from '@/Containers/Receipts/Home'
import RecipeCreateScreen from "@/Containers/Receipts/CreateRecipe";
import UpdateRecipeScreen from "@/Containers/Receipts/UpdateRecipe";
import RecipeDeleteScreen from "@/Containers/Receipts/DeleteRecipe";

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
      <Tab.Screen
        name="RecipeCreateScreen"
        component={RecipeCreateScreen}
        options={{
          headerShown: false,
          title: 'WorkIn | Criar Receita',
          headerStyle: { backgroundColor: '#1c1b1b' },
          headerTintColor: 'white',
        }}
      />
      <Tab.Screen
        name="UpdateRecipeScreen"
        component={UpdateRecipeScreen}
        options={{
          headerShown: false,
          title: 'WorkIn | Atualizar Receita',
          headerStyle: { backgroundColor: '#1c1b1b' },
          headerTintColor: 'white',
        }}
      />
      <Tab.Screen
        name="RecipeDeleteScreen"
        component={RecipeDeleteScreen}
        options={{
          headerShown: false,
          title: 'WorkIn | Deletar Receita',
          headerStyle: { backgroundColor: '#1c1b1b' },
          headerTintColor: 'white',
        }}
      />
    </Tab.Navigator>
  )
}

export default MainNavigator
