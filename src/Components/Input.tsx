import React, { useCallback, useState } from 'react'
import {
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native'
import { useTheme } from '@/Hooks'
import { TextInputMask, TextInputMaskTypeProp } from 'react-native-masked-text'

interface Props extends TextInputProps {
  name: string
  placeholder: string
  isPassword?: boolean
  isMultiline?: boolean
  error: string
  maskType?: TextInputMaskTypeProp
  masked?: boolean
}

interface InputRef {
  focus(): void
}

const Input: React.ForwardRefRenderFunction<InputRef, Props> = ({
  isPassword,
  name,
  placeholder,
  error,
  isMultiline,
  maskType,
  masked,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false)
  const [showPassword, setShowPassword] = useState(true)
  const { Fonts, Common, Colors, Layout } = useTheme()

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  const togglePasswordMask = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true)
  }

  return (
    <View style={[{ width: '90%' }]}>
      <Text
        style={[
          Layout.fullWidth,
          Fonts.textSmall,
          {
            marginBottom: 10,
            color: '#777679',
          },
          isFocused && { color: Colors.white },
        ]}
      >
        {name}
      </Text>
      <View
        style={[
          Layout.fullWidth,
          Common.inputContainer,
          error ? { borderColor: Colors.error } : null,
          isFocused && { borderColor: Colors.white },
          isMultiline && { height: 150 },
          { marginBottom: 14 },
        ]}
      >
        {isPassword ? (
          <>
            <TextInput
              secureTextEntry={showPassword}
              placeholder={placeholder}
              placeholderTextColor="#C4C4C4"
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              {...rest}
              style={[
                {
                  marginLeft: 2,
                  flex: 1,
                  width: '100%',
                  color: Colors.white,
                },
                isMultiline && { textAlignVertical: 'top' },
              ]}
            />
          </>
        ) : (
          <>
            {masked && (
              <TextInputMask
                placeholder={placeholder}
                placeholderTextColor="#C4C4C4"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                type={maskType || 'custom'}
                value={rest.value}
                includeRawValueInChangeText={true}
                onChangeText={(a, valueTextOnly) =>
                  rest.onChangeText(valueTextOnly)
                }
                style={[
                  {
                    marginLeft: 2,
                    flex: 1,
                    width: '100%',
                    color: Colors.white,
                  },
                  isMultiline && { textAlignVertical: 'top' },
                ]}
              />
            )}
            {!masked && (
              <TextInput
                placeholder={placeholder}
                placeholderTextColor="#C4C4C4"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                {...rest}
                style={[
                  {
                    marginLeft: 2,
                    flex: 1,
                    width: '100%',
                    color: Colors.white,
                  },
                  isMultiline && { textAlignVertical: 'top' },
                ]}
              />
            )}
          </>
        )}
        {isPassword ? (
          <TouchableOpacity
            onPress={() => togglePasswordMask()}
            style={{ position: 'absolute', left: '85%' }}
          >
            {showPassword ? (
              // <Image
              //   style={{ width: 22, height: 22 }}
              //   source={require('Assets/Images/icon-eye-hide.png')}
              // />
              <Text style={{ color: Colors.white }}>Exibir</Text>
            ) : (
              // <Image source={require('Assets/Images/icon-eye.png')} />
              <Text style={{ color: Colors.white }}>Ocultar</Text>
            )}
          </TouchableOpacity>
        ) : null}
        <Text
          style={{
            position: 'absolute',
            fontSize: 9,
            top: 1,
            left: 5,
            color: Colors.error,
          }}
        >
          {error}
        </Text>
      </View>
    </View>
  )
}

export default Input
