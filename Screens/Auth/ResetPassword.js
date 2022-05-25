import { StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions/auth'
import GreatingText from '../../components/General/GreatingText'
import DescriptionText from '../../components/General/DescriptionText'
import Logo from '../../svg/Logo'
import Input from '../../components/General/Input'
import myStyles from '../../constants/myStyles'
import ButtonMain from '../../components/General/ButtonMain'
import LinkText from '../../components/General/LinkText'
import Color from '../../constants/Color'
import BodyText from '../../components/General/BodyText'

const ResetPasword = ({navigation}) => {

    const dispatch = useDispatch()

    const handleLogin = async () => {
        await dispatch(login())
    }

  return (
    <SafeAreaView style={myStyles.screen}>
    <ScrollView>
          <View style={styles.mainView}>
     
        <View style={{paddingHorizontal:20, marginVertical:15, marginTop:40}}>
        <GreatingText style={styles.greatingText}>Reset your password</GreatingText>
        <DescriptionText style={{marginTop:15}}>Please enter your new password and confirm
the password.</DescriptionText>
        </View>
        <View style={{marginTop: -15}}>
         <View style={styles.input}>
         <Input 
            placeholder={'New password'}
          />
         </View>
          <View style={styles.input}>
          <Input 
            placeholder={"Confirm password"}
          />
          </View>

        </View>
        <View style={styles.btn}>
       
          <ButtonMain>
           Reset passowrd
          </ButtonMain>
          
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ResetPasword

const styles = StyleSheet.create({
  screen:{
     backgroundColor: '#fff'
    },
    mainView:{
      marginTop:40,

    },
    logoImg:{
      height:50,
      width:50
    },
    greatingText:{
      fontFamily: 'bold'
    },
    input:{
      marginTop:60
    },
    btn:{
      marginTop:100
    },
    alignText:{
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop:20
    },
    linkText:{
      color: Color.primaryColor, fontFamily: 'light', paddingLeft: 5
    }
})