import { useTheme } from "@/Hooks";
import React from "react";
import { View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { TextInputMask } from "react-native-masked-text";
import Label from "./Label";


interface Props{
    id:string,
    name: string,
    description:string,
    onPress():void
}

const ListCard =({
    id,
    name,
    description,
    onPress,
}:Props) =>{
    const { Layout, Fonts, Gutters, Colors, Common } = useTheme()

    return(
        <TouchableOpacity
            onPress={() => onPress()}
            style = {[
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
            <View
             style={[{backgroundColor:'transparent'}]} >
                <Label 
                    text={name}
                    type={'text'} 
                    bold={true} 
                    size={'regular'}/>
                <Label
                    text={description}
                    type={'text'}
                    size={"small"}
                    color={'lightgray'}
                />
            </View>
        </TouchableOpacity>
    )
}


ListCard.defaultProps = {
    id:null,
    description: null
}

export default ListCard