import React from "react";

import { SafeAreaView, StyleSheet } from "react-native";

import OnBoarding1 from "./onBoarding1";
import OnBoarding2 from "./onBoarding2";
import OnBoarding3 from "./onBoarding3";
import OnBoardingNav from "./onBoardingNav";
import Login from "../login";

const OnBoarding = () => {

  const [onBoardScreenNo, setOnBoardScreenNo] = React.useState(1);

  function handleNextScreen() {
    setOnBoardScreenNo(onBoardScreenNo + 1);
  }

  function getOnBoardingScreen() {
    switch (onBoardScreenNo) {
      case 1:
        return <OnBoarding1 />;
      case 2:
        return <OnBoarding2 />;
      case 3:
        return <OnBoarding3 />;
      default:
        return <Login />;
    }
  }

  return <>
    <SafeAreaView style={styles.mainContainer}>
      {getOnBoardingScreen()}
      <OnBoardingNav handleNextScreen={handleNextScreen} onBoardScreenNo={onBoardScreenNo} />
    </SafeAreaView>
  </>;
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  }
});

export default OnBoarding;
