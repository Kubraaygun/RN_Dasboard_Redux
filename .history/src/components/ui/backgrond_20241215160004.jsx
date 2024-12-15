// components/Background.js
import React from 'react';
import {View, ImageBackground, StyleSheet, SafeAreaView} from 'react-native';

const Background = ({children}) => {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')} // Fotoğrafınızın yolu
      style={styles.background}>
      <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  safeArea: {
    flex: 1,
  },
});

export default Background;
