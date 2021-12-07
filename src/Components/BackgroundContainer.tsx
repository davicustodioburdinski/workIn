import React from 'react'
import { ImageBackground } from 'react-native'
import useTheme from "@/Hooks/useTheme";

interface Props {
  children: any
}

const BackgroundContainer: React.FC<Props> = ({ children }) => {
  const { Layout, Images } = useTheme()

  return (
    <ImageBackground source={Images.background} style={[Layout.fullSize]}>
      {children}
    </ImageBackground>
  )
}

export default BackgroundContainer
