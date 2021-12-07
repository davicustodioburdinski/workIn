import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { useTheme } from '@/Theme'
import { Label } from '@/Components/index'
import { navigate } from '@/Navigators/Root'
import GetMyPlan from '@/Services/Driver/Plans/GetMyPlan'

interface Props {
  id: string | null
  name: string | null
  description: string | null
  benefits: string | null
}

const RecipeCard = ({ id, name, description, benefits }: Props) => {
  const { Layout, Images, Gutters, Colors } = useTheme()

  function openProductDetails() {
    navigate('RecipeDetailsScreen', { recipeId: id })
  }

  return (
    <TouchableOpacity
      onPress={event => openProductDetails()}
      style={[
        Layout.row,
        Gutters.largeHPadding,
        Gutters.largeTMargin,
        Gutters.smallHMargin,
        {
          borderBottomWidth: 2,
          borderColor: Colors.primary,
          borderRadius: 20,
        },
      ]}
    >
      <View
        style={[
          Layout.fullWidth,
          // Layout.column,
          Gutters.largeHPadding,
          Layout.alignItemsStart,
        ]}
      >
        <Label
          text={name}
          size={'regular'}
          type={'text'}
          alignment={'left'}
          bold={true}
        />
        {description !== null && (
          <Label
            text={description || ''}
            size={'small'}
            type={'text'}
            alignment={'left'}
            color={'grey'}
          />
        )}
        {benefits !== null && (
          <Label
            text={benefits || ''}
            size={'small'}
            type={'text'}
            alignment={'left'}
            color={'grey'}
          />
        )}
      </View>
    </TouchableOpacity>
  )
}

RecipeCard.defaultProps = {
  id: null,
  name: null,
  description: null,
  benefits: null,
}

export default RecipeCard
