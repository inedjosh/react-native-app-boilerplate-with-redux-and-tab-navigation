import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

const Splash = ({navigation}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex:1, backgroundColor: '#fff'}}>
      <Text>Splash</Text>
      <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text>Next</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})