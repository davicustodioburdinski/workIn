import React from 'react'
import useTheme from '@/Hooks/useTheme'
import { TouchableOpacity, View } from 'react-native'
import Label from './Label'

interface Props {
  id: string
  name: string
  description: string
  benefits: string
}

const RecipeListCard = ({
  id,
  name,
  description,
  benefits,
  onPress,
}: Props) => {
  const { Layout, Fonts, Gutters, Colors, Common } = useTheme()

  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[
        Gutters.smallVMargin,
        Gutters.smallHMargin,
        Gutters.smallHPadding,
        Gutters.smallVPadding,
        Common.card,
        Layout.row,
        Layout.justifyContentBetween,
        { backgroundColor: 'transparent' },
      ]}
    >
      <View style={[{ backgroundColor: 'transparent' }]}>
        <Label text={name} type={'text'} bold={true} size={'regular'} />
        <Label
          text={description}
          type={'text'}
          size={'small'}
          color={'lightgray'}
        />
        <Label
          text={benefits}
          type={'text'}
          size={'small'}
          color={'lightgray'}
        />
      </View>
    </TouchableOpacity>
  )
}
RecipeListCard.defaultProps = {
  id: null,
  name: null,
  description: null,
  benefits: null,
}

export default RecipeListCard
