import BackgroundContainer from '@/Components/BackgroundContainer'
import { useTheme } from '@/Hooks'
import React, { useState } from 'react'
import { ActivityIndicator, ScrollView, View } from 'react-native'
import Label from '@/Components/Label'
import RecipeForm from "@/Components/RecipeForm";

const RecipeCreateScreen = () => {
  const { Gutters, Colors, Layout } = useTheme()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [recipe, setRecipe] = useState<PropsPostProductsRequest>()

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
              text={'Adicionar receita'}
              type={'text'}
              alignment={'center'}
              size={'small'}
              color={Colors.white}
            />
          </View>
          <ScrollView>
            <RecipeForm
              name={recipe?.name}
              description={recipe?.description}
              benefits={recipe?.benefits}
            />
          </ScrollView>
        </View>
      )}
    </BackgroundContainer>
  )
}
export default RecipeCreateScreen
