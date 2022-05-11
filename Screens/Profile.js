import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { logout } from '../redux/actions/auth'
import { useDispatch } from 'react-redux'


const Profile = () => {

    const dispatch = useDispatch()

    const handleLogOut = async() => {
       await dispatch(logout())
    }

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex:1, backgroundColor: '#fff'}}>
      <Text style={{fontFamily: 'bold', fontSize:15}}>Profile</Text>
      <TouchableOpacity onPress={handleLogOut}>
          <Text style={{fontFamily: 'bold', fontSize:20, marginTop:30}}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})