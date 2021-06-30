import React from "react";
import { View, StyleSheet, ImageBackground, Text } from 'react-native';

const OnBoarding2 = (props) => {

  return <View>
    <ImageBackground source={require('../../assets/images/white.png')} style={styles.image}>
      <Text style={styles.text}>SKIP</Text>
    </ImageBackground>
    <View style={styles.message}>
      <Text style={styles.mainMessage}>We’ll keep you on track</Text>
      <Text style={styles.subMessage}>Mauris quis orci faucibus, egestas nibh sed vestibulum elit. Nam est dui, accumsan a lorem tincidunt, pellentesque pulvinar lorem.</Text>
    </View>
  </View>;
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  text: {
    textAlign: "right",
    fontWeight: "700",
    paddingRight: 20,
    paddingTop: 20
  },
  message: {
    flex: 1,
    padding: 20,
  },
  mainMessage: {
    fontSize: 25,
    fontWeight: "bold"
  },
  subMessage: {
    marginTop: 10,
    fontSize: 18
  }
});

export default OnBoarding2;
