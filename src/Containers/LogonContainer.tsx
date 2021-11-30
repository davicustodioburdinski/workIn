import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Brand } from '@/Components'
import { useTheme } from '@/Hooks'
import { useLazyFetchOneQuery } from '@/Services/modules/users'
import { changeTheme, ThemeState } from '@/Store/Theme'
import Input from '@/Components/Input'
import Button from '@/Components/Button'
import TextButton from '@/Components/TextButton'
import LinkButton from '@/Components/LinkButton'
import Label from '@/Components/Label'

interface LoginFormModel {
  email: string
  password: string
}

const LogonContainer = () => {
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout, Colors } = useTheme()
  const [loginForm, setLoginForm] = useState<LoginFormModel>({
    email: '',
    password: '',
  })
  const dispatch = useDispatch()

  const [userId, setUserId] = useState('9')
  const [fetchOne, { data, isSuccess, isLoading, isFetching, error }] =
    useLazyFetchOneQuery()

  useEffect(() => {
    fetchOne(userId)
  }, [fetchOne, userId])

  const onChangeTheme = ({ theme, darkMode }: Partial<ThemeState>) => {
    dispatch(changeTheme({ theme, darkMode }))
  }

  return (
    <ScrollView
      style={[Layout.fill, Common.backgroundPrimary]}
      contentContainerStyle={[
        Layout.fill,
        Layout.colCenter,
        Gutters.smallHPadding,
      ]}
    >
      <View
        style={[[Layout.colCenter, Gutters.smallHPadding, Layout.fullSize]]}
      >
        <Brand />
        {(isLoading || isFetching) && <ActivityIndicator />}
        {!isSuccess ? (
          <Text style={Fonts.textRegular}>{error}</Text>
        ) : (
          <>
            <Text style={[Fonts.textCenter, { color: Colors.white }]}>
              Bem-vindo(a) ao WorkIn
            </Text>
            <Text style={[Fonts.textCenter, { color: Colors.white }]}>
              Faça Login para continuar
            </Text>
          </>
        )}
        <View style={[Layout.fullWidth]}>
          <Input
            error={''}
            name={'E-mail'}
            placeholder={'E-mail'}
            value={loginForm.email}
            onChangeText={text => setLoginForm({ ...loginForm, email: text })}
          />
          <Input
            error={''}
            name={'Senha'}
            placeholder={'Senha'}
            value={loginForm.password}
            onChangeText={text =>
              setLoginForm({ ...loginForm, password: text })
            }
            isPassword={true}
          />
        </View>
        <Button
          size={'small'}
          inverted={true}
          bold={false}
          type={'text'}
          text={'Entrar'}
          onPress={() => Alert.alert('Login!')}
        />
      </View>
    </ScrollView>
  )
}

export default LogonContainer
