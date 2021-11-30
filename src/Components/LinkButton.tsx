import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useTheme } from '@/Theme'

interface Props {
  text: string
  onPress(): void
}

const LinkButton: React.FC<Props> = ({ text, onPress }) => {
  const { Common, Fonts } = useTheme()

  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[Common.linkButtonContainer]}
    >
      <Text
        style={[
          Fonts.textRegular,
          Common.linkButtonText,
          { textDecorationLine: 'underline' },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default LinkButton
