//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Image} from 'react-native-svg';

// create a component
const Background = () => {
  return (
    <View>
      <Image
        source={require('')} // Fotoğrafın doğru yolu
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Background;
