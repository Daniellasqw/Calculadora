//imports
import React from "react";
import{Text, StyleSheet, Dimensions,TouchableHighlight} from 'react-native'

//area functions
export default props =>{
    //array que paga os style
    const stylesButton = [style.button]
    //condiçao caso o style for verdadeiro / pegando direto do props
    if(props.double)
    stylesButton.push(style.ButtonDouble)
    if(props.triple)
    stylesButton.push(style.ButtonTriple)
    if(props.operation)
    stylesButton.push(style.operationButton)

    
return (
    <TouchableHighlight onPress={props.onClick}>
        <Text style={stylesButton}>{props.label}</Text>
    </TouchableHighlight>
    
)
  
}
const height = Dimensions.get('window').width
const width = Dimensions.get('window').width

//styles
const style =StyleSheet.create({
    button: {
        fontSize: 40,
        height: height /4,
        width: width /4,
        padding:20,
        backgroundColor:'#f0f0',
        textAlign:'center',
        borderWidth:1,
        borderColor:'#888',
        
    },
    operationButton:{
        color:'#fff',
        backgroundColor:'#fa8231',
    },
    ButtonDouble: {
        width:width/4*2,
    },
    ButtonTriple: {
        width:width/4*3,
    }
})
