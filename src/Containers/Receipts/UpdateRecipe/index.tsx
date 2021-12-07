import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, View } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import RecipeForm from '@/Components/RecipeForm'
import GetRecipe, { Recipe } from '@/Services/Recipes/GetRecipe'
import BackgroundContainer from '@/Components/BackgroundContainer'
import Label from '@/Components/Label'
import useTheme from '@/Hooks/useTheme'

const CommerceProductUpdateScreen = ({ route }) => {
  const { Layout, Gutters, Colors } = useTheme()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [recipe, setRecipe] = useState<Recipe>()
  const [recipeId] = useState<string>(route.params?.recipeId)
  const isFocused = useIsFocused()
  useEffect(() => {
    //informa q ta carregando
    setIsLoading(true)
    //cria a funcao pra obter o produto
    function obterProduto() {
      //obtem produto da api
      GetRecipe(recipeId)
        .then(resposta => {
          //trata resposta daa api
          setRecipe(resposta)
        })
        .finally(() => {
          setIsLoading(false)
        }) //retira loading
    }
    obterProduto()
  }, [isFocused, recipeId])

  return (
    <BackgroundContainer>
      {isLoading && <ActivityIndicator color={Colors.primary} size={'large'} />}
      {!isLoading && (
        <ScrollView
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
              text={'Editar receita'}
              type={'text'}
              alignment={'center'}
              size={'small'}
              color={Colors.white}
            />
          </View>
          <RecipeForm
            name={recipe?.name}
            description={recipe?.description}
            benefits={recipe?.benefits}
            id={recipe?.id}
            key={recipe?.id}
          />
        </ScrollView>
      )}
    </BackgroundContainer>
  )
}

export default CommerceProductUpdateScreen
