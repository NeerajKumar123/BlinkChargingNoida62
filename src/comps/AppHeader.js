import React from 'react';
import {
  View,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';
import * as Colors from '../constants/ColorDefs';
import * as CustomFonts from '../constants/FontsDefs'
const AppHeader = props => {
  const {onLeftClicked  = undefined, onRightClicked = undefined, navigation = undefined} = props;
  return (
    <>
      <StatusBar barStyle='light-content' />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          paddingHorizontal: 16,
          marginTop:44,
          backgroundColor: 'white',
          paddingVertical: 5,
          justifyContent: 'space-between',
          backgroundColor:Colors.BLACK
        }}>
          <TouchableOpacity
            onPress={() => {
              onLeftClicked ? onLeftClicked() : navigation.goBack()
            }}>
            <Image
              source={CustomFonts.back}
              resizeMode="contain"
              style={{
                width: 32,
                height: 32,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
          onPress={() => {
            onRightClicked ? onRightClicked() :navigation.popToTop && navigation.popToTop()
          }}>
          <Image
            source={CustomFonts.header_logo}
            resizeMode="contain"
            style={{
              width: 40,
              height: 40,
            }}
          />
        </TouchableOpacity>
        </View>
    </>
  );
};

export default AppHeader;
