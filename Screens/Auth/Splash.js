import { StyleSheet, Text, View, Image, Button, Dimensions, FlatList } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import ThriftyBg from '../../svg/ThriftyBg'
import LinkText from '../../components/General/LinkText'
import GreatingText from '../../components/General/GreatingText'
import BodyText from '../../components/General/BodyText'
import DescriptionText from '../../components/General/DescriptionText'
import Onboarding from 'react-native-onboarding-swiper';
import Color from '../../constants/Color'


const Splash = ({navigation}) => {
  

  return(
   
    <Onboarding
    onDone={() => navigation.navigate('WelcomeScreen')}
    pages={[
      {
        backgroundColor: Color.bckFade,
        image: <Image style={styles.img} source={{uri: 'https://res.cloudinary.com/beam-innovations/image/upload/v1653347681/Saly-11_ucsjpe.png'}} />,
        title: <GreatingText style={styles.head}>Convenient Savings</GreatingText>,
        subtitle: <DescriptionText style={styles.descriptionText}>No hassle of paper work, long qeues, unnecessary bank visits.</DescriptionText>,
      },
      {
        backgroundColor: Color.bckFade,
        image: <Image style={styles.img} source={{uri: 'https://res.cloudinary.com/beam-innovations/image/upload/v1653347680/Saly-10_ncqcai.png'}} />,
        title: <GreatingText style={styles.head}>You are in Charge</GreatingText>,
        subtitle: <DescriptionText style={styles.descriptionText}>Your call credit, bank transfer, or just a help from a friend</DescriptionText>,
      },
      {
        backgroundColor: Color.bckFade,
        image: <Image style={styles.img} source={{uri: 'https://res.cloudinary.com/beam-innovations/image/upload/v1653347680/Saly-1_c6jqus.png'}} />,
        title: <GreatingText style={styles.head}>Access funds easily</GreatingText>,
        subtitle: <DescriptionText style={styles.descriptionText}>Your call credit, bank transfer, or just a help from a friend</DescriptionText>,
      },
    ]}
  />
  )}
    
export default Splash

const styles = StyleSheet.create({
  img:{
    width: 300,
    height: 300
  },
  head:{
    color: Color.primaryColor
  },
  descriptionText:{
    paddingHorizontal:20,
    textAlign: 'center'
  }
  
})