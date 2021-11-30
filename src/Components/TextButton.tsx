import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { useTheme } from "@/Theme";

interface Props {
  text: string
  onPress(): void
}

const TextButton: React.FC<Props> = ({ text, onPress }) => {
  const { Common, Fonts } = useTheme()

  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[Common.textButtonContainer]}
    >
      <Text style={[Fonts.textRegular,{textDecorationLine: 'underline'}]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default TextButton
