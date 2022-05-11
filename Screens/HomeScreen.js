import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const HomeScreen = () => {

    const {user} = useSelector(state => state.auth)


  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex:1, backgroundColor: '#fff'}}>
      <Text style={{fontFamily: 'bold', fontSize:20}}>HomeScreen</Text> 
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})