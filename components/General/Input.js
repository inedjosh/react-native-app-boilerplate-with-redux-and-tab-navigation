import { StyleSheet, TextInput, View, TouchableOpacity, Dimensions } from 'react-native'
import React, {useState} from 'react'
import { Feather } from '@expo/vector-icons';
import Color from '../../constants/Color';


const Input = (props) => {

  const [see, setSee] = useState(false)

  const handleSee = () => {
    setSee(!see);
  };

  return (
    <View style={styles.center}>
       <TextInput
        style={props.err ? styles.err : styles.input}
        selectionColor={Color.primaryColor}
        autoCorrect={false}
        autoCapitalize="none"
        importantForAutofill={"no"}
        secureTextEntry={see ? false : true}
        placeholderTextColor={Color.textGrey}
        {...props}
      />
      <View style={styles.eye}>
      {
        see 
        ?
        <TouchableOpacity onPress={handleSee}>
      <Feather name="eye" size={24} color={Color.primaryColor} />
      </TouchableOpacity>
       :
       <TouchableOpacity onPress={handleSee}>
      <Feather name="eye-off" size={24} color={Color.textGrey} />
      </TouchableOpacity>
      }
      </View>
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    input: {
        width: "90%",
        color: Color.dark,
        height: 55,
        fontFamily: "normal",
        backgroundColor: Color.bckGrey,
        borderRadius: 6,
        paddingLeft: 15,
        fontFamily: "normal",
      
      },
      center:{
        justifyContent: 'center',
        alignItems: 'center'
      },
      eye:{
        marginTop: -42,
        marginRight: Dimensions.get('window').width - 680
      },
      err:{
        width: "90%",
        color: Color.dark,
        height: 55,
        fontFamily: "normal",
        backgroundColor: Color.bckErr,
        borderRadius: 6,
        paddingLeft: 15,
        fontFamily: "normal",
      }

})