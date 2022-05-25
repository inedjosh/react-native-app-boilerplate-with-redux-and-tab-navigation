import { StyleSheet, TextInput, View, SafeAreaView } from 'react-native'
import React from 'react'
import myStyles from '../../constants/myStyles'
import GreatingText from '../../components/General/GreatingText'
import Color from '../../constants/Color'
import BodyText from '../../components/General/BodyText'
import Input from '../../components/General/Input'
import ButtonMain from '../../components/General/ButtonMain'
import LinkText from '../../components/General/LinkText'


const SignupOtp = () => {
  return (
   <SafeAreaView style={myStyles.screen}>
      <View style={styles.mainView}>
        <GreatingText style={{color: Color.dark}}>Verify Account !</GreatingText>
        <BodyText style={styles.descriptionText}>We sent a 4-digit Code  to your number *******1787 </BodyText>
        <View style={styles.inputDiv}>
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
          <TextInput style={styles.input} />
        </View>
        <View style={styles.btn}>
          <ButtonMain >Verify Account</ButtonMain>
          <LinkText style={styles.code}>Didn't receive a verification code? </LinkText>
          <View style={styles.alignText}>
          <LinkText style={{color: Color.linkBlue, fontFamily: 'light'}}> Resend code</LinkText>
          <BodyText>  | </BodyText>
          <LinkText onPress={() => navigation.navigate('LoginScreen')} style={styles.linkText}>Change number</LinkText>
          </View>
        </View>
      </View>
   </SafeAreaView>
  )
}

export default SignupOtp

const styles = StyleSheet.create({
  mainView:{
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
  },
  descriptionText:{
    paddingHorizontal:20,
    textAlign: 'center',
    color: Color.dark,
    marginTop:40
  },
  inputDiv:{
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal:50,
    justifyContent: 'space-between',
    marginTop:40
  },
  input:{
    height:49,
    width:58,
    backgroundColor: Color.bckGrey,
    borderRadius: 8
  },
  btn:{
    marginTop:55
  },
  alignText:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    
  },
  linkText:{
    color: Color.linkBlue, fontFamily: 'light', paddingLeft: 5
  },
  code:{
    marginVertical:45,
    textAlign: 'center',
    fontFamily: 'light',
    color: Color.textGrey
  }

})