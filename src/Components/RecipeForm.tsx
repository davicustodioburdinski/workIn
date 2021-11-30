import React, { useEffect, useState } from 'react'
import { useTheme } from '@/Theme'
import { useIsFocused } from '@react-navigation/native'
import PostRecipe from '@/Services/Recipes/PostRecipe'
import { navigate } from '@/Navigators/utils'
import { Text, View } from "react-native";
import Input from '@/Components/Input'

interface Props {
  id?: string | undefined
  name?: string | undefined
  description?: string | undefined
  benefits: string | undefined
  recipeUrl: string | undefined
}

const RecipeForm = ({ id, name, description, benefits, recipeUrl }: Props) => {
  const { Colors, Gutters, Layout } = useTheme()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const isFocused = useIsFocused()
  const [recipe, setRecipe] = useState<Props>({
    id: id,
    name: name,
    description: description,
    benefits: benefits,
    recipeUrl: recipeUrl,
  })

  async function createNewRecipe() {
    setIsLoading(true)
    await PostRecipe(recipe)
      .then(resp => {
        if (resp) {
          toast?.show('Receita criada com sucesso.', {
            type: 'success',
            placement: 'top',
            textStyle: { alignSelf: 'center' },
          })
          // navigate('RecipesListScreen', {})
        } else {
          setIsLoading(false)
          toast?.show('Falha ao criar')
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <View
      style={[Gutters.regularHPadding, Gutters.regularVPadding, Layout.center]}
    >
      <Input
        error={''}
        name={'Nome da Receita'}
        placeholder={'Ex: torta de banana'}
        value={recipe.name}
        onChangeText={text => setRecipe({ ...recipe, name: text })}
      />
      <Input
        error={''}
        name={'Descrição da receita'}
        placeholder={'Ex: torta de banana, tantos ingredientes, etc.'}
        value={recipe.description}
        onChangeText={text => setRecipe({ ...recipe, description: text })}
      />
      <Input
        error={''}
        name={'Benefícios da receita'}
        placeholder={'Ex: torta de banana, tantos ingredientes, etc.'}
        value={recipe.benefits}
        onChangeText={text => setRecipe({ ...recipe, benefits: text })}
      />
    </View>
    //TODO: IMPLEMENTAR BOTÃO DE SALVAR A RECEITA. OU COMPONENTIZAR.
  )
}
export default RecipeForm
