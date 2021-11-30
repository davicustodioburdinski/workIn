import React, { useEffect, useState } from 'react'
import useTheme from '@/Hooks/useTheme'
import GetRecipe, { Recipes } from '@/Services/Recipes/GetRecipe'
import { useIsFocused } from '@react-navigation/native'
import { ScrollView, View } from 'react-native'
import Button from '@/Components/Button'

const RecipesHomeScreen = ({ route }) => {
  const { Common, Colors, Gutters, Layout } = useTheme()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [recipe, setRecipe] = useState<Recipes>()
  const isFocused = useIsFocused()
  useEffect(() => {
    setIsLoading(true)
    GetRecipe()
      .then(resp => {
        if (resp != null) {
          setRecipe(resp)
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

  return (
    <ScrollView>
      <View
        style={[
          Layout.fill,
          Gutters.regularVPadding,
          Gutters.largeHPadding,
          Gutters.largeVPadding,
        ]}
      >
        <View
          style={[
            Layout.fullWidth,
            Layout.justifyContentCenter,
            Layout.columnHCenter,
            Layout.smallVMargin,
          ]}
        >
          <Button
            text={'Criar nova receita'}
            type={'text'}
            inverted={true}
            color={Colors.black}
            // onPress={() => goToRecipesList()}
          />
        </View>
      </View>
    </ScrollView>
  )
}

export default RecipetsHomeScreen
