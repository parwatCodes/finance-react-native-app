import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import OnBoarding from './src/screens/onBoarding';
import OnBoardingNav from './src/screens/onBoarding/onBoardingNav';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <OnBoarding />
      {/* <OnBoardingNav /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
