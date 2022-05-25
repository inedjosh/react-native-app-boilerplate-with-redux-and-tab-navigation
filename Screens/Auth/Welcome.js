import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'
import React from 'react'
import Button from '../../components/General/ButtonMain'
import Color from '../../constants/Color'
import LinkText from '../../components/General/LinkText'


const Welcome = ({navigation}) => {
  return (
    <View style={styles.mainView}>
  
      
          <Image 
            source={{uri: 'https://res.cloudinary.com/beam-innovations/image/upload/v1653347681/Saly-11_ucsjpe.png'}}
            style={styles.img}
          />
          <View>
            <Button onPress={() => navigation.navigate('SignupScreen')}>Create Account</Button>
            <LinkText onPress={() => navigation.navigate('LoginScreen')} style={styles.linkText}>Sign In</LinkText>
          </View>
     

   </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  mainView:{
    flex:1,
    backgroundColor: Color.bckFade,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 70
  },
  img:{
    width: 350,
    height: 350
  },
  linkText:{
    marginTop:20,
    textAlign: 'center'
  }
})