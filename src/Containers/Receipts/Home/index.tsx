import React, { useEffect, useState } from 'react'
import useTheme from '@/Hooks/useTheme'
import GetRecipe, { Recipe } from '@/Services/Recipes/GetRecipe'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { ScrollView, View } from 'react-native'
import Button from '@/Components/Button'
import { navigate } from '@/Navigators/utils'
import BackgroundContainer from '@/Components/BackgroundContainer'
import RecipeListCard from '@/Components/RecipeListCard'

const RecipesHomeScreen = ({ route }) => {
  const { Common, Colors, Gutters, Layout } = useTheme()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const navigation = useNavigation()
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const isFocused = useIsFocused()
  useEffect(() => {
    setIsLoading(true)
    GetRecipe()
      .then(resp => {
        if (resp != null) {
          setRecipes(resp)
        } else {
          toast.show('Nenhuma receita encontrada', {
            type: 'warning',
          })
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [isFocused])

  function AddRecipe() {
    navigate('RecipeCreateScreen', {})
  }

  return (
    <View
      style={[
        Gutters.largeVMargin,
        {
          backgroundColor: 'black',
        },
      ]}
    >
      <BackgroundContainer>
        <Button
          text={'Adicionar receita'}
          size={'regular'}
          type={'text'}
          inverted={true}
          isLoading={isLoading}
          onPress={() => AddRecipe()}
        />
        <ScrollView
          style={[
            Gutters.largeVMargin,
            {
              backgroundColor: 'black',
            },
          ]}
        >
          {recipes.map(value => {
            return (
              <RecipeListCard
                onPress={() => {
                  navigate('RecipeUpdateScreen', {
                    productId: value?.id,
                  })
                }}
                name={value.name}
                description={value.description}
                benefits={value.benefits}
                key={value.id}
                id={value.id}
              />
            )
          })}
        </ScrollView>
      </BackgroundContainer>
    </View>
  )
}

export default RecipesHomeScreen
