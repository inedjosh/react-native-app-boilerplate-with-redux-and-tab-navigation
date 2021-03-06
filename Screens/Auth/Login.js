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

const Login = ({navigation}) => {

    const dispatch = useDispatch()

    const handleLogin = async () => {
        await dispatch(login())
    }

  return (
    <SafeAreaView style={myStyles.screen}>
    <ScrollView>
          <View style={styles.mainView}>
      <View style={{marginVertical:30, justifyContent: 'center', alignItems: 'center'}}>
        <Logo />
      </View>
        <View style={{paddingHorizontal:20, marginVertical:15}}>
        <GreatingText style={styles.greatingText}>Hello Joshua      👋🏾</GreatingText>
        <DescriptionText>Login to proceed to yur account or create a new account</DescriptionText>
        </View>
        <View style={{marginTop: -40}}>
         <View style={styles.input}>
         <Input 
            placeholder={'Username'}
          />
         </View>
          <View style={styles.input}>
          <Input 
            placeholder={"\u2B24  \u2B24  \u2B24  \u2B24  \u2B24  \u2B24 "}
          />
          </View>

        </View>
        <View style={styles.btn}>
        <LinkText onPress={() => navigation.navigate('ForgotPasswordScreen')} style={{color: Color.textGrey, textAlign: 'center', marginBottom:33}}>Forget ypur PIN or this isnt you? </LinkText>
          <ButtonMain>
            Sign in
          </ButtonMain>
          <View style={styles.alignText}>
          <BodyText style={{color: Color.textGrey}}>Are you new here? </BodyText>
          <LinkText onPress={() => navigation.navigate('SignupScreen')} style={styles.linkText}>Sign Up</LinkText>
          </View>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Login

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
      marginTop:50
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