import React from 'react'
import { ActivityIndicator, TouchableOpacity } from 'react-native'
import { useTheme } from '@/Hooks'
import Label from '@/Components/Label'

interface Props {
  text: string | null
  size?: 'small' | 'regular' | 'large' | undefined
  type?: 'text' | 'title' | undefined
  alignment?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined
  color?: string | undefined
  bold?: true | false | null
  inverted?: true | false | null
  isLoading?: true | false | null
  onPress(): void
}

const Button: React.FC<Props> = ({
  text,
  size,
  type,
  alignment,
  color,
  bold,
  inverted,
  isLoading,
  onPress,
}) => {
  const { Common, Fonts } = useTheme()

  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[
        inverted ? Common.buttonContainerInverted : Common.buttonContainer,
      ]}
    >
      {isLoading ? (
        <ActivityIndicator color={color} size={'large'} />
      ) : (
        <Label
          text={text}
          size={size}
          bold={bold}
          type={type}
          color={color}
          alignment={alignment}
        />
      )}
    </TouchableOpacity>
  )
}
Button.defaultProps = {
  size: 'small',
  alignment: 'center',
  type: 'title',
  color: 'white',
  bold: true,
  inverted: false,
  isLoading: false,
}
export default Button
