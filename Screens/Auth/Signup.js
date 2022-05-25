import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import myStyles from '../../constants/myStyles'
import Logo from '../../svg/Logo'
import GreatingText from '../../components/General/GreatingText'
import Input from '../../components/General/Input'
import Color from '../../constants/Color'
import ButtonMain from '../../components/General/ButtonMain'
import BodyText from '../../components/General/BodyText'
import LinkText from '../../components/General/LinkText'
import { NavigationContainer } from '@react-navigation/native'

const Signup = ({navigation}) => {
  return (
    <SafeAreaView style={myStyles.screen}>
    <ScrollView>

      <View style={styles.mainView}>

      <View style={styles.logo}>
      <Logo />
      </View>
      <View>
        <GreatingText style={styles.GreatingText}>
          Hello {'\n'} Let's get you started
        </GreatingText>
        <View>
        <View style={{marginTop:-20}}>
        <View style={styles.input}>
        <Input 
         err={false}
         placeholder={'Username'}
          />
        </View>
        <View style={styles.input}>
        <Input 
         err={false}
         placeholder={'Phone Number'}
          />
        </View>
        <View style={styles.input}>
        <Input 
         err={false}
         placeholder={"\u2B24  \u2B24  \u2B24  \u2B24  \u2B24  \u2B24 "}
          />
        </View>
        </View>
        </View>
        <View style={{marginTop:65}}>
          <ButtonMain onPress={() => navigation.navigate('SignupOtpScreen')}>Create Account</ButtonMain>
          <View style={styles.alignText}>
          <BodyText style={{color: Color.textGrey}}> Already have an account?</BodyText>
          <LinkText onPress={() => navigation.navigate('LoginScreen')} style={styles.linkText}>Login In</LinkText>
          </View>
        </View> 
      </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({
  mainView:{
    marginTop:60
  },
  logo:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  GreatingText:{
    textAlign: 'center',
    marginTop:20,
    color: Color.dark
  },
  input:{
    marginTop:60
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