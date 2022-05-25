import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import myStyles from '../../constants/myStyles'
import GreatingText from '../../components/General/GreatingText'
import Color from '../../constants/Color'
import BodyText from '../../components/General/BodyText'
import { Feather } from '@expo/vector-icons';
import ButtonMain from '../../components/General/ButtonMain'
import LinkText from '../../components/General/LinkText'


const ForgotPassword = ({navigation}) => {
  return (
   <SafeAreaView style={myStyles.screen}>
       <View style={styles.mainView}>
            <GreatingText style={{color: Color.dark}}>Forgot Password ?</GreatingText>
            <BodyText style={{color: Color.dark, marginTop:30}}>
            Please select your registered email or mobile to reset your password.
            </BodyText>
            <View style={styles.card}>
                <View style={styles.phoneDiv} >
                <Feather name="phone" size={30} color={Color.primaryColor} />
                </View>
                <View style={styles.sms}>
                    <BodyText style={{fontSize:16, color: Color.textGrey}}>Via sms</BodyText>
                    <BodyText style={{fontFamily: 'bold', fontSize: 17}}>+234 - 090.....787</BodyText>
                </View>
            </View>
            <View style={styles.btn}>
                <ButtonMain onPress={() => navigation.navigate('EmailDeliveredScreen')}>Reset Password</ButtonMain>
                <LinkText style={{textAlign: 'center', marginTop: 30}}>Didn't receive verification code ?</LinkText>
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

export default ForgotPassword

const styles = StyleSheet.create({
    mainView:{
        paddingHorizontal:20,
        marginTop:40
    },
    card:{
        flexDirection: 'row',
        marginTop:40,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
          width: 1,
          height: 7,
        },
        shadowOpacity: .1,
        shadowRadius: 5.84,
        elevation: 4,
        paddingVertical:15,
        paddingHorizontal:15,
        borderRadius: 17
    },
    phoneDiv:{
        width:80,
        height:80,
        borderRadius:40,
        backgroundColor: '#F2F2FF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    sms:{
        paddingLeft:20,

    },
    btn:{
        marginTop:150,
        marginLeft:-20,

    },
    alignText:{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 20
      },
      linkText:{
        color: Color.linkBlue, fontFamily: 'light', paddingLeft: 5
      },
})