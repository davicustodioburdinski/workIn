import React, { useEffect, useState } from 'react'
import { Recipe } from '@/Services/Recipes/GetRecipe'
import DeleteRecipe, {
  PropsDeleteRecipesRequest,
} from '@/Services/Recipes/DeleteRecipe'
import BackgroundContainer from '@/Components/BackgroundContainer'
import { ActivityIndicator, View } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import useTheme from '@/Hooks/useTheme'
import Label from '@/Components/Label'

const RecipeDeleteScreen = ({ route }) => {
  const { Layout, Gutters, Colors } = useTheme()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [recipe, setRecipe] = useState<PropsDeleteRecipesRequest>()
  const [recipeId] = useState<string>(route.params?.recipeId)
  const isFocused = useIsFocused()
  useEffect(() => {
    setIsLoading(true)
    function deleteRecipe() {
      DeleteRecipe(recipeId)
        .then(resposta => {
          setRecipe(resposta)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
    deleteRecipe()
  }, [isFocused, recipeId])

  return (
    <BackgroundContainer>
      {isLoading && <ActivityIndicator color={Colors.primary} size={'large'} />}
      {!isLoading && (
        <View
          style={[
            Layout.fill,
            {
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: Colors.white,
              borderRadius: 5,
            },
          ]}
        >
          <View
            style={[
              Gutters.regularVPadding,
              Gutters.largeHPadding,
              Gutters.largeVPadding,
            ]}
          >
            <Label
              text={'Deletar receita'}
              type={'text'}
              alignment={'center'}
              size={'small'}
              color={Colors.white}
            />
          </View>
        </View>
      )}
    </BackgroundContainer>
  )
}

export default RecipeDeleteScreen
