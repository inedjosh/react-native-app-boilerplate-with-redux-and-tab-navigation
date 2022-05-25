import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import myStyles from '../../constants/myStyles'
import EmailSend from '../../svg/EMailSend'
import BodyText from '../../components/General/BodyText'
import Color from '../../constants/Color'
import ButtonMain from '../../components/General/ButtonMain'

const EmailDelivered = ({navigation}) => {
  return (
 <SafeAreaView style={myStyles.screen}>
    <View style={styles.mainView}>
        <EmailSend />
        <BodyText style={{color: Color.textGrey, textAlign: 'center', fontFamily: 'light'}}>We have sent you a reset password link
on your registered email address.</BodyText>
<View>
    <ButtonMain onPress={() => navigation.navigate('ResetPasswordScreen')}> Check Inbox</ButtonMain>
</View>
    </View>
 </SafeAreaView>
  )
}

export default EmailDelivered

const styles = StyleSheet.create({
    mainView:{
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 1,
        paddingVertical:50,
        marginTop:100
    }
})