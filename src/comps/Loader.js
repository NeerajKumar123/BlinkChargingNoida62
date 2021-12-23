import React from 'react';
import {StyleSheet, View, Modal, Platform,Dimensions,Text, Image, ActivityIndicator} from 'react-native';
const {width, height} = Dimensions.get('window');
import * as Colors from '../constants/ColorDefs';
 const Loader = (props) => {
    return (        
      <Modal
        transparent={true}
        animationType="fade"
        visible={true}
        onRequestClose={() => {}}>
        <View
          style={styles.alertContainer}>
          <View style={styles.indicator}>
          <ActivityIndicator size = 'large' color ={Colors.WHITE}/>
          </View>
        </View>
      </Modal>
    );
  };

  export default Loader

  const styles = StyleSheet.create({
    lottie: {
      width: 150,
      height: 150,
    },
    alertContainer: {
      flex: 1,
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      backgroundColor: Colors.CLR_00000030,
      margin: 0,
      position: 'absolute',
      zIndex: 1000,
    },
    indicator: {
      width: 150,
      height: 150,
      backgroundColor: Colors.TRANS,
      justifyContent: 'space-around',
      alignItems: 'center',
      alignSelf: 'center',
    },
  });