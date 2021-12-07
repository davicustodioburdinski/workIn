import PostTreino from "@/Services/Treino/PostTreino";
import { useIsFocused, useTheme } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { Picker } from '@react-native-picker/picker' //TODO.. na minha maquina estava com erro essa import
import Input from "./Input";
import Label from "./Label";


interface Props {
    id?: string | undefined
    name?: string | undefined
    description?: string | undefined
    type?: string | undefined
    treinoUrl?: string | undefined
}

const ExercisesForm = ({
    id,
    name,
    description,
    type,
}: Props) =>{
    const { Colors, Gutters, Layout} = useTheme()

    const [isLoading, setIsLoading] = useState<boolean>(false)
    const isFocused = useIsFocused()
    
    const [treino, setTreino] = useState<Props>({
        id:id,
        name:name,
        description:description,
        type:type,
    })
    
    useEffect(() => {
        setIsLoading(true)
    
        function getTreinosList() {
          GetTreino() //TODO.. fazer o service do getTreino
            .then(resp => {
              if (resp != null) {
                setTreino(resp)
              } else {
                toast?.show('Sem treinos cadastrados', { type: 'warning' })
              }
            })
            .finally(() => setIsLoading(false))
        }
        getTreinosList()
    
        setIsLoading(false)
      }, [isFocused])


      async function sendUpdate() {
        setIsLoading(true)
        if(id != '' && id != null){
            await UpdateTreino(id, { //TODO.. Verificar
                name: treino?.name,
                description: treino?.description,
                type: treino?.type
            })
            .then(resp =>{
                if(resp?.data.success){
                    toast?.show(resp?.data?.data?.message,{
                        type: 'success',
                        placement: 'top',
                        textStyle: { alignSelf: 'center' },
                    })
                    navigate('TreinosScreen', {}) //TODO.. navigate
                }else{
                    setIsLoading(false)
                    toast?.show(resp?.error, { type: 'danger' })
                }
            })
            .finaly(() =>{
                setIsLoading(false)
            })
        }else{
            await createNewTreino()
        }
      }
      async function createNewTreino() {
        setIsLoading(true)
        await PostTreino(treino)
          .then(resp => {
            if (resp?.data?.success) {
              toast?.show(resp?.data?.data?.message, {
                type: 'success',
                placement: 'top',
                textStyle: { alignSelf: 'center' },
              })
              navigate('TreinosScreen', {}) //TODO.. navigate
            } else {
              setIsLoading(false)
              toast?.show(resp?.error, { type: 'danger' })
            }
          })
          .finally(() => {
            setIsLoading(false)
          })
      }

      async function deleteTreino() {
        setIsLoading(true)
        if (id !== '' && id != null) {
          await deleteTreino(id) //TODO.. delete
            .then(resp => {
              if (resp?.data?.success) {
                toast?.show(resp?.data?.data?.message, {
                  type: 'success',
                  placement: 'top',
                  textStyle: { alignSelf: 'center' },
                })
                navigate('TreinosScreen', {})
              } else {
                setIsLoading(false)
                toast?.show(resp?.error, { type: 'danger' })
              }
            })
            .finally(() => {
              setIsLoading(false)
            })
        }
      }

      return(
          <View
          style={[Gutters.regularHPadding, Gutters.regularVPadding, Layout.center]}
          >
              <TreinoImage url={treino?.treinoUrl} size={200} />
              <Input
                error={''}
                name={'nome do Treino'}
                placeholder={'Nome do Treino'}
                value={treino?.name}
                onChangeText={text => setTreino({ ...treino, name: text })}
            />
             <Input
                error={''}
                name={'Descrição'}
                placeholder={'Descrição'}
                value={treino?.description}
                onChangeText={text => setTreino({ ...treino, description: text })}
            />
            <Text
                style={[
                Gutters.regularHPadding,
                Gutters.regularVPadding,
                Layout.center,
                {
                    flex: 1,
                    width: '90%',
                    maxHeight: 30,
                    minHeight: 40,
                },
                ]}
            >
                <Label text={'Tipo'} color={'grey'} />
            </Text>
            <View
                style={[
                Layout.fullWidth,
                {
                    color: 'white',
                    marginLeft: 2,
                    flex: 1,
                    width: '90%',
                    borderWidth: 1,
                    borderColor: Colors.text,
                    borderRadius: 4,
                    maxHeight: 60,
                    minHeight: 60,
                },
                ]}
            >
                <Picker
                style={[
                    Layout.fullWidth,
                    {
                    color: 'white',
                    marginLeft: 2,
                    flex: 1,
                    borderWidth: 1,
                    borderColor: Colors.text,
                    },
                ]}
                selectedValue={treino?.type}
                onValueChange={itemValue =>
                    setTreino({ ...treino, type: itemValue })
                }
                >
                <Picker.Item label="Treino" value="Treino" />
                {/* <Picker.Item label="Serviço" value="Service" /> */} 
                </Picker>
            </View>
            <Button
                onPress={() => sendUpdate()}
                text={'Salvar'}
                size={'small'}
                type={'text'}
                isLoading={isLoading}
            />
            <Button
                onPress={() => deleteTreino()}
                text={'Deletar'}
                size={'small'}
                type={'text'}
                isLoading={isLoading}
            />
          </View>
      )
}
