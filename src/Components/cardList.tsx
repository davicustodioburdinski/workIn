import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import useTheme from '@/Hooks/useTheme'
import Label from './Label'

interface Props {
  id: string
  name: string
  description: string
  benefits: string
  onPress(): void
}

const ListCard = ({ id, name, description, benefits, onPress }: Props) => {
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

ListCard.defaultProps = {
  id: null,
  description: null,
  name: null,
  benefits: null,
}

export default ListCard
