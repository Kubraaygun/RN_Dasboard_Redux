// components/Background.js
import React from 'react';
import {View, Image, StyleSheet, SafeAreaView} from 'react-native';

const Background = ({children}) => {
  return (
    <image
      source={require('')} // Fotoğrafınızın yolu
      style={styles.background}>
      <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
    </image>
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
