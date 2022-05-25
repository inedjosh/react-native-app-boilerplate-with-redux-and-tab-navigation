import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";

import Color from "../../constants/Color";

const ButtonMain = (props) => {
  let ButtonComponent = TouchableOpacity;

  return (
    <View style={styles.container}>
      <ButtonComponent
        onPress={props.onPress}
        style={{ ...styles.button, ...props.styles }}
      >
        <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>
      </ButtonComponent>
    </View>
  );
};

export default ButtonMain;

const styles = StyleSheet.create({
  text: {
    fontFamily: "light",
    fontSize: 15,
    color: Color.white,
  },
  button: {
    height: 49,
    width: "90%",
    borderRadius: 11,
    backgroundColor: Color.primaryColor,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: Dimensions.get("window").width,
    justifyContent: "center",
    alignItems: "center",
    zIndex: -10,
  },
});
