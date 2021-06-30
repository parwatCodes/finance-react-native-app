import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';

interface Props {
  handleNextScreen: () => void;
  onBoardScreenNo: number;
}

const OnBoardingNav = (props: Props) => {
  const width = Dimensions.get('window').width;

  return <View style={[styles.mainTabContainer, { width }]}>
    <View style={styles.dotContainer}>
      <Text style={styles.dot}></Text>
      <Text style={styles.dot}></Text>
      <Text style={styles.dot}></Text>
    </View>
    <Text style={styles.text} onPress={props.handleNextScreen}>NEXT</Text>
  </View>;
};

const styles = StyleSheet.create({
  mainTabContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1
  },
  dotContainer: {
    paddingLeft: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    width: 80
  },
  dot: {
    height: 12,
    width: 12,
    backgroundColor: "#e4ede6",
    borderRadius: 8,
    overflow: "hidden"
  },
  text: {
    fontSize: 15,
    paddingRight: 20,
    fontWeight: "700",
  }
});

export default OnBoardingNav;
