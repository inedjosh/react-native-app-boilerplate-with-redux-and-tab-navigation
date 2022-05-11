import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/auth'

const Login = () => {

    const dispatch = useDispatch()

    const handleLogin = async () => {
        await dispatch(login())
    }

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex:1, backgroundColor: '#fff'}}>
    <TouchableOpacity onPress={handleLogin}>
       <Text style={{fontSize: 20, fontFamily: 'bold'}}>Login</Text>
       </TouchableOpacity>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({})