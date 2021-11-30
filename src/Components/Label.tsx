import React from 'react'
import { Text } from 'react-native'
import { useTheme } from '@/Hooks'
import { TextInputMaskTypeProp } from 'react-native-masked-text'

interface Props {
  text: string | null
  size?: 'small' | 'regular' | 'large' | undefined
  type?: 'text' | 'title' | undefined
  alignment?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined
  color?: string | undefined
  bold?: true | false | null
  maskType?: TextInputMaskTypeProp
  masked?: boolean
}

const Label: React.FC<Props> = ({
  text,
  size,
  type,
  alignment,
  color,
  bold,
}: Props) => {
  const { Fonts } = useTheme()
  return (
    <>
      {type === 'text' && (
        <>
          {size === 'small' && (
            <Text
              style={[
                Fonts.textSmall,
                {
                  textAlign: alignment,
                  color: color,
                  fontWeight: bold ? 'bold' : 'normal',
                },
              ]}
            >
              {text}
            </Text>
          )}
          {size === 'regular' && (
            <Text
              style={[
                Fonts.textRegular,
                {
                  textAlign: alignment,
                  color: color,
                  fontWeight: bold ? 'bold' : 'normal',
                },
              ]}
            >
              {text}
            </Text>
          )}
          {size === 'large' && (
            <Text
              style={[
                Fonts.textLarge,
                {
                  textAlign: alignment,
                  color: color,
                  fontWeight: bold ? 'bold' : 'normal',
                },
              ]}
            >
              {text}
            </Text>
          )}
        </>
      )}
      {type === 'title' && (
        <>
          {size === 'small' && (
            <Text
              style={[Fonts.titleSmall, { textAlign: alignment, color: color }]}
            >
              {text}
            </Text>
          )}
          {size === 'regular' && (
            <Text
              style={[
                Fonts.titleRegular,
                { textAlign: alignment, color: color },
              ]}
            >
              {text}
            </Text>
          )}
          {size === 'large' && (
            <Text
              style={[Fonts.titleLarge, { textAlign: alignment, color: color }]}
            >
              {text}
            </Text>
          )}
        </>
      )}
    </>
  )
}

Label.defaultProps = {
  size: 'small',
  alignment: 'left',
  type: 'text',
  color: '#1c1b1b',
  bold: false,
}
export default Label
