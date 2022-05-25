import { StyleSheet, Text,  } from 'react-native'
import React from 'react'

const BodyText = (props) => {
  return (
    
      <Text style={{...styles.text, ...props.style}}>{props.children}</Text>
  
  )
}

export default BodyText

const styles = StyleSheet.create({
    text:{
        fontFamily: 'medium',
        // opacity: .3,
        fontSize: 14
    }
})