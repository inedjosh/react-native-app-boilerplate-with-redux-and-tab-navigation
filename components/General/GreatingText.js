import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GreatingText = (props) => {
  return (

      <Text style={{...styles.text, ...props.style}}>{props.children}</Text>
 
  )
}

export default GreatingText

const styles = StyleSheet.create({
    text:{
        fontFamily: 'bold',
        fontSize: 20,
    }
})