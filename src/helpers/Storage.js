import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert, Platform} from 'react-native'
const setKeyValue = async (key, value, callback) => {
    let valuestring = '';
    if (typeof value === 'object') {
      valuestring = JSON.stringify(value);
    } else if (typeof value === 'string' || value instanceof String) {
      valuestring = value;
    } else {
      valuestring = '' + value;
    }
    try {
      await AsyncStorage.setItem(key, valuestring)
      callback && callback()
    } catch (e) {
      // Alert.alert('Failed to save the data to the storage')
      callback && callback()
    }
  }

  const storeUserData = async (userData, callback) => {
    try {
      const savedData = await AsyncStorage.getItem('USER_DATA');
      const finalUserData = Object.assign({}, savedData, userData);
      global.userInfo = finalUserData
      await setKeyValue('USER_DATA', userData, callback);
    } catch (error) {
        callback && callback(error)
    }
  };

  const getUserData = async (callback) => {
    try {
      const userInfo = await AsyncStorage.getItem('USER_DATA');
      global.userInfo = userInfo && JSON.parse(userInfo)
      callback && callback(userInfo && JSON.parse(userInfo))
        } catch (error) {
    }
  };

  const clearAllData = async (callback) => {
    try {
      global.userInfo = undefined
      const asyncStorageKeys = await AsyncStorage.getAllKeys();
      if (asyncStorageKeys.length > 0) {
        if (Platform.OS === 'android') {
          await AsyncStorage.clear();
        }
        if (Platform.OS === 'ios') {
          await AsyncStorage.multiRemove(asyncStorageKeys);
        }
      }
     callback && callback()
    } catch (error) {
    }
  };


  export {
    setKeyValue,
    clearAllData,
    getUserData,
    storeUserData
  }