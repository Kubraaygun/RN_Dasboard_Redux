//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image} from 'react-native-svg';

// create a component
const Background = ({children}) => {
  return (
    <View>
      <Image
        source={require('../../assets/images/imgg.jpg')} // Fotoğrafın doğru yolu
        style={styles.background}>
        <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
      </Image>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',r
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Background;
